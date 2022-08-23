import { useState } from "react";
import { useNavigate } from "react-router-dom";
import uniqid from "uniqid";
import Alert from "../Alerts/Alert";

const SignupBox = () => {
    let navigate = useNavigate();

    const [loginEmail, setLoginEmail] = useState(null);
    const [loginPassword, setLoginPassword] = useState(null);

    const [displayAlert, setDisplayAlert] = useState(false);

    const handleSumbmit = (e) => {

        let canCreate
        let signupSuccessful

        //Test if there is already an account with email entered
        fetch("http://localhost:3004/loginData?userEmail=" + loginEmail)
        .then(res => {
            return res.json()
        })
        .catch(() => {
            throw "ERROR: server down"
        })
        .then(json => {
            // Test if Array is empty -> No user exists with this email
            if(Array.isArray(json) && json.length === 0) {
                canCreate = true
            } else {
                setDisplayAlert(true)
            }
        })
        .then(() => {
            if (canCreate) {
                let id = uniqid();
                fetch("http://localhost:3004/loginData", {
                    method: "POST",
                    headers : {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({id: id, userEmail: loginEmail, userPassword: loginPassword})
                })
                .then((res) => res.JSON)
                .then((data) => {
                    signupSuccessful = true;
                    navigate("/createProfile")
                })
                .catch(() => {
                    throw "ERROR: server down"
                })
            }
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
                        <Alert alertText="Email already in use."/>
                    ) : null}
                    <div className="input-group">
                        <label className="input">Email</label>
                        <input 
                            className="input" 
                            type="email" 
                            placeholder="Email" 
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
                                setLoginPassword(e.target.value)
                                setDisplayAlert(false)
                            }}
                            onFocus={() => {setDisplayAlert(false)}}
                            minLength="8"
                            required
                        />
                    </div>

                    {/* <a className="input" href="/resetpassword">Forgot password?</a> */}
                    
                    <div className="tou">
                        <input type="checkbox" name="" id="tou" required/>
                        <label className="input" for="tou">
                            I agree to IronMates’s Terms of Service
                        </label>
                    </div>
                    <div className="tou">
                        <input type="checkbox" name="" id="privacy" required/>
                        <label className="input" for="privacy">
                            I accept IronMate's use of my data for the service and everything else described in the Privacy Policy and Data Processing Agreement
                        </label>
                    </div>


                    <input className="input button" type="submit" value="Create my free account" onClick={() => {setDisplayAlert(false)}}/>
                </form>
            </div>
            
    );
}
 
export default SignupBox;