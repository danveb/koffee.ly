import { Navbar, Announcement, Products, Newsletter, Footer } from "../components/index"; 
import styled from "styled-components"; 

const Container = styled.div`
`

const Title = styled.h1`
    margin: 20px; 
`

const FilterContainer = styled.div`
    display: flex; 
    justify-content: space-between; 
`

const Filter = styled.div`
    margin: 20px; 

    @media screen and (max-width: 380px) {
        margin: 0px 20px;    
        display: flex; 
        flex-direction: column; 
    }
`

const FilterText = styled.span`
    font-size: 20px; 
    font-weight: 600; 
    margin-right: 20px; 

    @media screen and (max-width: 380px) {
        margin-right: 0px;   
    }
`

const Select = styled.select`
    padding: 10px; 
    margin-right: 20px; 

    @media screen and (max-width: 380px) {
        margin: 10px 0px;    
    }
`

const Option = styled.option``

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Drip | Macchiato | Brew Tools</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter:</FilterText>
                    <Select>
                        <Option disabled selected>-</Option>
                        <Option>Drip</Option>
                        <Option>Macchiato</Option>
                        <Option>Brew Tools</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort:</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (Ascending)</Option>
                        <Option>Price (Descending)</Option>
                    </Select>                
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList