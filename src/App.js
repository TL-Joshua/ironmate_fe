import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./Login/Login"
import Start from './Start/Start';
import Signup from './Signup/Signup';
import MatchingMain from "./Matching/MatchingMain"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/matching" element={<MatchingMain/>}/>
        <Route path="*" element={<p>NOTHING HERE</p>}/> {/* sog. empty Route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
