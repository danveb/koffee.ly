import { Navbar, Menu, Spinner } from "../index"; 
import { Link, useNavigate } from "react-router-dom"; 
import coffee from "../../assets/coffeeTool1.png"; 
import styled from "styled-components"; 
import { device } from "../../styled";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getProfile, updateProfile } from "../../redux/auth/authSlice";

const Container = styled.div`
    width: 100vw; 
    height: calc(100vh - 55px); 
    display: flex; 
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

const Profile = ({ menuOpen, setMenuOpen }) => {
    // useState
    const [email, setEmail] = useState(""); 
    const [name, setName] = useState(""); 
    const [password, setPassword] = useState(""); 

    // useDispatch 
    const dispatch = useDispatch(); 

    // useNavigate
    const navigate = useNavigate(); 

    // user state 
    const userInfo = useSelector((state) => state.auth); 
    const { user, isError, isLoading, isSuccess, message } = userInfo; 

    // useEffect 
    useEffect(() => {
        if(isError) {
            toast.error(message); 
            navigate("/login"); 
        }; 
        if(isSuccess) {
            if(user.name) {
                setName(user.name); 
                setEmail(user.email); 
            } else {
                dispatch(getProfile("profile")); 
            }
        }; 
        if(!user) {
            navigate("/login"); 
        } else {
            setName(user.name); 
            setEmail(user.email);  
        }
    }, [user, isError, isSuccess, message, navigate, dispatch]); 

    // handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault(); 
        // DISPATCH UPDATE PROFILE
        dispatch(updateProfile({
            id: user._id, 
            name, 
            email, 
            password, 
        })); 
    }; 

    if(isLoading) {
        return <Spinner />
    }; 

    return (
        <>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Container>
            {user && (
                <Wrapper>
                <Title>User Profile</Title>
                <Subtitle>Welcome to your account {user.name}</Subtitle>
                <Form onSubmit={handleSubmit}>
                    <Input 
                        id="name"
                        name="name"
                        type="text"
                        value={name}
                        placeholder="Update name" 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        placeholder="Update email" 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <Input 
                        id="password"
                        name="password"
                        type="password"
                        value={password} 
                        placeholder="Password required to update" 
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                    />
                    <Button>Update</Button>
                </Form>
            </Wrapper>
            )}            
        </Container>
        </>
    )
}

export default Profile