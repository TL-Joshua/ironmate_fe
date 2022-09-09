
import UserCards from "./UserCards";
import "./Matching.css"

const MatchingMain = ({auth}) => {

    return ( 
        <div className="Matching">
            {/* <h1>Find The Perfect Mate</h1>
            <h2>Ironmates in your Area:</h2> */}
                <UserCards auth={auth}/> 
        </div>

        
     );
    
}

 
export default MatchingMain;