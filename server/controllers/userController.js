const bcrypt = require("bcryptjs"); 
const asyncHandler = require("express-async-handler"); 
const User = require("../models/userModel"); 

// description: Get All Users
// route: GET /api/users
// access: privateAdmin
// query: allowed
const getAllUsers = asyncHandler(async(req, res) => {
    // req.query.new (limit 5)
    const query = req.query.new;
    const users = query 
        ? await User.find().sort({_id:-1}).limit(5) 
        : await User.find()
    if(!users) {
        res.status(400); 
        throw new Error('Users not found'); 
    }
    res.status(200).json(users); 
});

// description: Get User 
// route: GET /api/user/:id 
// access: privateAdmin
const getUser = asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id)
    if(!user) {
        res.status(400); 
        throw new Error('User not found'); 
    }
    await User.findById(req.params.id)
    res.status(200).json({ 
        _id: user.id, 
        username: user.username, 
        email: user.email, 
        isAdmin: user.isAdmin, 
        createdAt: user.createdAt, 
    }); 
});

// description: Get User Stats
// route: PUT /api/users/stats
// access: privateAdmin
const getUserStats = asyncHandler(async(req, res) => {
    const date = new Date(); 
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    // group items with "aggregate" MONGODB
    const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
            $project: {
                month: { $month: "$createdAt" }, 
            },
        },
        {
            $group: {
                _id: "$month", 
                total: { $sum: 1 }
            },
        },
    ])
    console.log(date)
    console.log(data) 

    res.status(200).json(data)

    if(!data) {
        res.status(400)
        throw new Error('No data found') 
    }
});

// description: Update User 
// route: PUT /api/users/:id 
// access: private 
const updateUser = asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id)
    if(!user) {
        res.status(400); 
        throw new Error('User not found'); 
    };

    // any change is allowed
    const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body}, { new: true }); 
    // re-hash user password and save to database 
    updatedUser.password = await bcrypt.hash(updatedUser.password, 10); 
    updatedUser.save(); 
    res.status(200).json(updatedUser); 
});

// description: Delete User 
// route: PUT /api/users/:id 
// access: privateAdmin
const deleteUser = asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id)
    if(!user) {
        res.status(400); 
        throw new Error('User not found'); 
    }
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json({ id: req.params.id }); 
})

module.exports = {
    getAllUsers, 
    getUser, 
    getUserStats, 
    updateUser, 
    deleteUser
}