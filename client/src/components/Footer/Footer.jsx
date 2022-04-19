import styled from "styled-components"; 
import { Facebook, Instagram, Pinterest, Twitter, MyLocationOutlined, LocalPhoneOutlined, AlternateEmailOutlined, PaymentOutlined } from "@material-ui/icons";

const Container = styled.div`
    display: flex; 

    @media screen and (max-width: 480px) {
        flex-direction: column;    
    }

`
const Left = styled.div`
flex: 1;
display: flex; 
flex-direction: column; 
padding: 20px; 
`

const Logo = styled.h1`

`
const Description = styled.p`
margin: 20px 0px; 
`
const SocialContainer = styled.div`
display: flex; 
`
const SocialIcon = styled.div`
width: 40px; 
height: 40px; 
border-radius: 50%; 
color: #fff; 
background-color: #${props=>props.color}; 
display: flex; 
justify-content: center; 
align-items: center; 
margin-right: 20px; 

`
const Center = styled.div`
flex: 1;
padding: 20px; 

@media screen and (max-width: 768px) {
    display: none;        
}
`

const Title = styled.h3`
margin-bottom: 30px; 
`

const List = styled.ul`
margin: 0; 
padding: 0; 
list-style: none; 
display: flex; 
flex-wrap: wrap; 
`

const ListItem = styled.li`
width: 50%; 
margin-bottom: 10px; 
`
const Right = styled.div`
flex: 1;
padding: 20px; 

@media screen and (max-width: 480px) {
    background-color: #fff8f8;        
}
`

const ContactItem = styled.div`
margin-bottom: 20px; 
display: flex; 
align-items: center; 
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>KOFFEE.LY</Logo>
                <Description>We are proud to serve the world's best coffee crafted by our baristas.</Description>
                <SocialContainer>
                    <SocialIcon color="3b5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="e4405f">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="e60023">
                        <Pinterest />
                    </SocialIcon>
                    <SocialIcon color="55acee">
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Drip</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Macchiato</ListItem>
                    <ListItem>Terms</ListItem>
                    <ListItem>Brew Tools</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><MyLocationOutlined style={{ marginRight: "10px" }}/>310 N Rodeo Dr, Beverly Hills, CA 90210</ContactItem>
                <ContactItem><LocalPhoneOutlined style={{ marginRight: "10px" }}/>+1 (310) 156-3333</ContactItem>
                <ContactItem><AlternateEmailOutlined style={{ marginRight: "10px" }}/>info@koffee.com</ContactItem>
                <ContactItem><PaymentOutlined style={{ marginRight: "10px" }}/>Contactless payments accepted</ContactItem>
            </Right>
        </Container>
    )
}

export default Footer