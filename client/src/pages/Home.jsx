import Hero from "../components/Hero/Hero"; 
import { Announcement, Navbar, Menu, Slider, ProductList, Footer } from "../components/index"; 
const Home = ({ menuOpen, setMenuOpen }) => {
    return (
        <div>
            <Announcement />
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Slider />
            <Hero />
            <ProductList />
            <Footer />
        </div>
            
    )
}

export default Home