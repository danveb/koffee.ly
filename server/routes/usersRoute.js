import express from "express"; 
const router = express.Router(); 
import { registerUser, loginUser, getUserProfile } from "../controllers/userController.js";
import { protect, protectAdmin } from "../middleware/authMiddleware.js"; 

// POST /api/users
router.post("/", registerUser); 

// POST /api/users/login
router.post("/login", loginUser); 

// GET /api/users/profile
router.get("/profile", protect, getUserProfile); 

// // GET /api/users
// router.get("/", protectAdmin, getAllUsers); 

// // GET /api/users/:id
// router.get("/:id", protectAdmin, getUser); 

// // PUT /api/users/:id
// router.put("/:id", protect, updateUser); 

// // DELETE /api/
// router.delete("/:id", protectAdmin, deleteUser); 

export default router