const express = require('express'); 
const colors = require('colors'); 
const dotenv = require('dotenv').config(); 
const connectDB = require('./config/db'); 
const port = process.env.PORT || 4000; 
const cors = require('cors'); 
const { errorHandler } = require('./middleware/errorMiddleware'); 

connectDB() 

const app = express(); 

// Middleware 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

// Cors
app.use(cors()); 

// Routes 
app.use('/api/auth', require("./routes/auth"));
app.use('/api/users', require("./routes/users"));
app.use('/api/products', require("./routes/product"));
app.use('/api/carts', require("./routes/cart"));
app.use('/api/orders', require("./routes/order"));
app.use('/api/checkout', require("./routes/stripe")); 

// Error Handler 
app.use(errorHandler); 

app.listen(port, () => console.log(`Server started on port ${port}`)); 