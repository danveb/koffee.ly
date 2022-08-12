import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import productsService from "./productsService"; 

const initialState = {
    products: [], 
    isError: false, 
    isSuccess: false, 
    isLoading: false, 
    message: ""
}; 

// Get Products
export const getProducts = createAsyncThunk("api/products", async(_, thunkAPI) => {
    try {
        return await productsService.getProducts(); 
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString(); 
        return thunkAPI.rejectWithValue(message); 
    };
}); 

// export slice 
export const productsSlice = createSlice({
    name: "products", 
    initialState, 
    reducers: {
        reset: (state) => {
            state.isLoading = false; 
            state.isSuccess = false; 
            state.isError = false; 
            state.message = ""; 
        }
    }, 
    extraReducers: (builder) => {
        builder
            // getProducts 
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true; 
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false; 
                state.isSuccess = true; 
                state.products = action.payload
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false; 
                state.isSuccess = false; 
                state.isError = true; 
                state.message = action.payload; 
            })
    },
}); 

export const { reset } = productsSlice.actions
export default productsSlice.reducer