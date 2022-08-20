import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../Alerts/Alert";


const LoginBox = () => {
    let navigate = useNavigate();


    const [loginEmail, setLoginEmail] = useState(null);
    const [loginPassword, setloginPassword] = useState(null);

    const [displayAlert, setDisplayAlert] = useState(false);

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
                navigate("/matching")
            } else {
                setDisplayAlert(true)
            }
        })
        .catch(() => {
            throw "ERROR: server down"
        })
        .catch((err) => {
            alert(err + "\n" + "Is json-server running on port 3004? 😉")
        })

        e.preventDefault();
    }

    return (
            <div className="box">
                <form className="form" onSubmit={handleSumbmit}>
                    {displayAlert ? (
                    <Alert alertText="Your login info is not correct."/>
                    ) : null}
                    <div className="input-group">
                        <label className="input">Email</label>
                        <input 
                            className="input" 
                            type="email" 
                            placeholder="myname@jeff.com" 
                            onChange={(e) => {
                                setLoginEmail(e.target.value)
                                setDisplayAlert(false)
                            }}
                            onFocus={() => {setDisplayAlert(false)}}
                            required
                        />
                    </div>
                    
                    <div className="input-group">
                        <label className="input">Password</label>
                        <input 
                            className="input" 
                            type="password" 
                            placeholder="At least 8 characters" 
                            onChange={(e) => {
                                setloginPassword(e.target.value)
                                setDisplayAlert(false)
                            }}
                            onFocus={() => {setDisplayAlert(false)}}
                            minLength="8"
                            required
                        />
                    </div>

                    <a className="input" href="/resetpassword">Forgot password?</a>
                    <input className="input button" type="submit" value="Log in to IronMate" onClick={() => {setDisplayAlert(false)}}/>
                </form>
            </div>
            
    );
}
 
export default LoginBox;