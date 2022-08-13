import mongoose from "mongoose"; 

// productSchema
const productSchema = mongoose.Schema({
    // all fields 
    user: {
        type: mongoose.Schema.Types.ObjectId, // which user created the product
        required: true,
        ref: "User", // relationship with User model
    }, 
    name: {
        type: String, 
        required: true, 
    }, 
    image: {
        type: String, 
        required: true, 
    }, 
    caption: {
        type: String, 
        required: true, 
    },
    about: {
        type: String, 
        required: true, 
    },
    description: {
        type: String, 
        required: true, 
    }, 
    brand: {
        type: String, 
        required: true, 
    }, 
    category: {
        type: String, 
        required: true, 
    }, 
    price: {
        type: Number, 
        required: true, 
        default: 0, 
    }, 
    countInStock: {
        type: Number, 
        required: false, 
        default: 0, 
    }, 
}, {
    timestamps: true 
})

const Product = mongoose.model("Product", productSchema) 
export default Product 