import React,{ useEffect, useState } from "react";

function UserCards (){
    const [users, setUser] = useState([
    {
        name: 'uncle phil',
        url: ''
    },
    {
        name: 'kimo drizzy',
        url: ''
    }
    ]);
    return (  
       <div>
            <h1></h1>

              {users.map((user)=>(
               
               <div className="card" >
                    <h3>{user.name}</h3>
                    
               </div> 
              
             ))}  
       </div>
    );


}
 
export default UserCards;