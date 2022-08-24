import React,{useEffect, useState } from "react";


function UserCards (){
    const [users, setUsers] = useState(null);


    useEffect(() => {
        fetch('http://localhost:8000/profiles/9x5pxq90zpiob12og9')
        .then(res => {
            return res.json();
        })
        .then(data => {
            if(!Array.isArray(data)){
                data = [data];
                console.log(data);
                setUsers(data);
            }
            
        })
    }, []);


    

     return(
         <div className="matchinghome">
             
              {users && users.map((user) => (

                 <div className="users" key={user.id}>
                    <h2>{user.profile.name}, {user.profile.age} </h2>
                    <h4><img src={user.profile.iconurl} alt=""></img></h4>
                    <h5>{user.profile.bio}</h5>
                 </div>
             ))}
         </div>
     )

}
 
export default UserCards;