import {link, useNavigate} from "react-router-dom";
import React from 'react';
import './LandingPage.css';




const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page background-image">
      {/* <div className="background-image"> */}
      <h1>Following the legacy of Zyzz</h1>
      
      <div className="buttons-container">
        
        <div className="buttons">
          <button className="signup-button" onClick={()=> navigate('/muscle-selector')}>Sign Up</button>
          <button className="login-button" onClick={()=> navigate('/muscle-selector')}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;



// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LandingPage from './LandingPage';
// import SignupPage from './SignupPage'; // Import your SignupPage component
// import LoginPage from './LoginPage'; // Import your LoginPage component
// import MuscleSelectorPage from './MuscleSelectorPage'; // Import your MuscleSelectorPage component

// const Login = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/muscle-selector" element={<MuscleSelectorPage />} />
//         {/* Add more routes as needed */}
//       </Routes>
//     </Router>
//   );
// };

// export default Login;
