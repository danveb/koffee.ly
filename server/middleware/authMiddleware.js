// Auth Middleware that runs during req/res cycle
import jwt from "jsonwebtoken"; 
import asyncHandler from "express-async-handler"; 
import User from "../models/userModel.js";

const protect = asyncHandler(async(req, res, next) => {
    let token; 
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1];
            // Verify token 
            const decoded = jwt.verify(token, process.env.JWT_SECRET); 
            // Get user from token without the password
            req.user = await User.findById(decoded.id).select('-password');
            // Call next piece of middleware
            next();
        } catch(error) {
            res.status(401)
            throw new Error("Not Authorized"); 
        };
    };

    if(!token) {
        res.status(401);
        throw new Error("Not Authorized, no token"); 
    };
});

const protectAdmin = asyncHandler(async(req, res, next) => {
    let token; 
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1];
            // Verify token 
            const decoded = jwt.verify(token, process.env.JWT_SECRET); 
            // Get user from token 
            req.user = await User.findById(decoded.id).select("-password");
            if(req.user.isAdmin) {
                next() ;
            } else {
                res.status(401);
                throw new Error("No Admin privileges");
            };
        } catch(error) {
            res.status(401);
            throw new Error("No Admin privileges"); 
        };
    };

    if(!token) {
        res.status(401);
        throw new Error("Not Authorized, no token"); 
    };
});

export {
    protect, 
    protectAdmin,
}