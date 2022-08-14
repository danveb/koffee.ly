import asyncHandler from "express-async-handler"; 
import bcrypt from "bcryptjs"; 
import jwt from "jsonwebtoken"; 
import User from "../models/userModel.js";

// Generate JWT (token) 
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d"     
    }); 
}; 

// @description: Register User 
// @route: POST /api/users/register
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body; 
    // name/email/password length check 
    if(name.length === 0) {
        res.status(400); 
        throw new Error("Please enter your name. Don't leave this field empty."); 
    } else if(email.length === 0) {
        res.status(400); 
        throw new Error("Please your email. Don't leave this field empty."); 
    } else if(password.length < 4) {
        res.status(400); 
        throw new Error("Please create a new password. It should be at least 4 characters."); 
    } else if(!name || !email || !password) {
        res.status(400); 
        throw new Error("Please add all fields"); 
    }; 
    // check if user already exists by finding email
    const userExists = await User.findOne({ email }); 
    if(userExists) {
        res.status(400); 
        throw new Error("User already exists"); 
    }; 

    // hash password with BCRYPTJS 
    // - generate salt with 10 rounds (max 12) 
    const salt = await bcrypt.genSalt(10); 
    // - hash password 
    const hashedPassword = await bcrypt.hash(req.body.password, salt); 

    // register user with req.body 
    // - pass hashed password
    const user = await User.create({
        name, 
        email, 
        password: hashedPassword, 
    }); 
    if(user) {
        // res.status(201).json(user) no longer works as we
        // need make sure to get the token back
        res.status(201).json({
            _id: user._id, 
            name: user.name, 
            email: user.email, 
            password: user.password, 
            isAdmin: user.isAdmin, 
            createdAt: user.createdAt, 
            updatedAt: user.updatedAt, 
            token: generateToken(user._id), // JWT here
        }); 
    } else {
        res.status(400); 
        throw new Error("Invalid User"); 
    }; 
}); 

// @description: Login User 
// @route: POST /api/users/login
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body; 
    // check user's email but NOT found 
    const user = await User.findOne({ email }); 
    if(!user) {
        res.status(400); 
        throw new Error("User not found"); 
    };

    // if correct user 
    // potentially can use .matchPassword method from userModel
    if(user && await bcrypt.compare(password, user.password)) {
        res.json({
            _id: user._id, 
            name: user.name, 
            email: user.email, 
            isAdmin: user.isAdmin, 
            createdAt: user.createdAt, 
            updatedAt: user.updatedAt, 
            token: generateToken(user._id), // JWT here
        }); 
    } else {
        res.status(401); 
        throw new Error("Invalid Credentials"); 
    }; 
}); 

// @description: Get User Profile
// @route: GET /api/users/profile
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id); 
    if(!user) {
        res.status(404); 
        throw new Error("User not found"); 
    } 
    res.json({
        _id: user._id, 
        name: user.name, 
        email: user.email, 
        isAdmin: user.isAdmin, 
        createdAt: user.createdAt, 
        updatedAt: user.updatedAt, 
        token: generateToken(user._id), // JWT here
    }); 
}); 

// @description: Update User 
// @route: PUT /api/users/profile
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id); 
    if(!user) {
        res.status(400); 
        throw new Error("User not found"); 
    } else {
        user.name = req.body.name || user.name; 
        user.email = req.body.email || user.email; 
        if(req.body.password) {
            user.password = req.body.password; 
        }; 

        // update the user and include the password
        const updatedUser = await User.findByIdAndUpdate(req.user._id, {$set: req.body}, {new: true}); 
        // re-hash (10 rounds) user password and save to database 
        updatedUser.password = await bcrypt.hash(updatedUser.password, 10); 
        updatedUser.save(); 
        res.status(200).json(updatedUser); 
    }; 
}); 

// export all 
export {
    registerUser, 
    loginUser, 
    getUserProfile,
    updateUser, 
}