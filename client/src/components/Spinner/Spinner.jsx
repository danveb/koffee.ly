import styled from "styled-components"; 
import { keyframes } from "styled-components";

const spinAnimation = keyframes`
    0% {
        transform: rotate(0deg); 
    }
    100% {
        transform: rotate(360deg); 
    }
`

const Container = styled.div`
    position: fixed; 
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5); 
    z-index: 10;
    display: flex; 
    justify-content: center; 
    align-items: center; 
`

const Loading = styled.div`
    width: 64px; 
    height: 64px; 
    border: 8px solid; 
    border-color: #000 transparent #555 transparent; 
    border-radius: 50%; 
    animation: ${spinAnimation} 1.2s linear infinite 
`

const Spinner = () => {
    return (
        <Container>
            <Loading></Loading>
        </Container>
    )
}

export default Spinner 