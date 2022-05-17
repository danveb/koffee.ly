import { Navbar, Announcement, Footer } from "../components/index"; 
import styled from "styled-components";
import coffee from "../assets/macchiato1.png"; 
import { Add, Remove } from "@mui/icons-material";

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
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src={coffee} alt="coffee" />
                                <Details>
                                    <ProductName><b>Product: </b>Espresso Macchiato</ProductName>
                                    <ProductId><b>ID: </b>912383</ProductId>
                                    <ProductSize><b>Size: </b>One Size</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                        <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$12</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src={coffee} alt="coffee" />
                                <Details>
                                    <ProductName><b>Product: </b>Espresso Macchiato</ProductName>
                                    <ProductId><b>ID: </b>912383</ProductId>
                                    <ProductSize><b>Size: </b>One Size</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                        <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$12</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$24</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$0.00</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Employee Discount</SummaryItemText>
                            <SummaryItemPrice>-$2.40</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$21.60</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Checkout</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart