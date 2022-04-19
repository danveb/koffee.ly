const express = require("express"); 
const router = express.Router(); 
const { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/productController"); 
const { protectAdmin } = require("../middleware/authMiddleware"); 

// POST /api/products
router.post("/", protectAdmin, createProduct); 

// GET /api/products/
router.get("/", getAllProducts); 

// GET /api/products/find/:id
router.get("/find/:id", getProduct); 

// PUT /api/products/:id
router.put("/:id", protectAdmin, updateProduct); 

// PUT /api/products/:id
router.delete("/:id", protectAdmin, deleteProduct); 

module.exports = router