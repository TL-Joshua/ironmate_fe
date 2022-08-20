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
        .catch(() => {
            alert("OOPS, something went wrong." + "\n" + "(Turn on json-server on port 3004 😉)")
            throw "ERROR: server down"
        })

        e.preventDefault();
    }

    return (
            <div className="box">
                <form className="form" onSubmit={handleSumbmit}>
                    
                    <div className="input-group">
                        <label className="input">Email</label>
                        <input 
                            className="input" 
                            type="email" 
                            placeholder="myname@jeff.com" 
                            onChange={(e) => {setLoginEmail(e.target.value)}}
                            required
                        />
                    </div>
                    
                    <div className="input-group">
                        <label className="input">Password</label>
                        <input 
                            className="input" 
                            type="password" 
                            placeholder="At least 8 characters" 
                            onChange={(e) => {setloginPassword(e.target.value)}}
                            required
                        />
                    </div>

                    <a className="input" href="/resetpassword">Forgot password?</a>
                    <input className="input button" type="submit" value="Log in to IronMate"/>
                </form>
            </div>
            
    );
}
 
export default LoginBox;