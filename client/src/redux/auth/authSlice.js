import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import authService from "./authService"; 

// grab user from localStorage (by default in string so need to parse it) 
const user = JSON.parse(localStorage.getItem("user")); 

const initialState = {
    user: user ? user : null, 
    isError: false, 
    isSuccess: false, 
    isLoading: false, 
    message: ""
}; 

// AsyncThunk functions
// - Register user 
export const register = createAsyncThunk("api/users", async (user, thunkAPI) => {
    try {
        return await authService.register(user); 
    } catch(error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString(); 
        return thunkAPI.rejectWithValue(message); 
    }; 
}); 

// - Logout user 
export const logout = createAsyncThunk("api/", async () => {
    await authService.logout(); 
}); 

// - Login user 
export const login = createAsyncThunk("api/users/login", async (user, thunkAPI) => {
    try {
        return await authService.login(user); 
    } catch(error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString(); 
        return thunkAPI.rejectWithValue(message); 
    }; 
}); 

// - Get user details 
export const getProfile = createAsyncThunk("api/users/id", async (id, thunkAPI) => {
    try {
        // require a token so we can get goals (since private route) 
        const token = thunkAPI.getState().auth.user.token; 
        return await authService.getProfile(id, token); 
    } catch(error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString(); 
        return thunkAPI.rejectWithValue(message); 
    };
}); 

// - Profile Update  
export const updateProfile = createAsyncThunk("api/users/profile", async (user, thunkAPI) => {
    try {
        // require a token so we can get goals (since private route) 
        const token = thunkAPI.getState().auth.user.token; 
        return await authService.updateProfile(user, token); 
    } catch(error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString(); 
        return thunkAPI.rejectWithValue(message); 
    };
}); 

// export slice 
export const authSlice = createSlice({
    name: "auth",
    initialState,  
    reducers: {
        reset: (state) => {
            state.isLoading = false; 
            state.isSuccess = false; 
            state.isError = false; 
            state.message = ""; 
        }, 
    }, 
    extraReducers: (builder) => {
        builder
            // register
            .addCase(register.pending, (state) => {
                state.isLoading = true; 
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false; 
                state.isSuccess = true; 
                state.user = action.payload; 
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false; 
                state.isError = true; 
                state.message = action.payload; 
                state.user = null; 
            })
            // logout 
            .addCase(logout.fulfilled, (state) => {
                state.user = null 
            })
            // login
            .addCase(login.pending, (state) => {
                state.isLoading = true; 
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false; 
                state.isSuccess = true; 
                state.user = action.payload; 
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false; 
                state.isSuccess = false; 
                state.isError = true; 
                state.message = action.payload; 
                state.user = null; 
            })
            // getProfile
            .addCase(getProfile.pending, (state) => {
                state.isLoading = true; 
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.isLoading = false; 
                state.isSuccess = true; 
                state.user = action.payload; 
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.isLoading = false; 
                state.isSuccess = false; 
                state.isError = true; 
                state.message = action.payload; 
            })
            // updateProfile
            .addCase(updateProfile.pending, (state) => {
                state.isLoading = true; 
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.isLoading = false; 
                state.isSuccess = true; 
                state.user = action.payload; 
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.isLoading = false; 
                state.isSuccess = false; 
                state.isError = true; 
                state.message = action.payload; 
            })
    }, 
});

export const { reset } = authSlice.actions
export default authSlice.reducer