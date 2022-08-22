import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Matching from './Matching';
import reportWebVitals from './reportWebVitals';
import Login from "./Login/Login"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Signup/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Matching />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="*" element={<p>NOTHING HERE</p>}/> {/* sog. empty Route */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
