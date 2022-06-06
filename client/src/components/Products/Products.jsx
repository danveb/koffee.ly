import { useState, useEffect } from "react"; 
import axios from "axios"; 
import Product from "../Product/Product"; 
import styled from "styled-components"; 

const Container = styled.div`
    padding: 20px; 
    display: flex; 
    justify-content: space-between; 
    flex-wrap: wrap; 
`

const Products = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([]); 
    const [filteredProducts, setFilteredProducts] = useState([]); 

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get(cat 
                    ? `http://localhost:4000/api/products?category=${cat}`
                    : "http://localhost:4000/api/products"
                )
                console.log(response.data); 
                setProducts(response.data); 
            } catch(error) {
                console.log(error); 
            }; 
        }; 
        getProducts(); 
    }, [cat]); 

    useEffect(() => {
        cat && setFilteredProducts(
            products.filter((item) => Object.entries(filters).every(([key, value]) => item[key].includes(value)))
        );
    }, [products, cat, filters]);

    useEffect(() => {
        if(sort === "newest") {
            setFilteredProducts(prev => [...prev].sort((a, b) => a.createdAt - b.createdAt)); 
        } else if(sort === "asc") {
            setFilteredProducts(prev => [...prev].sort((a, b) => a.price - b.price)); 
        } else {
            setFilteredProducts(prev => [...prev].sort((a, b) => b.price - a.price)); 
        }
    }, [sort]); 

    return (
        <Container>
            {cat 
                ? filteredProducts.map((item) => (
                <Product item={item} key={item._id} />
            ))  : products.slice(0,3).map((item) => (
                <Product item={item} key={item._id} />
            ))}
        </Container>
    )
}

export default Products