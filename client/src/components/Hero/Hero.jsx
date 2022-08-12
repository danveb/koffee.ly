import set from "../../assets/hero/set.jpg"; 
import { hero } from "../../constants/hero"; 
import styled from "styled-components"; 
import { device } from "../../styled"; 

const Container = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    padding: 50px 24px; 

    @media ${device.mobile} {
        padding: 0 24px; 
    }
`

const Wrapper = styled.div`
    width: 100%; 
    height: 100%; 
`

const Main = styled.div`
    display: flex; 
    max-width: 960px; 
    margin: 0 auto; 

    @media ${device.tablet} {
        flex-direction: column; 
        width: 90%; 
    }

    @media ${device.mobile} {
        width: 100%; 
    }
`

const Left = styled.div`
    flex: 1; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    padding: 25px; 
`

const LeftImg = styled.img`
    height: 500px; 
    width: 100%; 
    object-fit: cover; 
`

const Right = styled.div`
    flex: 1; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    flex-direction: column; 
    padding: 30px; 
`

const H3Title = styled.h3`
    font-family: "Lora", sans-serif; 
    font-size: 24px; 
    font-weight: 300; 
    text-transform: uppercase; 

    @media ${device.tablet} {
        font-size: 22px; 
    }
`

const PText = styled.p`
    font-family: "Poppins", sans-serif; 
    font-size: 14px; 
    font-weight: 200; 
    margin: 20px 0; 
    line-height: 2; 

    @media ${device.tablet} {
        font-size: 13px; 
    }
`

const Hero = () => {
    return (
        <Container>
            <Wrapper>
                <Main>
                    <Left>
                        <LeftImg src={set} alt="hero-img" />
                    </Left>
                    <Right>
                        {hero.map((h) => (
                            <div key={h.id}>
                                <H3Title>{h.title}</H3Title>
                                <PText>{h.paragraph}</PText>
                            </div>
                        ))}
                    </Right>
                </Main>
            </Wrapper>
        </Container>
    )
}

export default Hero