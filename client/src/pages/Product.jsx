import { Announcement, Footer, Navbar, Newsletter } from "../components/index"; 
import styled from "styled-components"; 
import { Add, Remove } from "@mui/icons-material";
import { useState, useEffect } from "react"; 
import { useLocation } from "react-router-dom";
import { publicRequest } from "../constants/requests";

const Container = styled.div`
`

const Wrapper = styled.div`
    padding: 50px; 
    display: flex; 

    @media screen and (max-width: 480px) {
        flex-direction: column; 
        padding: 10px;    
    }
`

const ImgContainer = styled.div`
    flex: 1; 

`

const Image = styled.img`
    width: 100%; 
    height: 40vh; 
    object-fit: cover; 

    @media screen and (max-width: 480px) {
        height: 40vh;
    }
`

const InfoContainer = styled.div`
    flex: 1; 
    padding: 0px 50px; 

    @media screen and (max-width: 480px) {
        padding: 10px;    
    }
`

const Title = styled.h1`
    font-weight: 200; 
`

const Description = styled.div`
    margin: 20px 0px; 
`

const Price = styled.span`
    font-weight: 100; 
    font-size: 40px; 
`

const FilterContainer = styled.div`
    width: 50%; 
    margin: 30px 0px; 
    display: flex; 
    justify-content: space-between; 

    @media screen and (max-width: 480px) {
        width: 100%;    
    }
`
const Filter = styled.div`
    display: flex; 
    align-items: center; 
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200; 
`
const FilterSize = styled.select`
    margin-left: 20px; 
    padding: 5px; 
`
const FilterSizeOption = styled.option`
`

const AddContainer = styled.div`
    width: 50%; 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 

    @media screen and (max-width: 480px) {
        width: 100%;    
    }
`

const AmountContainer = styled.div`
    display: flex; 
    align-items: center; 
    font-weight: 700; 
`

const Amount = styled.span`
    width: 30px; 
    height: 30px; 
    border-radius: 10px; 
    border: 1px solid teal; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    margin: 0px 5px; 
`

const Button = styled.button`
    padding: 15px; 
    border: 2px solid teal; 
    background-color: #fff; 
    cursor: pointer; 
    font-weight: 500; 

    &:hover {
        background-color: #f8f8f8; 
    }
`

const Product = () => {
    const location = useLocation(); 
    const productId = location.pathname.split("/")[2]; 

    const [product, setProduct] = useState({}); 
    const [quantity, setQuantity] = useState(1); 

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await publicRequest.get(`/products/find/${productId}`); 
                setProduct(response.data); 
            } catch(error) {
                console.log(error); 
            }
        }; 
        getProduct(); 
    }, [productId]); 

    const handleQuantity = (type) => {
        if(type === "decrease") {
            quantity > 1 && setQuantity(quantity-1);
        } else {
            setQuantity(quantity+1);
        };
    }; 

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} alt="coffee" />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Description>{product.description}</Description>
                    <Price>${product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                            <FilterSizeOption key={product._id}>{product.size}</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity("decrease")} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("increase")} />
                        </AmountContainer>
                        <Button>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product