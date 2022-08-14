import { useState, useEffect } from "react";
import { Navbar, Menu, Spinner } from "../index"; 
import { useDispatch, useSelector } from "react-redux"; 
import { login, reset } from "../../redux/auth/authSlice"; 
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"; 
import macchiato1 from "../../assets/macchiato1.png"; 
import { toast } from "react-toastify"; 
import { device } from "../../styled";

const Container = styled.div`
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ), 
        url(${macchiato1}) center; 
    background-size: cover; 
    width: 100vw; 
    height: calc(100vh - 55px); 
    display: flex; 
    justify-content: center; 
    align-items: center; 
`
const Wrapper = styled.div`
    max-width: 1600px; 
    width: 50%; 
    margin: 0 auto; 
    padding: 20px; 
    background-color: #fff; 
    display: flex; 
    justify-content: center; 
    flex-direction: column; 

    @media ${device.tablet} {
        width: 75%; 
    }

    @media ${device.mobile} {
        width: 88%; 
    }
`

const Title = styled.h1`
    font-family: "Prata", sans-serif; 
    font-size: 36px; 
    font-weight: 300; 
    margin-bottom: 10px; 
`

const Subtitle = styled.p`
    font-family: "Poppins", sans-serif; 
    font-size: 15px; 
    margin-bottom: 10px; 
`

const Form = styled.form`
    display: flex; 
    flex-direction: column; 

    & > a {
        width: max-content; 
        display: flex; 
        justify-content: flex-end; 
        color: #000; 
        margin: 10px 0px; 
        font-size: 12px; 
        text-decoration: none; 
        cursor: pointer; 
    }
`

const Input = styled.input`
    margin: 10px 0px; 
    padding: 15px; 
    font-size: 13px; 
`

const Button = styled.button`
    width: 100%; 
    line-height: 1em; 
    letter-spacing: .13em; 
    font-size: 11px; 
    border: none; 
    padding: 15px 20px; 
    background-color: teal; 
    color: #fff; 
    margin: 10px 0; 
    text-transform: uppercase; 
    cursor: pointer; 
`

const Login = ({ menuOpen, setMenuOpen }) => {
    const [formData, setFormData] = useState({
        email: "", 
        password: "", 
    }); 
    
    // destructure formData
    const { email, password } = formData; 

    // useDispatch 
    const dispatch = useDispatch(); 
    
    // useNavigate
    const navigate = useNavigate(); 

    // user state
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth); 

    // const userLogin = useSelector((state) => state.userLogin); 
    // const { loading, error, userInfo } = userLogin; 


    // useEffect 
    useEffect(() => {
        if(isError) {
            toast.error(message, {
                position: "top-center", 
                autoClose: 2000, 
                pauseOnHover: true, 
            }); 
        }; 
        if(isSuccess) {
            toast.success(`Welcome back ${user.name} 👋 `, {
                position: "top-center", 
                autoClose: 1500, 
                hideProgressBar: true, 
            }); 
            navigate("/"); 
        }; 
        // redirect existing user back to home
        if(user) {
            navigate("/"); 
        }
    // dependency   
    }, [user, isError, isSuccess, message, navigate, dispatch]); 

    // handleChange
    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, 
            [e.target.name]: e.target.value
        })); 
    }; 

    // handleSubmit 
    const handleSubmit = (e) => {
        e.preventDefault(); 
        const userData = {
            email, 
            password, 
        }; 
        dispatch(login(userData)); 
    }; 

    if(isLoading) {
        return <Spinner />
    }; 

    return (
        <>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Container>
            <Wrapper>
                <Title>Login</Title>
                <Subtitle>Enter your credentials</Subtitle>
                <Form onSubmit={handleSubmit}>
                    <Input 
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Your email" 
                        onChange={handleChange} 
                    />
                    <Input 
                        id="password"
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Your password" 
                        onChange={handleChange} 
                    />
                    <Button>Login</Button>
                    <Link to="/register">Don't have an account? </Link>
                </Form>
            </Wrapper>
        </Container>
        </>
    )
}

export default Login