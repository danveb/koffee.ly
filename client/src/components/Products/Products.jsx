import { Product } from "../index"; 
import styled from "styled-components"; 
import { popularProducts } from "../../constants/data";

const Container = styled.div`
    padding: 20px; 
    display: flex; 
    flex-wrap: wrap; 
`

const Products = () => {
    return (
        <Container>
            {popularProducts.map((item) => (
                <Product key={item.id} item={item} />
            ))}
        </Container>
    )
}

export default Products