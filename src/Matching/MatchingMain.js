
import ButtonsYesNo from "./ButtonsYesNo";
import UserCards from "./UserCards";
import "./Matching.css"

const MatchingMain = () => {
    
    return ( 
        <div className="Matching">
            <h1>Find The Perfect Mate</h1>
            <h2>Ironmates in your Area:</h2>
                <UserCards/> 
                <ButtonsYesNo/>    
        </div>

        
     );
    
}

 
export default MatchingMain;