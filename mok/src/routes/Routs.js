import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Head/Home';
import Login from '../components/login-comp/login'
import Register from '../components/login-comp/register'
import Recovery from '../components/login-comp/recovery-pass'
import Setting from '../components/personal-account/setting'



function Routs() {
  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recoverypass" element={<Recovery />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </Router>
  );
}

export default Routs;
