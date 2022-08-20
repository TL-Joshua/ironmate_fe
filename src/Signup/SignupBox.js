import { useState } from "react";
import uniqid from "uniqid";

const SignupBox = () => {
    
    const [loginEmail, setLoginEmail] = useState(null);
    const [loginPassword, setloginPassword] = useState(null);

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
                throw "ERROR: Email already in use."
            }
        })
        .then(() => {
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
            })
            .catch(() => {
                throw "ERROR: server down"
            })
        })
        .catch((err) => {
            alert(err)
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
                            placeholder="Email" 
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


                    <input className="input button" type="submit" value="Create my free account"/>
                </form>
            </div>
            
    );
}
 
export default SignupBox;