import React,{useEffect, useState } from "react";

function UserCards (){
     const[displayedUser, setDisplayedUser] = useState(null)
     //const[allUsers, setAllUsers] = useState(null)
      let allUsers;
    const [userTracker, setUserTracker] = useState(1);


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
            setDisplayedUser(data[0]);
        })
        

    }
    

        
     return(    
         <div className="matchinghome">
             { displayedUser !== null ? (
                 <><h3>{displayedUser.profile.name}, {displayedUser.profile.age}</h3> 
                 <h4><img className="pic" src={displayedUser.profile.iconurl} alt=""></img></h4>
                 <h5>{displayedUser.profile.bio}</h5>
                 </> 
             ) : null
            }
                <button onClick={handleClick}>LETS TRAIN</button>
                <button onClick={handleClick}>NEXT ONE</button>
         </div>
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
