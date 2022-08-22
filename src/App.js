import './App.css';
import {Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <h1>🔥 IronMate Homepage</h1>
        <Link to={"/login"}>LOGIN HERE</Link>
        <Link to={"/signup"}>Sign up HERE</Link>
        <Link to ={"/matching"}>Get started</Link>
    </div>
  );
}

export default App;
