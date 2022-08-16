import "./Login.css"
import LoginBox from "./LoginBox";


const Login = () => {

    return (
        <div className="login">
            <nav className="login-nav">
                <h3>no account? </h3>
                <button>REGISTER</button>
            </nav>
            <main className="login-content">
                <div className="login-header">
                    <h2>IronMate</h2>
                    <h3>Login here</h3>
                </div>
                <LoginBox></LoginBox>
            </main>
        </div>
    );
}
 
export default Login;