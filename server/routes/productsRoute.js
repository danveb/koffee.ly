import express from "express"; 
const router = express.Router(); 
import { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct } from "../controllers/productsController.js"; 
import { protectAdmin } from "../middleware/authMiddleware.js"; 

// GET /api/products/
router.get("/", getAllProducts); 

// GET /api/products/:id
router.get("/:id", getProduct); 

// POST /api/products 
router.post("/", protectAdmin, createProduct); 

// PUT /api/products/:id
router.put("/:id", protectAdmin, updateProduct); 

// PUT /api/products/:id
router.delete("/:id", protectAdmin, deleteProduct); 

export default router