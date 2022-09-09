import Navbar from "../Matching/Navbar"
import {Link} from "react-router-dom";
import { useNavigate, Navigate } from "react-router-dom";
import React,{useEffect, useState } from "react";



const Matched = ({tracker}) => {
    const [user, setUser] = useState(null);
    let navigate = useNavigate();
    console.log(tracker);
    ;

    useEffect(() => {
        navigate("/matched", {replace: true});

        fetch('http://localhost:3004/profiles?_start=' + (tracker-2) + '&_end=' + (tracker-1))
        .then(res => {
            return res.json();
        })
        .then(data => {
            setUser(data[0]);
        })
        
        },[])
        


    return(    
        <><Navbar/>
        <div className="matchinghome">
                {user !== null ? (
                    <>

                        <h1>MATCH! Viel Spaß beim Training mit:</h1>
                        <h3>{user.profile.name}, {user.profile.age}</h3>
                        <h4><img className="pic" src={user.profile.iconurl} alt=""></img></h4>
                        <h5>{user.profile.bio}</h5>

                    </>
                ) : null}
                <Link to={"/matching"}>
                    <button className="retry"></button></Link>
                <Link to={"/message"}>
                    <button className="message"></button></Link>

            </div></>
    )
}
export default Matched;