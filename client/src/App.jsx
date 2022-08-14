import { useState } from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import { Cart, Login, ProductItem, Profile, Register } from "./components/index"; 
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

const App = () => {
    // useState 
    const [menuOpen, setMenuOpen] = useState(false); 

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> } />
                    <Route path="/profile" element={<Profile menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> } />
                    <Route path="/products/:id" element={<ProductItem menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> } />
                    <Route path="/cart">
                        <Route path="" element={<Cart menuOpen={menuOpen} setMenuOpen={setMenuOpen} />} />
                        <Route path=":id" element={<Cart menuOpen={menuOpen} setMenuOpen={setMenuOpen} />} />
                    </Route>
                    <Route path="/login" element={<Login menuOpen={menuOpen} setMenuOpen={setMenuOpen} />} />
                    <Route path="/register" element={<Register menuOpen={menuOpen} setMenuOpen={setMenuOpen} />} />
                </Routes>
            </Router>
            <ToastContainer />
        </>
    )
}

export default App