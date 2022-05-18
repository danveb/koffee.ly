import { Navbar, Announcement, Products, Newsletter, Footer } from "../components/index"; 
import styled from "styled-components"; 
import { useLocation } from "react-router-dom";
import { useState } from "react";

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
    const location = useLocation(); 
    const cat = location.pathname.split("/")[2]; 
    const [filters, setFilters] = useState({}); 
    const [sort, setSort] = useState("newest"); 

    const handleFilter = (e) => {
        const value = e.target.value; 
        setFilters({
            ...filters, 
            [e.target.name]: value
        }); 
    }; 

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>{cat.toUpperCase()}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter:</FilterText>
                    <Select name="color" onChange={handleFilter}>
                        <Option disabled>option</Option>
                        <Option>classic</Option>
                    </Select>
                    <Select name="size" onChange={handleFilter}>
                        <Option disabled>size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (Ascending)</Option>
                        <Option value="desc">Price (Descending)</Option>
                    </Select>                
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList