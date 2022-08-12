import axios from "axios"; 

// Production 
// const API_URL = "/api/products" 

// Deployment 
const API_URL = process.env.REACT_APP_API_URL; 
const GET_PRODUCTS_URL = `${API_URL}/api/products`; 

// Get Products 
const getProducts = async () => {
    const response = await axios.get(GET_PRODUCTS_URL); 
    return response.data; 
}; 

const productsService = {
    getProducts, 
}

export default productsService