import { configureStore } from "@reduxjs/toolkit"; 
import authReducer from "../redux/auth/authSlice"; 
import productsReducer from "../redux/products/productsSlice"; 
import productReducer from "../redux/product/productSlice"; 

export const store = configureStore({
    reducer: {
        auth: authReducer, 
        products: productsReducer, 
        product: productReducer, 
    },
}); 