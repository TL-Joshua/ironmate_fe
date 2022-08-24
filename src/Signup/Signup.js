import "./Signup.css"
import SignupBox from "./SignupBox";
import { Link } from "react-router-dom";

const Signup = ({handleLogin}) => {

    return (
        <div className="signup">
            <img src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" />
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