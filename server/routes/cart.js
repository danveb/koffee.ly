const express = require("express"); 
const router = express.Router(); 
const { getUserCart, getAllCarts, createCart, updateCart, deleteCart } = require("../controllers/cartController"); 
const { protect, protectAdmin } = require("../middleware/authMiddleware"); 

// POST /api/cart
router.post("/", protect, createCart); 

// GET /api/cart/
router.get("/", protectAdmin, getAllCarts); 

// GET /api/cart/find/:userId
router.get("/find/:id", getUserCart); 

// PUT /api/cart/:id
router.put("/:id", protect, updateCart); 

// DELETE /api/cart/:id
router.delete("/:id", protect, deleteCart); 

module.exports = router