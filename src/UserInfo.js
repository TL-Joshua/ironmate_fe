import { useEffect, useState } from "react";

function UserInfo (){
    const {Users, setUser} = useState([
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
            <h1>Users</h1>
       </div>
    );


}
 
export default UserInfo;