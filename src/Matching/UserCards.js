import React,{useEffect, useState } from "react";
import "./UserCards.css";
import {Link} from "react-router-dom";
import Navbar from "./Navbar";




const UserCards = ({auth}) => {
    <div className="background"></div>
     const[displayedUser, setDisplayedUser] = useState(null)
      let allUsers;
    const [userTracker, setUserTracker] = useState(1);
    const [clicked, setClicked] = useState(false);
    const [timesClicked, setTimesClicked] = useState(0);
    var rand = Math.floor(Math.random() * (7-1+1)+1);
    var x = rand;
    let loggedUserId = auth.id;

    
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
        fetch('http://localhost:3004/profiles?_start=' + userTracker +'&_end=' + (1 + userTracker))
        .then(res => {
            return res.json();
        })
        .then(data => {
            setDisplayedUser(data[0]);
        })
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
        return(    
            <><Navbar/>
            <div className="matchinghome">
                    {displayedUser !== null ? (
                        <>

                            <h1>MATCH! Viel Spaß beim Training mit:</h1>
                            <h3>{displayedUser.profile.name}, {displayedUser.profile.age}</h3>
                            <h4><img className="pic" src={displayedUser.profile.iconurl} alt=""></img></h4>
                            <h5>{displayedUser.profile.bio}</h5>

                        </>
                    ) : null}
                    <Link to={"/matching"}>
                        <button className="retry"></button></Link>
                    <Link to={"/message"}>
                        <button onClick={handleClick2} className="message"></button></Link>

                </div></>
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






















// function UserCards (){

//      const [allUsers, setAllUsers] = useState();    



//     useEffect (()=>{
//         fetch('http://localhost:3004/profiles')
//         .then(res=>{
//             return res.json();
//         })
//         .then(data=>{        
//         console.log(data);
//         setAllUsers(data);            
        

            
//         });
//     },[]);
    
        

    
//      return(
//           <div className="matchinghome">

            
       
//         </div>
// )

// }

// export default UserCards;
