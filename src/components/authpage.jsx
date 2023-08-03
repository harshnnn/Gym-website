import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AuthPage.css'; // You can create your own CSS file for styling

const AuthPage = ({ isSignup }) => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your signup or login logic here
    
    // After successful signup or login, navigate to muscle-selector page
    navigate('/muscle-selector');
  };

  return (
    <div className="auth-page">
      <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>
      </form>
      <p>
        {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
        <Link to={isSignup ? '/login' : '/signup'}>{isSignup ? 'Login' : 'Sign up'}</Link>
      </p>
    </div>
  );
};

export default AuthPage;
