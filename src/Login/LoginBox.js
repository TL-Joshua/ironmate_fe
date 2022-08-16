import { useState } from "react";

const LoginBox = () => {
    
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setloginPassword] = useState("");

    //diese Daten später in JSON Server
    const userData = [
        {userMail: "joshua@nguyen.de", userPassword: "123"},
        {userMail: "haus@haus.de", userPassword: "Haus"},
        {userMail: "monkey@monkey.de", userPassword: "Affe"},
    ]

    const handleSumbmit = (e) => {
        //get request an Server, um alle User zu finden
        const users = userData.filter((user) => {
            return user.userMail === loginEmail;
        })

        let foundUser
        if(users.length === 1) {
            foundUser = users[0]
            if (foundUser.userPassword === loginPassword) {
                alert("User found and correct password")
                console.log(foundUser) //gebe Login Token für diesen User frei
            }
            else {
                alert("Passwort falsch :(")
            }
        } else {
            alert("User not found")
        }
        e.preventDefault();
    }

    return (
            <form className="login-box" onSubmit={handleSumbmit}>
                <label className="login-input">Email</label>
                <input 
                    className="login-input" 
                    type="email" 
                    placeholder="myname@jeff.com" 
                    onChange={(e) => {setLoginEmail(e.target.value)}}
                />

                <label className="login-input">Password</label>
                <input 
                    className="login-input" 
                    type="password" 
                    placeholder="At least 8 characters" 
                    onChange={(e) => {setloginPassword(e.target.value)}}
                />
                
                <a className="login-input" href="/resetpassword">Forgot password?</a>

                <input className="login-input" type="submit" value="Log in to IronMate"/>
            </form>
    );
}
 
export default LoginBox;