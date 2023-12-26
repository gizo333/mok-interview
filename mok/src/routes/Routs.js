import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Head/Home';
import Login from '../components/login-comp/login'
import Register from '../components/login-comp/register'


// export const FontStyleContext = React.createContext();

// const fontStyle = {
//   fontFamily: 'Playfair Display, sans-serif',
// };


function Routs() {
  return (
    // <FontStyleContext.Provider value={fontStyle}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    // </FontStyleContext.Provider>
  );
}

export default Routs;
