import { useDispatch, useSelector } from "react-redux"; 
import { logout, reset } from "../../redux/auth/authSlice"; 
import { Link, useNavigate } from "react-router-dom"; 
import { Badge } from "@mui/material"; 
import { Search, AccountCircle, ShoppingBasket, Logout } from "@mui/icons-material"
import "./Navbar.scss"; 
import { toast } from "react-toastify"; 

const Navbar = ({ menuOpen, setMenuOpen }) => {
    // useDispatch 
    const dispatch = useDispatch(); 

    // useNavigate
    const navigate = useNavigate(); 

    // user
    const { user } = useSelector((state) => state.auth); 

    // cart 
    const { cartItems } = useSelector((state) => state.cart); 
    // get the quantity inside the basket at any time
    const qty = cartItems.reduce((acc, item) => acc + item.qty, 0); 

    // handleLogout
    const handleLogout = () => {
        setMenuOpen(!menuOpen); 
        dispatch(logout()); 
        dispatch(reset()); 
        toast.info(`Sad to see you go ${user.name} 😭`); 
        navigate("/"); 
    }; 

    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="navbar-wrapper">
                <div className="navbar-left">
                    <span>EN</span>
                    <div className="navbar-search">
                        <input placeholder="Search"></input>
                        <Search />
                    </div>
                </div>
                <div className="navbar-center">
                    <h1 className="logo">
                        <Link to="/" onClick={() => setMenuOpen(false)}>KOFFEE.LY</Link>
                    </h1>
                </div>
                <div className="navbar-right">
                    <ul className="navbar-item">
                        <li>
                            <Link to="/cart">
                                <Badge badgeContent={qty} color="primary">
                                    <ShoppingBasket onClick={() => setMenuOpen(false)} />
                                </Badge>
                            </Link>
                        </li>
                        {user ? (
                            <li>
                                <Logout onClick={handleLogout} />
                            </li>
                        ) : (
                            <li>
                                <Link to="/login" onClick={() => setMenuOpen(false)}>
                                    <AccountCircle />
                                </Link>
                            </li>
                        )}
                    </ul>
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar