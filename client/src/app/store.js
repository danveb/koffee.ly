import { configureStore } from "@reduxjs/toolkit"; 
import logger from "redux-logger"; 
import authReducer from "../redux/auth/authSlice"; 
import productsReducer from "../redux/products/productsSlice"; 
import productReducer from "../redux/product/productSlice"; 
import { cartReducer } from "../redux/cart/cartReducer";

const cartItemsFromStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []; 

const initialState = {
    cart: { cartItems: cartItemsFromStorage }, 
}; 

export const store = configureStore({
    reducer: {
        auth: authReducer, 
        products: productsReducer, 
        product: productReducer, 
        cart: cartReducer, 
    },
    initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), 
}); 