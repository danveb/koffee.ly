import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; 
import { logout } from "../../redux/auth/authSlice"; 
import { links } from "../../constants/links"; 
import { AccountCircle, Logout, ShoppingBasket } from "@mui/icons-material";
import "./Menu.scss"; 
import { toast } from "react-toastify"; 

const Menu = ({ menuOpen, setMenuOpen }) => {
    // useDispatch 
    const dispatch = useDispatch(); 

    // useNavigate 
    const navigate = useNavigate(); 

    // user
    const { user } = useSelector((state) => state.auth); 
    
    // handleLogout 
    const handleLogout = () => {
        dispatch(logout()); 
        toast.info(`Sad to see you go ${user.name} 😭`); 
        navigate("/"); 
    }; 

    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                {links.map((link)=> (
                    <li key={link.id} onClick={()=> setMenuOpen(!menuOpen)}>
                        <Link to={`${link.path}`}>{link.text}</Link>
                    </li>
                ))}
                {user ? (
                    <>
                    <li>
                        <Link to="/profile" onClick={() => setMenuOpen(!menuOpen)}>Account</Link>
                    </li>
                    <li>
                        <Logout onClick={handleLogout} />
                    </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/cart" onClick={() => setMenuOpen(!menuOpen)}>
                                <ShoppingBasket />
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" onClick={() => setMenuOpen(!menuOpen)}>
                                <AccountCircle />
                            </Link>
                        </li>
                    </>
                )}            
            </ul>
        </div>
    )
}

export default Menu