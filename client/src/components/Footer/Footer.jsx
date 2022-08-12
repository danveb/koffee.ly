import { Link } from "react-router-dom"; 
import { usefulLinks, usefulContacts } from "../../constants/footer"; 
import { GitHub } from "@mui/icons-material";
import styled from "styled-components"; 
import { device } from "../../styled"; 

const Container = styled.div`
    display: flex; 

    @media ${device.mobile} {
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

    & > * {
        width: 20px; 
        height: 20px; 
    }
`
const Center = styled.div`
    flex: 1;
    padding: 20px; 

    @media ${device.tablet} {
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

    & > * {
        // target directly the Links
        color: #000; 
        text-decoration: none;  
    }
`
const Right = styled.div`
    flex: 1;
    padding: 20px; 

    @media ${device.mobile} {
        background-color: #fff8f8;        
    }
`

const ContactItem = styled.div`
    margin-bottom: 20px; 
    display: flex; 
    align-items: center; 

    & > * {
        margin-right: 10px; 
    }
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>KOFFEE.LY</Logo>
                <Description>We are proud to serve the world's best coffee crafted by our baristas.</Description>
                <SocialContainer>
                    <SocialIcon color="000">
                        <GitHub />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    {usefulLinks.map((link) => (
                        <ListItem key={link.id}>
                            <Link to={link.url}>
                                {link.text}
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                {usefulContacts.map((contact) => (
                    <ContactItem key={contact.id}>
                        {contact.logo}
                        {contact.text}
                    </ContactItem>
                ))}
            </Right>
        </Container>
    )
}

export default Footer