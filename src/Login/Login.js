import "./Login.css"
import LoginBox from "./LoginBox";
import { Link } from "react-router-dom";

const Login = ({handleLogin}) => {

    return (
        <div className="main">
            <nav className="nav">
                <p>Don't have an account yet?</p>
                <Link to="/signup">
                    <button>Sign up</button>
                </Link>
            </nav>
            <main className="content">
                <div className="header">
                    <h2>IronMate</h2>
                    <h3>Login here</h3>
                </div>
                <LoginBox handleLogin={handleLogin}></LoginBox>
            </main>
        </div>
    );
}
 
export default Login;