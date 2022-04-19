const asyncHandler = require("express-async-handler"); 
const Product = require("../models/productModel"); 

// description: Get Product
// route: GET /api/products/find/:id
// access: ALL 
// query: new, categories
const getAllProducts = asyncHandler(async(req, res) => {
    const query = req.query.new;
    const category = req.query.category; 

    let products; 
    if(query) {
        products = await Product.find().sort({ createAt: -1}).limit(5) 
    } else if(category) {
        products = await Product.find({ categories: {
            $in: [category], 
        }})
    } else {
        products = await Product.find()
    }

    if(!products) {
        res.status(400); 
        throw new Error('Products not found'); 
    }
    res.status(200).json({ products }); 
});

// description: Get Product
// route: GET /api/products/find/:id
// access: ALL 
const getProduct = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)
    if(!product) {
        res.status(400); 
        throw new Error('Product not found'); 
    }
    await Product.findById(req.params.id)
    res.status(200).json(product); 
});

// description: Create Product
// route: POST /api/products
// access: privateAdmin
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

// description: Update Product 
// route: PUT /api/products/:id 
// access: privateAdmin 
const updateProduct = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)
    if(!product) {
        res.status(400); 
        throw new Error('Product not found'); 
    };

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedProduct); 
}); 

// description: Delete Product
// route: DELETE /api/products/:id 
// access: privateAdmin 
const deleteProduct = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)
    if(!product) {
        res.status(400); 
        throw new Error('Product not found'); 
    }
    await Product.findByIdAndDelete(req.params.id)
    res.status(200).json({ id: req.params.id }); 
})

module.exports = {
    getAllProducts, 
    getProduct, 
    createProduct, 
    updateProduct, 
    deleteProduct,
}