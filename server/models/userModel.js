import mongoose from "mongoose"; 

// userSchema
const userSchema = mongoose.Schema({
    // all fields 
    name: {
        type: String, 
        required: true,
    }, 
    email: {
        type: String, 
        required: true, 
        unique: true, 
    }, 
    password: {
        type: String, 
        required: true, 
    }, 
    isAdmin: {
        type: Boolean, 
        required: true, 
        default: false
    }
}, {
    timestamps: true 
})

// potentially can add methods to schema 
// anyway it's being handled in userController
// userSchema.methods.matchPassword = async function(enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password); 
// }; 

const User = mongoose.model("User", userSchema)
export default User