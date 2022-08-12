import { Link } from "react-router-dom"; 
import styled from "styled-components"; 
import { device } from "../../styled";

const Cards = styled.div`
    display: grid; 
`

const Card = styled.div`
    display: flex; 
    justify-content: space-between; 
    flex-direction: column; 
`

const ImgContainer = styled.div`
    width: 100%; 
    padding-top: 56.25%; 
    overflow: hidden; 
    position: relative; 
`

const Img = styled.img`
    width: 100%; 
    position: absolute; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
`

const CardContent = styled.div`
    padding: 20px; 
`

const CardTitle = styled.div`
`

const H4Title = styled.h4`
    font-family: "Poppins", sans-serif; 
    font-size: 18px; 
    font-weight: 300; 
    margin-bottom: 20px; 
    text-align: center; 

    @media ${device.tablet} {
        font-size: 16px; 
    }
`

const TextContainer = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center; 
    flex-direction: column; 
`

const PText = styled.p`
    font-family: "Poppins", sans-serif; 
    font-size: 13px; 
    font-weight: 200; 
    margin-bottom: 20px; 
    font-style: italic; 
`

const Btn = styled.a`
    font-family: "Poppins", sans-serif; 
    padding: 10px 15px;
    text-decoration: none; 
    background-color: #303032;
    border: none; 
    color: #fff; 
    font-size: 12px; 
    text-transform: uppercase; 
`

const Product = ({ product }) => {
    return (
        <Cards>
            <Card>
                <ImgContainer>
                    <Link to={`/products/${product._id}`}>
                        <Img src={product.image} alt="card" />
                    </Link>
                </ImgContainer>
                <CardContent>
                    <CardTitle>
                        <H4Title>{product.name}</H4Title>
                    </CardTitle>
                    <TextContainer>
                        <PText>{product.category}</PText>
                        <Btn as={Link} to={`/products/${product._id}`} className="cta">
                            SHOP NOW
                        </Btn>
                    </TextContainer>
                </CardContent>
            </Card>
        </Cards>
    )
}

export default Product