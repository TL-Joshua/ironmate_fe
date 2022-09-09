import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from 'react';
import Login from "./Login/Login"
import Start from './Start/Start';
import Signup from './Signup/Signup';
import MatchingMain from "./Matching/MatchingMain"
import ProtectedRoute from './ProtectedRoute';
import Matched from './Matched/Matched';
import Profile from './Profile/Profile';

function App() {
  const [auth, setAuth] = useState(null);
  const handleLogin = (userId) => {setAuth({id: userId})};
  const handleLogout = () => {setAuth(null)};
  const [tracker, setTracker] = useState (null);
  const handleTracker = (tracker) => {setTracker(tracker)};
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/login" element={<Login handleLogin={handleLogin}/>}/>
        <Route path="/signup" element={<Signup handleLogin={handleLogin}/>}/>
        <Route element={<ProtectedRoute auth={auth}/>}>
          <Route path="/matching" element={<MatchingMain auth={auth} handleTracker={handleTracker}/>}/>
          <Route path="/matched" element={<Matched tracker={tracker}/>}/>
          <Route path="/profile" element={<Profile auth={auth}/>}/>
        </Route>
        <Route path="*" element={<p>NOTHING HERE</p>}/> {/* sog. empty Route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
