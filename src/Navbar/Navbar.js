import {Link} from "react-router-dom";
import "./Navbar.css";
import Profile from "../Profile/Profile";

const Navbar = () => {

    const profileClick = () => {
        return (
            <Profile/>
        )
    }
    
    return(    
        <div>
        <nav className = "navBar">
            <ul>
                    <li className="Logo"><p>IRONMATE</p></li>
                    <li className="Home"><Link to={"/matching"}>
                    <button className="homeButton"></button></Link></li>
                    <li className="Profile"> <Link to={"/profile"}>
                    <button onClick={profileClick}className="profileboxButton"></button></Link></li>
            </ul>
        </nav>
    </div>);
};

export default Navbar;