import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import SignupPage from './SignupPage'; // Import your SignupPage component
import LoginPage from './LoginPage'; // Import your LoginPage component
import MuscleSelectorPage from './MuscleSelectorPage'; // Import your MuscleSelectorPage component

const Login = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/muscle-selector" element={<MuscleSelectorPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default Login;
