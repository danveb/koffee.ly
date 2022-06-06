import { Navbar, Announcement, Footer } from "../components/index"; 
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { useSelector } from "react-redux"; 
import { useNavigate } from "react-router-dom"; 
import StripeCheckout from "react-stripe-checkout"; 
import { useEffect, useState } from "react";
import { userRequest } from "../constants/requests";

const KEY = process.env.REACT_APP_STRIPE; 

const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px; 

    @media screen and (max-width: 480px) {
        padding: 10px;    
    }
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center; 
`
const Top = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center; 
    padding: 10px; 
`

const TopTexts = styled.div`
    @media screen and (max-width: 768px) {
        display: none;        
    }
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px; 
`

const TopButton = styled.button`
    padding: 10px; 
    font-weight: 600; 
    cursor: pointer; 
    border: ${props=>props.type === "filled" && "none"}; 
    background: ${props=>props.type === "filled" ? "black" : "transparent"}; 
    color: ${props=>props.type === "filled" && "#fff"}; 
`
const Bottom = styled.div`
    display: flex; 
    justify-content: space-between; 

    @media screen and (max-width: 768px) {
        flex-direction: column;    
    }
`
const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex; 
    justify-content: space-between; 

    @media screen and (max-width: 480px) {
        flex-direction: column;    
    }
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;  
`
const Image = styled.img`
    width: 200px; 
    margin-bottom: 20px; 
`
const Details = styled.div`
    padding: 20px; 
    display: flex; 
    justify-content: space-around; 
    flex-direction: column; 
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductSize = styled.span``
const PriceDetail = styled.div`
    flex: 1;
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
`

const ProductAmountContainer = styled.div`
    display: flex; 
    align-items: center; 
    margin-bottom: 20px; 
`
const ProductAmount = styled.div`
    font-size: 24px; 
    margin: 5px; 

    @media screen and (max-width: 480px) {
        margin: 5px 15px;    
    }
`
const ProductPrice = styled.div`
    font-size: 30px; 
    font-weight: 200; 

    @media screen and (max-width: 480px) {
        margin-bottom: 20px;
    }
`

const Hr = styled.hr`
    background-color: #eee; 
    border: none; 
    height: 1px; 
    margin-bottom: 20px; 
`

const Summary = styled.div`
    flex: 1; 
    border: 0.5px solid lightgray; 
    border-radius: 10px; 
    padding: 20px; 
    height: 50vh; 
`

const SummaryTitle = styled.h1`
    font-weight: 200; 
`
const SummaryItem = styled.div`
    margin: 30px 0px; 
    display: flex; 
    justify-content: space-between; 
    font-weight: ${props=>props.type === "total" && "500"}; 
    font-size: ${props=>props.type === "total" && "24px"}; 
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%; 
    padding: 10px; 
    background-color: black; 
    color: #fff; 
    font-weight: 600; 
`

const Cart = () => {
    const cart = useSelector(state => state.cart); 

    const [stripeToken, setStripeToken] = useState(null); 

    const navigate = useNavigate(); 

    const onToken = (token) => {
        setStripeToken(token); 
    }; 

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const response = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id, 
                    amount: cart.total*100, 
                }); 
                console.log(response); 
                navigate("/success", {data:response.data}); 
            } catch(error) {
                console.log(error); 
            };
        }; 
        stripeToken && makeRequest(); 
    }, [stripeToken, cart.total, navigate]); 

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag({cart.quantity})</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    {/* <TopButton type="filled">CHECKOUT</TopButton> */}
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map((product) => (
                            <Product>
                            <ProductDetail>
                                <Image src={product.img} alt={product.categories[0]} />
                                <Details>
                                    <ProductName><b>Product: </b>{product.title}</ProductName>
                                    <ProductId><b>ID: </b>{product._id}</ProductId>
                                    <ProductSize><b>Size: </b>{product.size}</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                        <ProductAmount>{product.quantity}</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ {(product.price * product.quantity).toFixed(2)}</ProductPrice>
                            </PriceDetail>
                        </Product>
                        ))}
                        <Hr />
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total.toFixed(2)}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 9.99</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>-$ 9.99</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total.toFixed(2)}</SummaryItemPrice>
                        </SummaryItem>
                        {/* Stripe Checkout component */}
                        <StripeCheckout
                            name="Koffee.ly"
                            image=""
                            billingAddress
                            shippingAddress
                            description={`Your total is $${cart.total.toFixed(2)}`}
                            amount={cart.total*100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <Button>Checkout</Button>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart