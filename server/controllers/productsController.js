import asyncHandler from "express-async-handler"; 
import Product from "../models/productModel.js";

// @description: Get Product
// @route: GET /api/products
const getAllProducts = asyncHandler(async(req, res) => {
    const products = await Product.find({}); 
    if(!products) {
        res.status(400); 
        throw new Error('Products not found'); 
    }
    res.status(200).json(products); 
});

// @description: Get Product
// @route: GET /api/products/:id
const getProduct = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)
    if(!product) {
        res.status(400); 
        throw new Error('Product not found'); 
    }
    res.status(200).json(product); 
});

// @description: Create Product
// @route: POST /api/products
const createProduct = asyncHandler(async(req, res) => {
    const { title, description, img, categories, size, color, price } = req.body; 
    const product = await Product.create({
        title, 
        description, 
        img, 
        categories, 
        size, 
        color,
        price
    })

    if(product) {
        res.status(201).json({
            _id: product.id, 
            title: product.title, 
            description: product.description, 
            img: product.img, 
            categories: product.categories, 
            size: product.size, 
            color: product.color, 
            price: product.price, 
            createdAt: product.createdAt, 
            updatedAt: product.updatedAt
        })
    } else {
        res.status(400)
        throw new Error("Invalid product entry")
    }
}); 

// @description: Update Product 
// @route: PUT /api/products/:id 
const updateProduct = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)
    if(!product) {
        res.status(400); 
        throw new Error('Product not found'); 
    };

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedProduct); 
}); 

// @description: Delete Product
// @route: DELETE /api/products/:id 
const deleteProduct = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)
    if(!product) {
        res.status(400); 
        throw new Error('Product not found'); 
    }
    await Product.findByIdAndDelete(req.params.id)
    res.status(200).json({ id: req.params.id }); 
})

export {
    getAllProducts, 
    getProduct, 
    createProduct, 
    updateProduct, 
    deleteProduct, 
}