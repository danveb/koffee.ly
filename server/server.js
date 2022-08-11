import express from "express"; 
import colors from "colors"; 
import dotenv from "dotenv/config"; 
import connectDB from "./config/db.js"; 
import productsRoute from "./routes/productsRoute.js"; 
import usersRoute from "./routes/usersRoute.js"; 
import errorHandler from "./middleware/errorMiddleware.js"; 
import cors from "cors"; 
const port = process.env.PORT || 8801; 

connectDB() 

const app = express(); 

// Middleware 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

// Cors
app.use(cors()); 

// Routes 
app.use("/api/products", productsRoute);
app.use("/api/users", usersRoute); 

// Error Handler 
app.use(errorHandler); 

app.listen(port, () => console.log(`Server started on port ${port}`)); 