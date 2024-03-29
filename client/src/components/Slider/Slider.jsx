import { useState } from "react"; 
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material"; 
import { sliderItems } from "../../constants/slider"; 
import styled from "styled-components"; 
import { device } from "../../styled";

const Container = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex; 
    position: relative; 
    overflow: hidden; 

    @media ${device.mobileM} {
        display: none;    
    }
`

const Arrow = styled.div`
    width: 50px; 
    height: 50px; 
    background-color: #fff7f7; 
    border-radius: 50%; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    position: absolute; 
    top: 0; 
    bottom: 0; 
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"}; 
    margin: auto; 
    cursor: pointer; 
    opacity: 0.5; 
    z-index: 2; 
`

const Wrapper = styled.div`
    height: 100%; 
    display: flex; 
    transition: all 1.5s ease; 
    transform: translateX(${props=>props.slideIndex * -100}vw); 
`

const Slide = styled.div`
    width: 100vw; 
    height: 50vh; 
    display: flex; 
    align-items: center; 
    background-color: #${props=>props.bg}; 
`
const ImgContainer = styled.div`
    flex: 1; 
    width: 100%; 
    height: 100%; 
`

const Image = styled.img`
    height: 100%; 
    width: 50vw; 
    object-fit: cover; 
`
const InfoContainer = styled.div`
    flex: 1; 
    display: flex; 
    justify-content: center; 
    align-items: flex-start; 
    flex-direction: column; 
    margin-left: 25px; 
`

const Title = styled.h1`
    font-size: 70px; 
`
const Desc = styled.p`
    margin: 50px 0px; 
    font-size: 20px; 
    font-weight: 500; 
    letter-spacing: 3px; 
`
const Button = styled.button`
    padding: 10px; 
    font-size: 20px; 
    background-color: transparent; 
    cursor: pointer; 
`

const Slider = () => {
    // useState 
    const [slideIndex, setSlideIndex] = useState(0); 

    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3) 
        } else {
            setSlideIndex(slideIndex < 3 ? slideIndex  + 1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={()=> handleClick("left")}>
                <ArrowBackIosOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide key={item.id} bg={item.bg}>
                        <ImgContainer>
                            <Image src={item.img} alt="img" />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={()=> handleClick("right")}>
                <ArrowForwardIosOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider