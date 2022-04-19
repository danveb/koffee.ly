const express = require("express"); 
const router = express.Router(); 
const { getAllUsers, getUser, getUserStats, updateUser, deleteUser } = require("../controllers/userController");
const { protect, protectAdmin } = require("../middleware/authMiddleware"); 

// GET /api/users/stats 
// - needs to be on top; else error... 
router.get("/stats", protectAdmin, getUserStats); 

// GET /api/users
router.get("/", protectAdmin, getAllUsers); 

// GET /api/users/:id
router.get("/:id", protectAdmin, getUser); 

// PUT /api/users/:id
router.put("/:id", protect, updateUser); 

// DELETE /api/
router.delete("/:id", protectAdmin, deleteUser); 

module.exports = router