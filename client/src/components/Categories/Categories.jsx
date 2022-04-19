import { CategoryItem } from "../index"; 
import styled from "styled-components"
import { categories } from "../../constants/data"; 

const Container = styled.div`
    display: flex; 
    justify-content: space-between; 
    padding: 20px; 

    @media screen and (max-width: 480px) {
        padding: 0px; 
        flex-direction: column;    
    }
    
`

const Categories = () => {
    return (
        <Container>
            {categories.map((item) => (
                <CategoryItem key={item.id} item={item}/>
            ))}
        </Container>
    )
}

export default Categories