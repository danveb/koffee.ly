const mongoose = require("mongoose"); 

// userSchema
const userSchema = mongoose.Schema({
    username: {
        type: String, 
        required: [true, 'Please add a username'], 
        unique: [true, 'Username already exists']
    }, 
    email: {
        type: String, 
        required: [true, 'Please add an email'], 
        unique: [true, 'Email already exists']
    }, 
    password: {
        type: String, 
        required: [true, 'Please add a password']
    }, 
    isAdmin: {
        type: Boolean, 
        default: false
    }
}, {
    timestamps: true 
})

module.exports = mongoose.model("User", userSchema)