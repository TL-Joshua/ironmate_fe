const Login = () => {
    return (
        <div className="login">
            <div className="login-header">
                <h2>🔥 IronMate</h2>
                <h3>Login here</h3>
            </div>
            <form action="" className="login-form">
                <label className="login-input" htmlFor="email">Email</label>
                <input className="login-input" type="text" name="" id="email" placeholder="myname@jeff.com"/>
                <label className="login-input" htmlFor="email">Password</label>
                <input className="login-input" type="text" name="" id="password" placeholder="At least 8 characters"/>
                <a className="login-input" href="/resetpassword">Forgot password?</a>
                <input className="login-input" type="submit" value="Log in to IronMate"/>
            </form>
        </div>
    );
}
 
export default Login;