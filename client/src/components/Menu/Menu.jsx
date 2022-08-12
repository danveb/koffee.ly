import { useSelector, useDispatch } from "react-redux"; 
import { Link } from "react-router-dom";
import { links } from "../../constants/links"; 
import { AccountCircle, Logout } from "@mui/icons-material";
import "./Menu.scss"; 

const Menu = ({ menuOpen, setMenuOpen }) => {
    const { user } = useSelector((state) => state.auth); 

    const dispatch = useDispatch(); 
    
    // handleLogout 
    const handleLogout = () => {
        dispatch({ type: "logout" }); 
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
                    <li>
                        <Logout onClick={handleLogout} />
                    </li>
                ) : (
                    <li>
                        <Link to="/login" onClick={() => setMenuOpen(!menuOpen)}>
                            <AccountCircle />
                        </Link>
                    </li>
                )}            
            </ul>
        </div>
    )
}

export default Menu