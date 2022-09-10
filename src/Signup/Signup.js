import "./Signup.css"
import SignupBox from "./SignupBox";
import { Link } from "react-router-dom";

const Signup = ({handleLogin}) => {

    return (
        <div className="signup">
            <img src="https://i.pinimg.com/originals/96/79/65/967965f0f9d751a1b6c6297aceff49df.jpg" alt="" />
        <div className="main">
            <nav className="nav">
                <p>Already have an account?</p>
                <Link to="/login">
                    <button>Log in</button>            
                </Link>
            </nav>
            <main className="content">
                <div className="header">
                    <h2>IronMate</h2>
                    <h3>Find your perfect match that shares your passion for sports, outdoor hobbies & more.</h3>
                </div>
                <SignupBox handleLogin={handleLogin}></SignupBox>
            </main>
        </div>
    </div>
    );
}
 
export default Signup;