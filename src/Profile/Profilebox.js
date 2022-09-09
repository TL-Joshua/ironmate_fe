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

                         <div className="info">
                             <h3>{currentUser.profile.name}, {currentUser.profile.age}</h3>
                             <h4><img className="pic" src={currentUser.profile.iconurl} alt=""></img></h4>
                             <h5>{currentUser.profile.bio}</h5>
                         </div>
                     </>

                 ) : null}  
             </div>
    
    )}
    ;
     export default Profilebox;