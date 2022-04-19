import styled from "styled-components"; 
import drip from "../assets/drip1.png"; 

const Container = styled.div`
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ), 
        url(${drip}) center; 
    background-size: cover; 
    width: 100vw; 
    height: 100vh; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
`
const Wrapper = styled.div`
    width: 40%; 
    padding: 20px; 
    background-color: #fff; 

    @media screen and (max-width: 480px) {
        width: 50%;    
    }
`
const Title = styled.h1`
    font-size: 24px; 
    font-weight: 300; 
`

const Form = styled.form`
    display: flex; 
    flex-direction: column; 
`
const Input = styled.input`
    flex: 1; 
    min-width: 40%; 
    margin: 10px 0px; 
    padding: 10px; 
`

const Button = styled.button`
    width: 40%; 
    border: none; 
    padding: 15px 20px; 
    background-color: teal; 
    color: #fff; 
    cursor: pointer; 
    margin-bottom: 10px; 
`

const Link = styled.a`
    margin: 10px 0px; 
    font-size: 12px; 
    text-decoration: underline; 
    cursor: pointer; 
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>Login</Button>
                    <Link>Forgot Password?</Link>
                    <Link>Create A New Account</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login