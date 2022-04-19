// Auth Middleware that runs during req/res cycle
const jwt = require('jsonwebtoken'); 
const asyncHandler = require('express-async-handler'); 
const User = require('../models/userModel'); 

const protect = asyncHandler(async(req, res, next) => {
    let token; 
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1];
            // Verify token 
            const decoded = jwt.verify(token, process.env.JWT_SECRET); 
            // Get user from token 
            req.user = await User.findById(decoded.id).select('-password')
            // Call next piece of middleware
            next()
        } catch(error) {
            res.status(401)
            throw new Error('Not Authorized'); 
        }
    }

    if(!token) {
        res.status(401)
        throw new Error('Not Authorized, no token'); 
    }
})

const protectAdmin = asyncHandler(async(req, res, next) => {
    let token; 
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1];
            // Verify token 
            const decoded = jwt.verify(token, process.env.JWT_SECRET); 
            // Get user from token 
            req.user = await User.findById(decoded.id).select('-password')
            if(req.user.isAdmin) {
                next() 
            } else {
                res.status(401)
                throw new Error('No Admin privileges')
            }
        } catch(error) {
            res.status(401)
            throw new Error('No Admin privileges'); 
        }
    }

    if(!token) {
        res.status(401)
        throw new Error('Not Authorized, no token'); 
    }
})

module.exports = {
    protect, 
    protectAdmin,
}