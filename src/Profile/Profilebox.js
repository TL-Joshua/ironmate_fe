import { useEffect, useState } from "react";

     
const Profilebox = ({auth}) => {
    const [currentUser,setCurrentUser] = useState(null);
    let currentUserId = auth.id;

    
    fetch("http://localhost:3004/profiles?id=" + currentUserId)
        .then(res => {
            return res.json() 
        })
        .then (data => {
            setCurrentUser(data[0]);
        })
       
    

    return (
            
            <div className="profile">
                   {currentUser !== null ? (
                     <>
                     <br></br>
                     <div className="container">
                         <div className="bioPic"> <img className="pic" src={currentUser.profile.iconurl} alt="" ></img></div>
                         </div> 

                         <div className="info">
                            <br></br>
                             <h3>Name: {currentUser.profile.name}</h3>
                             <br></br>
                             <h3>Age: {currentUser.profile.age}</h3>
                             <br></br>
                             <h3>Bio: {currentUser.profile.bio}</h3>
                         </div>
                                             
                     </>

                 ) : null}  
             </div>
           
    
    )}
    ;
     export default Profilebox;