const asyncHandler = require("express-async-handler"); 
const Order = require("../models/orderModel"); 

// description: Get All Orders
// route: GET /api/orders/
// access: privateAdmin
// query: new, categories
const getAllOrders = asyncHandler(async(req, res) => {
    const orders = await Order.find()
    if(!orders) {
        res.status(400); 
        throw new Error('Orders not found'); 
    }
    res.status(200).json(orders); 
});

// description: Get User Order
// route: GET /api/orders/find/:userId
// access: private
const getUserOrder = asyncHandler(async(req, res) => {
    const order = await Order.find({ userId: req.params.userId })
    if(!order) {
        res.status(400); 
        throw new Error('Order not found'); 
    }
    res.status(200).json(order); 
});

// description: Create Order
// route: POST /api/orders
// access: private
const createOrder = asyncHandler(async(req, res) => {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save() 
    res.status(201).json(savedOrder)
})

// description: Update Order 
// route: PUT /api/orders/:id 
// access: private 
const updateOrder = asyncHandler(async(req, res) => {
    const order = await Order.findById(req.params.id)
    if(!order) {
        res.status(400); 
        throw new Error('Order not found'); 
    };

    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedOrder); 
}); 

// description: Delete Order
// route: DELETE /api/orders/:id 
// access: private 
const deleteOrder = asyncHandler(async(req, res) => {
    const order = await Order.findById(req.params.id)
    if(!order) {
        res.status(400); 
        throw new Error('Product not found'); 
    }
    await Order.findByIdAndDelete(req.params.id)
    res.status(200).json({ id: req.params.id }); 
})

// description: Get Monthly Income
// route: GET /api/orders/income
// access: privateAdmin
const getMonthlyIncome = asyncHandler(async(req, res) => {
    const date = new Date(); 
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(date.setMonth(lastMonth.getMonth() - 1)); 

    // group items with "aggregate" MONGODB
    const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
            $project: {
                month: { $month: "$createdAt" }, 
                sales: "$amount", 
            },
        },
        {
            $group: {
                _id: "$month", 
                total: { $sum: "$sales" }
            },
        },
    ])
    console.log(date)
    console.log(income) 

    res.status(200).json(income)

    if(!income) {
        res.status(400)
        throw new Error('No data found') 
    }
});


module.exports = {
    getAllOrders, 
    getUserOrder, 
    createOrder, 
    updateOrder, 
    deleteOrder,
    getMonthlyIncome, 
}