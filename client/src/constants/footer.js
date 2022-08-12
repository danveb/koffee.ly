import { MyLocationOutlined, LocalPhoneOutlined, AlternateEmailOutlined, PaymentOutlined } from "@mui/icons-material";

export const usefulLinks = [
    {
        id: 1, 
        text: "About", 
        url: "/about", 
    }, 
    {
        id: 2, 
        text: "My Account", 
        url: "/login", 
    }, 
    {
        id: 3, 
        text: "Cart", 
        url: "/cart", 
    }, 
    {
        id: 4, 
        text: "Terms",
        url: "/terms",  
    }, 
]; 

export const usefulContacts = [
    {
        id: 1, 
        logo: <MyLocationOutlined />, 
        text: "310 N Rodeo Dr, Beverly Hills, CA 90210", 
    }, 
    {
        id: 2, 
        logo: <LocalPhoneOutlined />, 
        text: "+1 (310) 156-3333", 
    }, 
    {
        id: 3, 
        logo: <AlternateEmailOutlined />, 
        text: "hello@koffee.com", 
    }, 
    {
        id: 4, 
        logo: <PaymentOutlined />, 
        text: "Contactless payments", 
    }, 
]; 