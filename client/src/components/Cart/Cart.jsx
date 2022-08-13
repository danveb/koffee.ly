// import StripeCheckout from "react-stripe-checkout"; 
import { useEffect, useState } from "react";
import { Navbar, Menu, Announcement, Footer } from "../index"; 
import { useSelector, useDispatch } from "react-redux"; 
import { useLocation, useNavigate } from "react-router-dom"; 
import { addItemsToCart, removeFromCart } from "../../redux/cart/cartAction";
import styled from "styled-components";
import { device } from "../../styled";

const Container = styled.div`
`

const Wrapper = styled.div`
    padding: 20px; 

    @media ${device.mobile} {
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
    padding: 20px; 
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

    @media ${device.tablet} {
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

    @media ${device.mobile} {
        flex-direction: column; 
        text-align: center; 
    }
`

const Image = styled.img`
    width: 225px; 
    margin: 20px 0; 

    @media ${device.mobile} {
        width: 100%; 
    }
`

const Details = styled.div`
    padding: 20px; 
    display: flex; 
    justify-content: space-around; 
    flex-direction: column; 
`

const ProductName = styled.span`
    font-size: 20px; 

    @media ${device.mobile} {
        margin-bottom: 20px; 
    }
`
const ProductCaption = styled.span`
    font-size: 15px; 
    font-style: italic; 
`

const ProductRemove = styled.a`
    text-decoration: none; 
    color: dodgerblue; 
    cursor: pointer; 
`

const PriceDetail = styled.div`
    flex: 0.4;
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
`

const ProductAmountContainer = styled.div`
    display: flex; 
    align-items: center; 
`

const ProductAmount = styled.div`
    font-size: 24px; 
    margin: 5px; 

    @media screen and (max-width: 480px) {
        margin: 5px 15px;    
    }
`

const QtyContainer = styled.div`
    width: 50%; 
    margin: 30px 0px; 
    display: flex; 
    justify-content: space-between; 

    @media screen and (max-width: 480px) {
        width: 100%;    
    }
`

const Qty = styled.div`
    display: flex; 
    align-items: center; 
`

const QtyTitle = styled.span`
    font-weight: 200; 
`

const QtySize = styled.select`
    margin-left: 20px; 
    padding: 5px; 
`

const QtyOption = styled.option`
`

const ProductPrice = styled.div`
    font-size: 20px; 
    font-weight: 200; 

    @media screen and (max-width: 480px) {
        margin-bottom: 20px;
    }
`

const Hr = styled.hr`
    background-color: #eee; 
    border: none; 
    height: 1px; 
`

const Summary = styled.div`
    flex: 1; 
    border: 0.5px solid lightgray; 
    border-radius: 10px; 
    padding: 15px; 
    height: 50vh; 
`

const SummaryTitle = styled.h2`
    font-size: 26px; 
    font-weight: 200; 
`

const SummaryItem = styled.div`
    margin: 30px 0px; 
    display: flex; 
    justify-content: space-between; 
    font-weight: ${props=>props.type === "subtotal" && "400"}; 
    font-size: ${props=>props.type === "subtotal" && "20px"}; 
`

const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%; 
    padding: 10px; 
    background-color: black; 
    color: #fff; 
    font-weight: 600; 
    text-transform: uppercase; 
    cursor: pointer; 
`

const EmptyDiv = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center; 
    height: calc(100vh - 450px); 

    @media ${device.tablet} {
        height: calc(100vh - 430px); 
    }

    @media ${device.mobile} {
        height: calc(100vh - 590px); 
    }
`

const EmptyTitle = styled.h3`
    color: red; 
    font-size: 18px; 
    font-weight: 200; 
`

const Cart = ({ menuOpen, setMenuOpen }) => {
    // useNavigate
    const navigate = useNavigate(); 

    // useLocation
    const location = useLocation(); 
    const productId = location.pathname.split("/")[2]; 
    const qty = Number(location.search.split("=")[1]); 

    // useDispatch
    const dispatch = useDispatch(); 

    // useSelector (cart state)
    const cart = useSelector((state) => state.cart); 
    const { cartItems } = cart; 

    // useEffect
    useEffect(() => {
        if(productId) {
            dispatch(addItemsToCart(productId, qty)); 
        }
    }, [dispatch, productId, qty]); 

    // handleItemRemove
    const handleItemRemove = (id) => {
        dispatch(removeFromCart(id)); 
    }; 

    // handleCheckout
    const handleCheckout = () => {
        navigate("/login?redirect=shipping"); 
    }; 

    return (
        <Container>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Announcement />
            <Wrapper>
                <Title>Your Basket</Title>
                {cartItems.length === 0 ? 
                <EmptyDiv>
                    <EmptyTitle>Your Basket Is Empty</EmptyTitle>
                </EmptyDiv> : (
                <>
                    <Top>
                        <TopButton>CONTINUE SHOPPING</TopButton>
                        <TopButton type="filled">CHECKOUT</TopButton>
                    </Top>
                    <Bottom>
                    <Info>
                        {cartItems.map((item) => (
                            <>
                            <Product key={item.product}>
                                <ProductDetail>
                                    <Image src={item.image} alt="product" />
                                    <Details>
                                        <ProductName>{item.name}</ProductName>
                                        <ProductCaption>{item.caption}</ProductCaption>
                                        <ProductRemove onClick={() => handleItemRemove(item.product)}>Remove Item</ProductRemove>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                    <QtyContainer>
                                    <Qty>
                                        <QtyTitle>Q'ty</QtyTitle>
                                        <QtySize 
                                            value={item.qty} 
                                            onChange={(e) => dispatch(addItemsToCart(item.product, Number(e.target.value)))}
                                        >
                                            {
                                                [...Array(item.countInStock).keys()].map((x) => (
                                                    <QtyOption 
                                                        key={x + 1} 
                                                        value={x + 1}
                                                    >
                                                        {x + 1}
                                                    </QtyOption>
                                                ))
                                            }   
                                        </QtySize>
                                    </Qty>
                                </QtyContainer>
                                </ProductAmountContainer>
                                <ProductPrice>$ {(item.price * item.qty).toFixed(2)}</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        </>
                        ))}
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem type="subtotal">
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>TBA</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Tax</SummaryItemText>
                            <SummaryItemPrice>TBA</SummaryItemPrice>
                        </SummaryItem>
                        <Button
                            onClick={handleCheckout}
                        >Checkout</Button>
                    </Summary>
                </Bottom>
                </>)}
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart