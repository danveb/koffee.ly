import styled from "styled-components"; 
import { Badge } from "@mui/material"; 
import { Search, ShoppingCartOutlined } from "@mui/icons-material"; 
import { Link, Navigate, useNavigate } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux"; 

// import { mobile, tablet } from "../../constants/responsive"; 
// media query for mobile devices 
// option #1: use $mobile({ backgroundColor: "red"})
// option #2: use @media only screen and (max-width: 480px) 

const Container = styled.div`
    height: 60px; 

    @media screen and (max-width: 480px) {
        height: 50px; 
    }
`

const Wrapper = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    padding: 10px 20px; 

    @media screen and (max-width: 480px) {
        padding: 10px 0px; 
    }
`

const Left = styled.div`
    flex: 1;
    display: flex; 
    align-items: center; 

    @media screen and (max-width: 768px) {
        display: none;    
    }
`

const Language = styled.span`
    font-size: 14px; 
    cursor: pointer; 
`

const SearchContainer = styled.div`
    border: 1px solid lightgray; 
    display: flex; 
    align-items: center; 
    margin-left: 25px; 
    padding: 5px; 
`

const Input = styled.input`
    border: none; 
`

const Center = styled.div`
    flex: 1;
    text-align: center; 
`

const Logo = styled.h1`
    font-weight: bold; 

    a {
        color: inherit; 
        text-decoration: none; 
    }

    @media screen and (max-width: 480px) {
        font-size: 24px;    
        padding: 0px 20px; 
    }
`

const Right = styled.div`
    flex: 1;
    display: flex; 
    justify-content: flex-end; 
    align-items: center; 

    @media screen and (max-width: 480px) {
        justify-content: center;    
        flex: 2; 
    }
`

const MenuItem = styled.div`
    font-size: 14px; 
    cursor: pointer; 
    margin-right: 20px; 
    
    a {
        color: inherit; 
        text-decoration: none; 
    }
    
    @media screen and (max-width: 480px) {
        font-size: 12px; 
        margin-left: 10px;     
    }
`

const Button = styled.button`
    border: none; 
    padding: 10px; 
    background-color: #ffff; 
    color: gray; 
    cursor: pointer; 
    font-weight: 600; 
`

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity); 
    const user = useSelector(state => state.user.currentUser); 
    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 

    // TODO: handle user logout
    const handleLogout = () => {
        dispatch({ type: "logout"}); 
        navigate("/"); 
    }; 

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search"></Input>
                        <Search style={{ color: "gray", fontSize: "16px" }}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        <Link to="/">KOFFEE.LY</Link>
                    </Logo>
                </Center>
                <Right>
                    {!user ? 
                        <>
                        <MenuItem>
                            <Link to="/register">REGISTER</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/login">SIGN IN</Link>
                        </MenuItem>
                        </>

                        : 
                        <MenuItem>
                            <Button onClick={handleLogout}>LOG OUT</Button>
                        </MenuItem>
                    }
                    <MenuItem>
                        <Link to="/cart">
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </Link>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar