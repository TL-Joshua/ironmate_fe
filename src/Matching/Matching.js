import ButtonsYesNo from './ButtonsYesNo';
import './index.css';
import UserInfo from './UserInfo';
import UserPic from './UserPic';

function Matching() {
  return (
        <div className="Matching">
            <h1>Find The Perfect Mate</h1>
            <h2>Ironmates in your Area:</h2>
                <UserInfo/>
                <UserPic />         
                <ButtonsYesNo/>
                
        </div>
  );
  
}

export default Matching;