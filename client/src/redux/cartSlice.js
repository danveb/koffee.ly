import { createSlice } from "@reduxjs/toolkit"; 

const cartSlice = createSlice({
    name: "cart", 
    initialState: {
        products: [], 
        quantity: 0, 
        total: 0, 
    }, 
    // reducers
    reducers: {
        addProduct: (state, action) => {
            state.quantity += action.payload.quantity; 
            state.products.push(action.payload); // pushing new product to products array 
            state.total += action.payload.price * action.payload.quantity // get total 
        }, 
    }, 
}); 

export const { addProduct } = cartSlice.actions

export default cartSlice.reducer