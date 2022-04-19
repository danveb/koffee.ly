const express = require("express"); 
const router = express.Router(); 
const { getUserOrder, getAllOrders, createOrder, updateOrder, deleteOrder, getMonthlyIncome } = require("../controllers/orderController"); 
const { protect, protectAdmin } = require("../middleware/authMiddleware"); 

// POST /api/order
router.post("/", protect, createOrder); 

// GET /api/order/
router.get("/", protectAdmin, getAllOrders); 

// GET /api/order/find/:userId
router.get("/find/:id", protect, getUserOrder); 

// PUT /api/order/:id
router.put("/:id", protectAdmin, updateOrder); 

// DELETE /api/order/:id
router.delete("/:id", protectAdmin, deleteOrder);

// GET MONTHLY INCOME 
router.get("/income", protectAdmin, getMonthlyIncome); 

module.exports = router