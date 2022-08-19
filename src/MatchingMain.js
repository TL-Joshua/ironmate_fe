import UserPic from "./UserPic";
import UserInfo from "./UserInfo";
import ButtonsYesNo from "./ButtonsYesNo";
import { useEffect, useState } from "react";
import UserCards from "./UserCards";
const MatchingMain = () => {
    
    return ( 
        <div className="Matching">
            <h1>Find The Perfect Mate</h1>
            <h2>Ironmates in your Area:</h2>
                <UserInfo/>
                <UserPic />         
                <ButtonsYesNo/>
                {/* <UserCards/> */}
                
                
        </div>

        
     );
    
}

 
export default MatchingMain;