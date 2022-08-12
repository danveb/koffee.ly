import axios from "axios"; 

// Production 
// const API_URL = "/api/products" 

// Deployment 
const API_URL = process.env.REACT_APP_API_URL; 
const GET_PRODUCT_URL = `${API_URL}/api/products/`; 

// Get Product Detail
const getProductDetail = async (id) => {
    const response = await axios.get(GET_PRODUCT_URL + id); 
    return response.data; 
}; 

const productsService = {
    getProductDetail, 
}

export default productsService