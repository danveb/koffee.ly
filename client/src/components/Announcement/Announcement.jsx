import styled from "styled-components"; 

const Container = styled.div`
    height: 30px; 
    background-color: #63a3bb; 
    color: white; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    font-size: 14px; 
    font-weight: 500; 
`

const Announcement = () => {
    return (
        <Container>
            Try Our New Single Origin From Madagascar. 
        </Container>
    )
}

export default Announcement