import React,{useEffect, useState } from "react";
import "./UserCards.css";
import Navbar from "./Navbar";
import Matched from "../Matched/Matched";
import { useNavigate, Navigate } from "react-router-dom";
import App from "../App";



var rand = Math.floor(Math.random() * (7-2+1)+1);
    var x = rand;

const UserCards = ({auth, handleTracker}) => {
    <div className="background"></div>
     const[displayedUser, setDisplayedUser] = useState(null)
      let allUsers;
    const [userTracker, setUserTracker] = useState(1);
    const [clicked, setClicked] = useState(false);
    const [timesClicked, setTimesClicked] = useState(0);
    //var rand = Math.floor(Math.random() * (4-1+1)+1);
    // var x = rand;
     let loggedUserId = auth.id;
    let navigate = useNavigate();

    
    useEffect(() => {
      
        fetch('http://localhost:3004/profiles?_start=0&_end=1')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setDisplayedUser(data[0]);
        })
        
        },[])
        
    const handleClick = () => {
        setUserTracker(userTracker+1);
        fetch('http://localhost:3004/profiles?_start=' + userTracker +'&_end=' + (1 + userTracker))
        .then(res => {
            return res.json();
        })
        .then(data => {
            if(data[0].id === loggedUserId){
                userTracker++;
            }
            setDisplayedUser(data[0]);
        })
        

    }

    const handleClick2 = () => {
        setTimesClicked(timesClicked+1);
        if(timesClicked==x){
        setClicked(true);        
        fetch('http://localhost:3004/profiles?_start=' + userTracker-1 +'&_end=' + (userTracker))
        .then(res => {
            return res.json();
        })
        .then(data => {
            setDisplayedUser(data[0]);
        })
        setTimesClicked(timesClicked+1);
        setUserTracker(userTracker+1);
        // fetch('http://localhost:3004/profiles?_start=' + userTracker +'&_end=' + (1 + userTracker))
        // .then(res => {
        //     return res.json();
        // })
        // .then(data => {
        //     setDisplayedUser(data[0]);
        // })
        }
        setTimesClicked(timesClicked+1);
        setUserTracker(userTracker+1);
        fetch('http://localhost:3004/profiles?_start=' + userTracker +'&_end=' + (1 + userTracker))
        .then(res => {
        return res.json();
        })
        .then(data => {
            if(data[0].id === loggedUserId){
                userTracker++;
            }
        setDisplayedUser(data[0]);
         })



    }

    if(clicked == true) {
        handleTracker(userTracker);

        return(
        <Matched/>
        )
        
    }

        
     return(    
        <><Navbar/>
        <div className="matchinghome">
                 {displayedUser !== null ? (
                     <>

                         <div className="text">
                             <h1>Find The Perfect Mate</h1>
                             <h2>Ironmates in your Area:</h2>
                             <h3>{displayedUser.profile.name}, {displayedUser.profile.age}</h3>
                             <h4><img className="pic" src={displayedUser.profile.iconurl} alt=""></img></h4>
                             <h5>{displayedUser.profile.bio}</h5>
                         </div>
                     </>

                 ) : null}
                 <button onClick={handleClick2} className="train"></button>
                 <button onClick={handleClick} className="next"></button>
             </div></>
     )

        }
    
 
export default UserCards;
