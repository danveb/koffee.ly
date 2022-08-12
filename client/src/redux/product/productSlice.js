import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import productService from "./productService"; 

const initialState = {
    product: [], 
    isError: false, 
    isSuccess: false, 
    isLoading: false, 
    message: ""
}; 

// Get Product Detail
export const getProductDetail = createAsyncThunk("api/products/id", async(id, thunkAPI) => {
    try {
        return await productService.getProductDetail(id); 
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString(); 
        return thunkAPI.rejectWithValue(message); 
    };
}); 

// export slice 
export const productSlice = createSlice({
    name: "product", 
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
            // getProductDetail 
            .addCase(getProductDetail.pending, (state) => {
                state.isLoading = true; 
            })
            .addCase(getProductDetail.fulfilled, (state, action) => {
                state.isLoading = false; 
                state.isSuccess = true; 
                state.product = action.payload
            })
            .addCase(getProductDetail.rejected, (state, action) => {
                state.isLoading = false; 
                state.isSuccess = false; 
                state.isError = true; 
                state.message = action.payload; 
            })
    },
}); 

export const { reset } = productSlice.actions
export default productSlice.reducer