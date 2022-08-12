import { useDispatch, useSelector } from "react-redux"; 
import { logout, reset } from "../../redux/auth/authSlice"; 
import { Link, useNavigate } from "react-router-dom"; 
import { Badge } from "@mui/material"; 
import { Search, AccountCircle, ShoppingBasket, Logout } from "@mui/icons-material"
import "./Navbar.scss"; 

const Navbar = ({ menuOpen, setMenuOpen }) => {
    // useDispatch 
    const dispatch = useDispatch(); 

    // useNavigate
    const navigate = useNavigate(); 

    // user
    const { user } = useSelector((state) => state.auth);  

    // cart
    // const { quantity } = useSelector((state) => state.cart); 
    // const quantity = useSelector(state => state.cart.quantity); 

    // TODO: handle user logout
    // using redux we should dispatch logout()  
    // add toast notifications 
    const handleLogout = () => {
        dispatch(logout()); 
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
                        <Link to="/">KOFFEE.LY</Link>
                    </h1>
                </div>
                <div className="navbar-right">
                    <ul className="navbar-item">
                        <li>
                            <Link to="/cart">
                                {/* <Badge badgeContent={quantity} color="primary"> */}
                                <Badge badgeContent="" color="primary">
                                    <ShoppingBasket />
                                </Badge>
                            </Link>
                        </li>
                        {user ? (
                            <li>
                                <Logout onClick={() => handleLogout} />
                            </li>
                        ) : (
                            <li>
                                <Link to="/login">
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