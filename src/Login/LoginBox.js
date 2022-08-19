import { useState } from "react";

const LoginBox = () => {
    
    const [loginEmail, setLoginEmail] = useState(null);
    const [loginPassword, setloginPassword] = useState(null);

    const handleSumbmit = (e) => {

        let succesfulLogin;

        fetch("http://localhost:3004/loginData?userEmail=" + loginEmail)
        .then(res => {
            return res.json()
        })
        .then(json => {
            if(Array.isArray(json) && json.length === 1) { //teste ob genau ein User unter loginEmail gefunden wurde
                let user = json[0];
                if (user.userPassword === loginPassword) {
                    succesfulLogin = true;
                } else { succesfulLogin = false}
            } else {succesfulLogin = false}
        })
        .then(() => {
            if (succesfulLogin) {
                alert("LOGIN SUCCESSFUL")
            } else {
                alert("Email or password wrong")
            }
        })

        e.preventDefault();
    }

    return (
            <div className="login-box">
                <form className="login-form" onSubmit={handleSumbmit}>
                    
                    <div className="login-input-group">
                        <label className="login-input">Email</label>
                        <input 
                            className="login-input" 
                            type="email" 
                            placeholder="myname@jeff.com" 
                            onChange={(e) => {setLoginEmail(e.target.value)}}
                            required
                        />
                    </div>
                    
                    <div className="login-input-group">
                        <label className="login-input">Password</label>
                        <input 
                            className="login-input" 
                            type="password" 
                            placeholder="At least 8 characters" 
                            onChange={(e) => {setloginPassword(e.target.value)}}
                            required
                        />
                    </div>

                    <a className="login-input" href="/resetpassword">Forgot password?</a>
                    <input className="login-input login-button" type="submit" value="Log in to IronMate"/>
                </form>
            </div>
            
    );
}
 
export default LoginBox;