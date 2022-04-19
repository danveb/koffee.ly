const jwt = require("jsonwebtoken"); 
const bcrypt = require("bcryptjs"); 
const asyncHandler = require("express-async-handler"); 
const User = require("../models/userModel"); 

// Generate JWT (token)
const generateToken = (id, isAdmin) => {
    return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

// description: Register New User 
// route: POST /api/auth/register 
// access: public 
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if(!username || !email || !password) {
        res.status(400)
        throw new Error("Please add all fields")
    }; 

    // check if user exists by email 
    const userExists = await User.findOne({ email });
    if(userExists) {
        res.status(400)
        throw new Error("User already exists")
    }; 

    // hash password with bcryptJS 
    // - generate salt to hash password 
    const salt = await bcrypt.genSalt(10); 
    // - hash the password 
    const hashedPassword = await bcrypt.hash(password, salt); 

    // Create user with username/email/hashedPassword 
    const user = await User.create({
        username, 
        email, 
        password: hashedPassword
    }); 

    if(user) {
        res.status(201).json({
            _id: user.id, 
            username: user.username, 
            email: user.email, 
            isAdmin: user.isAdmin, 
            createdAt: user.createdAt, 
            token: generateToken(user._id, user.isAdmin) // display token
        })
    } else {
        res.status(400) 
        throw new Error("Invalid user data"); 
    }; 
});

// description: Login User 
// route: POST /api/auth/login
// access: public 
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body; 

    // check for current user 
    const user = await User.findOne({ email }); 

    // compare bcrypt password and user.password 
    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id, 
            username: user.username, 
            email: user.email, 
            isAdmin: user.isAdmin, 
            createdAt: user.createdAt, 
            token: generateToken(user._id, user.isAdmin) // display token
        })
    } else {
        res.status(400)
        throw new Error("Invalid credentials"); 
    }; 
})

module.exports = {
    registerUser, 
    loginUser, 
}