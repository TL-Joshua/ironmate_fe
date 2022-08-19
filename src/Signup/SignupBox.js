import { useState } from "react";

const SignupBox = () => {
    
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
        })

        e.preventDefault();
    }

    return (
            <div className="box">
                <form className="form" onSubmit={handleSumbmit}>
                    
                    <div className="input-group">
                        {/* <label className="input">Email</label> */}
                        <input 
                            className="input" 
                            type="email" 
                            placeholder="Email" 
                            onChange={(e) => {setLoginEmail(e.target.value)}}
                            required
                        />
                    </div>
                    
                    <div className="input-group">
                        {/* <label className="input">Password</label> */}
                        <input 
                            className="input" 
                            type="password" 
                            placeholder="Password" 
                            onChange={(e) => {setloginPassword(e.target.value)}}
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