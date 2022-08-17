import './App.css';
import {Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <h1>🔥 IronMate Homepage</h1>
        <Link to={"/login"}>LOGIN HERE</Link>
    </div>
  );
}

export default App;
