import "./profile.css"
import Profilebox from "./Profilebox";
import { Link } from "react-router-dom";

function Profile() {

    return (
        <><div className="main">
            <nav className="Navbar">
                <ul>
                    <div class="Logo">
                        <li>IronMate</li>
                    </div>
                </ul>
                <ul>
                    <div class="middle">
                        <button>Home</button>
                        <button>Membership</button>
                        <button>Courses</button>
                    </div>
                </ul>
                <ul>
                    <div class="Logout">
                        <button>Log out</button>
                    </div>
                </ul>
            </nav>
        </div><div>
                <Profilebox />
            </div></>
    );
}
 
export default Profile;