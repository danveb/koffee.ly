import styled from "styled-components"; 
import { SendSharp } from "@mui/icons-material";

const Container = styled.div`
    height: 60vh; 
    background-color: #fcf5f5; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
`
const Title = styled.h1`
    font-size: 70px; 
    margin-bottom: 20px; 
`
const Description = styled.div`
    font-size: 24px; 
    font-weight: 300; 
    margin-bottom: 20px; 

    @media screen and (max-width: 480px) {
        text-align: center;    
    }
`
const InputContainer = styled.div`
    width: 50%; 
    height: 40px; 
    background-color: #fff; 
    display: flex; 
    justify-content: space-between; 
    border: 1px solid lightgray; 

    @media screen and (max-width: 480px) {
        width: 80%;    
    }
`
const Input = styled.input`
    border: none; 
    flex: 8; 
    padding-left: 20px; 
`
const Button = styled.button`
    flex: 1; 
    border: none; 
    background-color: teal; 
    color: #fff; 
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from @Koffee</Description>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                    <SendSharp />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter