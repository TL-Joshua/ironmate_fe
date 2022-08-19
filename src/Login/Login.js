import "./Login.css"
import LoginBox from "./LoginBox";


const Login = () => {

    return (
        <div className="main">
            <nav className="nav">
                <p>Don't have an account yet?</p>
                <button>Sign up</button>
            </nav>
            <main className="content">
                <div className="header">
                    <h2>IronMate</h2>
                    <h3>Login here</h3>
                </div>
                <LoginBox></LoginBox>
            </main>
        </div>
    );
}
 
export default Login;