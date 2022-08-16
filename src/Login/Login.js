import "./Login.css"
import LoginBox from "./LoginBox";


const Login = () => {

    return (
        <div className="login">
            <div className="login-header">
                <h2>IronMate</h2>
                <h3>Login here</h3>
            </div>
            <LoginBox></LoginBox>
        </div>
    );
}
 
export default Login;