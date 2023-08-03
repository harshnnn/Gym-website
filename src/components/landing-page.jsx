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
