const asyncHandler = require("express-async-handler"); 
const Cart = require("../models/cartModel"); 

// description: Get All Carts
// route: GET /api/carts/
// access: privateAdmin
const getAllCarts = asyncHandler(async(req, res) => {
    const carts = await Cart.find()
    if(!carts) {
        res.status(400); 
        throw new Error('Carts not found'); 
    }
    res.status(200).json(carts); 
});

// description: Get User Cart
// route: GET /api/carts/find/:userId
// access: private
const getUserCart = asyncHandler(async(req, res) => {
    const cart = await Cart.findOne({ userId: req.params.userId })
    if(!cart) {
        res.status(400); 
        throw new Error('Cart not found'); 
    }
    res.status(200).json(cart); 
});

// description: Create Cart
// route: POST /api/carts
// access: private
// const createCart = asyncHandler(async(req, res) => {
//     const { userId, productId, quantity } = req.body;
//     const cart = await Cart.create({
//         userId, 
//         products: [{
//             productId: productId,
//             quantity: quantity
//         }],
//     })

//     if(cart) {
//         res.status(201).json({
//             userId: cart.userId, 
//             products: [{
//                 productId: cart.productId, 
//                 quantity: cart.quantity,
//             }], 
//             createdAt: cart.createdAt, 
//             updatedAt: cart.updatedAt
//         })
//     } else {
//         res.status(400)
//         throw new Error("Invalid Cart")
//     }
// }); 

const createCart = asyncHandler(async(req, res) => {
    const newCart = new Cart(req.body);
    const savedCart = await newCart.save() 
    res.status(201).json(savedCart)
})

// description: Update Cart 
// route: PUT /api/carts/:id 
// access: private 
const updateCart = asyncHandler(async(req, res) => {
    const cart = await Cart.findById(req.params.id)
    if(!cart) {
        res.status(400); 
        throw new Error('Cart not found'); 
    };

    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedCart); 
}); 

// description: Delete Cart
// route: DELETE /api/carts/:id 
// access: private 
const deleteCart = asyncHandler(async(req, res) => {
    const cart = await Cart.findById(req.params.id)
    if(!cart) {
        res.status(400); 
        throw new Error('Product not found'); 
    }
    await Cart.findByIdAndDelete(req.params.id)
    res.status(200).json({ id: req.params.id }); 
})

module.exports = {
    getAllCarts, 
    getUserCart, 
    createCart, 
    updateCart, 
    deleteCart,
}