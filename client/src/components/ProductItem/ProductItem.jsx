import { useState, useEffect } from "react"; 
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; 
import { getProductDetail } from "../../redux/product/productSlice";
import { Announcement, Navbar, Menu, Spinner, Footer } from "../index"; 
import styled from "styled-components"; 
import { device } from "../../styled";
import { toast } from "react-toastify"; 

const Container = styled.div`
    padding: 50px; 
    max-width: 960px; 
    margin: 0 auto; 
    display: flex; 

    @media ${device.mobile} {
        flex-direction: column; 
        padding: 20px; 
    }
`

const ImgContainer = styled.div`
    flex: 1; 
`

const Img = styled.img`
    width: 100%; 
    height: 35vh; 
    object-fit: cover; 

    @media ${device.mobile} {
        height: 40vh; 
    }
`

const InfoContainer = styled.div`
    flex: 1; 
    font-family: "Poppins", sans-serif; 
    padding: 0 40px; 

    @media ${device.mobile} {
        padding: 0; 
    }
`

const Title = styled.h1`
    font-size: 32px; 
    font-weight: 300; 
    margin: 10px 0; 
`

const H4Caption = styled.h4`
    font-size: 16px; 
    font-weight: 300; 
    font-style: italic; 
    margin-bottom: 20px; 
`

const AboutDesc = styled.div`
`

const H5AboutDesc = styled.h5`
    font-size: 15px; 
    font-weight: bold; 
    text-transform: uppercase; 
    margin-bottom: 10px; 
`

const PAboutDesc = styled.p`
    font-size: 14px; 
    font-weight: 300; 
    margin-bottom: 20px; 
`

const Price = styled.div`
`

const H5Price = styled.h5`
    font-size: 15px; 
    font-weight: bold; 
    text-transform: uppercase; 
    margin-bottom: 10px; 
`

const PPrice = styled.p`
    font-size: 22px; 
    font-weight: 300; 
    font-style: italic; 
    margin-bottom: 20px; 
`

const QtyContainer = styled.div`
    width: 50%; 
    margin: 30px 0px; 
    display: flex; 
    justify-content: space-between; 

    @media screen and (max-width: 480px) {
        width: 100%;    
    }
`
const Qty = styled.div`
    display: flex; 
    align-items: center; 
`
const QtyTitle = styled.span`
    font-size: 20px;
    font-weight: 200; 
`
const QtySize = styled.select`
    margin-left: 20px; 
    padding: 5px; 
`
const QtyOption = styled.option`
`

const AddContainer = styled.div`
    width: 50%; 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 

    @media screen and (max-width: 480px) {
        width: 100%;    
    }
`

const AmountContainer = styled.div`
    display: flex; 
    align-items: center; 
    font-weight: 700; 
`

const Amount = styled.span`
    width: 30px; 
    height: 30px; 
    border-radius: 10px; 
    border: 1px solid teal; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    margin: 0px 5px; 
`

const Button = styled.button`
    padding: 15px 25px; 
    border: 2px solid teal; 
    background-color: #fff; 
    cursor: pointer; 
    text-transform: uppercase; 
    transition: all 0.5s ease; 

    &:hover {
        background-color: #000; 
        color: #fff; 
        border: 2px solid #000; 
    }

    &.off {
        background-color: darkgray; 
        border: none; 
        color: #fff; 
        cursor: initial; 
    }
`

const ProductItem = ({ menuOpen, setMenuOpen }) => {
    // useState
    const [qty, setQty] = useState(1); 

    // useNavigate
    const navigate = useNavigate(); 

    // useLocation 
    const location = useLocation();
    const productId = location.pathname.split("/")[2]; 

    // useDispatch 
    const dispatch = useDispatch(); 

    // useSelector 
    const { product, isLoading, isError, message } = useSelector((state) => state.product); 

    // with state && AXIOS 
    // useEffect(() => {
    //     const fetchProduct = async () => {
    //         const { data } = await axios.get(`/api/products/${productId}`); 
    //         setProduct(data); 
    //     }; 
    //     fetchProduct(); 
    // // empty dependency array when firing off useEffect
    // }, [productId]); 

    useEffect(() => {
        dispatch(getProductDetail(productId)); 
        if(isError) {
            toast.error(message); 
            navigate("/"); 
        }
    }, [dispatch, isError, message, productId, navigate])

    if(isLoading) {
        return <Spinner />
    };

    // handleClick
    const handleClick = () => {
        navigate(`/cart/${productId}?qty=${qty}`); 
    };

    return (
        <>        
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Announcement />
                <Container>
                    <ImgContainer>
                        <Img src={product.image} alt="product" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{product.name}</Title>
                        <H4Caption>{product.caption}</H4Caption>
                        <AboutDesc>
                            <H5AboutDesc>About this item</H5AboutDesc>
                            <PAboutDesc>{product.about}</PAboutDesc>
                        </AboutDesc>
                        <AboutDesc>
                            <H5AboutDesc>Details</H5AboutDesc>
                            <PAboutDesc>{product.description}</PAboutDesc>
                        </AboutDesc>
                        <Price>
                            <H5Price>Price</H5Price>
                            <PPrice>${product.price}</PPrice>
                        </Price>
                        {product.countInStock > 0 ? (
                            <>
                            <QtyContainer>
                                <Qty>
                                    <QtyTitle>Quantity</QtyTitle>
                                    <QtySize 
                                        value={qty} 
                                        onChange={(e) => setQty(e.target.value)}
                                    >
                                        {
                                            [...Array(product.countInStock).keys()].map((x) => (
                                                <QtyOption 
                                                    key={x + 1} 
                                                    value={x + 1}
                                                >
                                                    {x + 1}
                                                </QtyOption>
                                            ))
                                        }   
                                    </QtySize>
                                </Qty>
                            </QtyContainer>
                            <Button
                                onClick={handleClick}
                            >Add To Cart</Button>
                            </>
                        ) : (
                            <Button className="off" disabled={product.countInStock === 0}>Out of Stock</Button>
                        )}
                    </InfoContainer>
                </Container>
            <Footer />
        </>
    )
}

export default ProductItem