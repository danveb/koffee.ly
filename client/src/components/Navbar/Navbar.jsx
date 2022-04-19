import styled from "styled-components"; 
import { Badge } from "@material-ui/core"; 
import { Search, ShoppingCartOutlined } from "@material-ui/icons"; 
import { mobile, tablet } from "../../constants/responsive"; 

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
    
    @media screen and (max-width: 480px) {
        font-size: 12px; 
        margin-left: 10px;     
    }
`

const Navbar = () => {
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
                <Center><Logo>KOFFEE.LY</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar