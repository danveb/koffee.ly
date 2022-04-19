const mongoose = require("mongoose"); 

// productSchema
const productSchema = mongoose.Schema({
    title: {
        type: String, 
        required: true, 
    }, 
    description: {
        type: String, 
        required: true
    }, 
    img: {
        type: String, 
        required: true
    }, 
    categories: {
        type: Array, 
    }, 
    size: {
        type: Array, 
    }, 
    color: {
        type: Array, 
    }, 
    price: {
        type: Number, 
        required: true
    }, 
    inStock: {
        type: Boolean, 
        default: true
    },
}, {
    timestamps: true 
})

module.exports = mongoose.model("Product", productSchema)