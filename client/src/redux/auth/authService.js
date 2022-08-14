import axios from "axios"; 

// Production 
// const API_URL = "/api/users/"; 

// Deployment 
const API_URL = process.env.REACT_APP_API_URL; 
const REGISTER_URL = `${API_URL}/api/users`; 
const LOGIN_URL = `${API_URL}/api/users/login`;
const GET_PROFILE_URL = `${API_URL}/api/users/`; 
const UPDATE_PROFILE = `${API_URL}/api/users/profile`; 

// Register user 
const register = async (userData) => {
    const response = await axios.post(REGISTER_URL, userData); 
    if(response.data) {
        localStorage.setItem("user", JSON.stringify(response.data)); 
    }; 
    return response.data; 
}; 

// Logout user 
const logout = async () => {
    localStorage.removeItem("user"); 
}; 

// Login user 
const login = async (userData) => {
    const response = await axios.post(LOGIN_URL, userData); 
    if(response.data) {
        localStorage.setItem("user", JSON.stringify(response.data)); 
    }; 
    return response.data; 
}; 

// Get User Profile (details)  
const getProfile = async (id, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json", 
            Authorization: `Bearer ${token}`
        }, 
    }; 
    const { data } = await axios.get(GET_PROFILE_URL + id, config); 
    return { ...data }; 
}; 

// Update Profile (details)  
const updateProfile = async (user, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json", 
            Authorization: `Bearer ${token}`
        }, 
    }; 
    const { data } = await axios.put(UPDATE_PROFILE, user, config); 
    return { ...data }; 
}; 

const authService = {
    register, 
    logout, 
    login, 
    getProfile, 
    updateProfile, 
}; 

export default authService