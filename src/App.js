import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from 'react';
import Login from "./Login/Login"
import Start from './Start/Start';
import Signup from './Signup/Signup';
import Home from './Home/Home';
import MatchingMain from "./Matching/MatchingMain";
import ProtectedRoute from './ProtectedRoute';
import Profile from "./Profile/Profile";

function App() {
  const [auth, setAuth] = useState(null);
  const handleLogin = (userId) => {setAuth({id: userId})};
  const handleLogout = () => {setAuth(null)};

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/login" element={<Login handleLogin={handleLogin}/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route element={<ProtectedRoute auth={auth}/>}>
          <Route path="/matching" element={<MatchingMain/>}/>
        </Route>
        <Route path="*" element={<p>NOTHING HERE</p>}/> {/* sog. empty Route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
