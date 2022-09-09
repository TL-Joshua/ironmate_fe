import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    
    const handleRefresh = () => {
        window.location.reload();
    }
    
    return(    
        <div>
        <nav className = "navBar">
            <ul>
                    <li className="Logo"><p>IRONMATE</p></li>
                    <li className="Home"><Link to={"/home"}>
                <button className="homeButton"></button></Link></li>
                <li className="Profile"> <Link to={"/profilebox"}>
                    <button className="profileboxButton"></button></Link></li>
                    <li className="Logout"><button onClick={handleRefresh} className="logoutButton"></button></li>
            </ul>
        </nav>
    </div>);
};

export default Navbar;