import './Start.css';
import {Link} from "react-router-dom"

function Start() {
  return (
    <div className="Start">
        <h1>🔥 IronMate Homepage</h1>
        <Link to={"/login"}>LOGIN HERE</Link>
        <Link to={"/signup"}>Sign up HERE</Link>
        <Link to ={"/matching"}>Get started</Link>
        <Link to = {"/home"}>Landing page</Link>
    </div>
  );
}

export default Start;
