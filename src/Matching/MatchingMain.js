
import UserCards from "./UserCards";
import "./Matching.css"

const MatchingMain = ({auth, handleTracker, handleCurrentID}) => {

    return ( 
        <div className="Matching">
            {/* <h1>Find The Perfect Mate</h1>
            <h2>Ironmates in your Area:</h2> */}
                <UserCards 
                auth={auth} 
                handleTracker = {handleTracker}
                handleCurrentID = {handleCurrentID}
                /> 
        </div>

        
     );
    
}

 
export default MatchingMain;