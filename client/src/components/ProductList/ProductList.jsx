import { useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; 
import { getProducts } from "../../redux/products/productsSlice";
import Product from "../Product/Product"; 
import Spinner from "../Spinner/Spinner"; 
import styled from "styled-components"; 
import { device } from "../../styled";
import { toast } from "react-toastify"; 

const Container = styled.div`
    max-width: 968px; 
    padding: 0 24px 50px 24px; 
    margin: 0 auto; 
    display: grid; 
    grid-template-columns: repeat(3, 1fr); 
    grid-gap: 40px; 

    @media ${device.tablet} {
        grid-template-columns: repeat(2, 1fr); 
    }

    @media ${device.mobile} {
        grid-template-columns: repeat(1, 1fr); 
    }
`

const ProductList = () => {
    // useDispatch
    const dispatch = useDispatch(); 

    // useNavigate
    const navigate = useNavigate(); 

    // useSelector 
    const { products, isLoading, isError, message } = useSelector((state) => state.products); 

    // with state && AXIOS 
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const { data } = await axios.get("/api/products"); 
    //         setProducts(data); 
    //     }; 
    //     fetchProducts(); 
    // // empty dependency array when firing off useEffect
    // }, []); 

    // with REDUX we just dispatch getProducts()
    useEffect(() => {
        dispatch(getProducts());
        if(isError) {
            toast.error(message); 
            navigate("/"); 
        }
    }, [dispatch, isError, message, navigate]); 

    if(isLoading) {
        return <Spinner />
    };

    return (
        <Container>
            {/* only show 3 main products of the db */}
            {products.slice(0, 3).map((product) => (
                <div key={product._id}>
                    <Product product={product}  />
                </div>
            ))}
        </Container>
    )
}

export default ProductList