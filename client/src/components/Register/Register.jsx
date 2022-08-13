import { Navbar, Menu } from "../index"; 
import { Link, useNavigate } from "react-router-dom"; 
import coffee from "../../assets/coffeeTool1.png"; 
import styled from "styled-components"; 
import { device } from "../../styled";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { register } from "../../redux/auth/authSlice";

const Container = styled.div`
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ), 
        url(${coffee}) center center/cover; 
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

const Agreement = styled.span`
    font-size: 12px; 
    margin: 20px 0px; 

    > * {
        font-weight: bold; 
    }
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

const Register = ({ menuOpen, setMenuOpen }) => {
    // useState
    const [formData, setFormData] = useState({
        name: "", 
        email: "", 
        password: "", 
    }); 

    // destructure formData
    const { name, email, password } = formData; 

    // useDispatch 
    const dispatch = useDispatch(); 

    // useNavigate
    const navigate = useNavigate(); 

    // user state 
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth); 

    // useEffect 
    useEffect(() => {
        if(isError) {
            toast.error(message); 
        }; 
        if(isSuccess) {
            toast.success(`Welcome to your account ${user.name}`); 
            navigate("/"); 
        }; 
        if(user) {
            navigate("/"); 
        }
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
            name, 
            email, 
            password, 
        }; 
        dispatch(register(userData)); 
    }; 

    return (
        <>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Container>
            <Wrapper>
                <Title>Create An Account</Title>
                <Subtitle>Make your new account</Subtitle>
                <Form onSubmit={handleSubmit}>
                    <Input 
                        id="name"
                        name="name"
                        type="text"
                        value={name}
                        placeholder="Your name" 
                        onChange={handleChange} 
                    />
                    <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        placeholder="Your email" 
                        onChange={handleChange} 
                    />
                    <Input 
                        id="password"
                        name="password"
                        type="password"
                        value={password} 
                        placeholder="Your password" 
                        onChange={handleChange} 
                    />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the <span>Privacy Policy</span>
                    </Agreement>
                    <Button>Register</Button>
                    <Link to="/login">Already have an account?</Link>
                </Form>
            </Wrapper>
        </Container>
        </>
    )
}

export default Register