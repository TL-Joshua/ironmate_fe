import React,{useEffect, useState } from "react";

function UserCards (){
     const[displayedUser, setDisplayedUser] = useState(null)
     //const[allUsers, setAllUsers] = useState(null)
      let allUsers;
    const [userTracker, setUserTracker] = useState(1);
    const [clicked, setClicked] = useState(false);
    // let clicked = false;

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

    const handleClick2 = () => {
        setClicked(true);        
        fetch('http://localhost:3004/profiles?_start=' + userTracker-1 +'&_end=' + (userTracker))
        .then(res => {
            return res.json();
        })
        .then(data => {
            setDisplayedUser(data[0]);
        })


    }
    if(clicked == true) {
        return(    
            <div className="Matched">
                { displayedUser !== null ? (
                    <>
                    <h1>Congratulations! You gone get some gymussy from:</h1>
                    <h3>{displayedUser.profile.name}, {displayedUser.profile.age}</h3> 
                    <h4><img className="pic" src={displayedUser.profile.iconurl} alt=""></img></h4>
                    <h5>{displayedUser.profile.bio}</h5>
                    </> 
                ) : null
               }
                   
            </div>
        )

    }

        
     return(    
         <div className="matchinghome">
             { displayedUser !== null ? (
                 <>
                    <h1>Find The Perfect Mate</h1>
                    <h2>Ironmates in your Area:</h2>
                 <h3>{displayedUser.profile.name}, {displayedUser.profile.age}</h3> 
                 <h4><img className="pic" src={displayedUser.profile.iconurl} alt=""></img></h4>
                 <h5>{displayedUser.profile.bio}</h5>
                 </> 
             ) : null
            }
                <button onClick={handleClick2}>LETS TRAIN</button>
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
