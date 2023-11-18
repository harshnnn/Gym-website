import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));


  useEffect(() => {
    const handleScroll = () => {

      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const navElements = document.getElementsByClassName('nav');

      for (let i = 0; i < navElements.length; i++) {
        document.getElementsByClassName.style.transform = scrollTop === 0 ? 'scale(1.2)' : 'scale(2)';
      }

      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      } 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setShowButton(scrollTop > 800); 
    
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav id='top' className={scroll ? 'scrollNav' : ''}>
    <input type="checkbox" id="menu-toggle" />
    <label htmlFor="menu-toggle" className="menu-btn">
      <span className="menu-icon"></span>
    </label>
    <ul className="menu">

      <li className='user-icon' >
        <Link  to="/user">{user ? user.email: 'User'}</Link>
      </li>
 
      <li>
        <Link to="/muscle-selector">MuscleGroupSelector</Link>
      </li>
      <li>
        <Link to="/diet">DietPage</Link>
      </li>
      <li>
        <Link to="/workout-plan">WorkoutPlanPage</Link>
      </li>
      <li>
        <Link to="/ai-assistant">AiAssistantPage</Link>
      </li>
    </ul>
    <div className='Go-Top'><button  className={`scroll-to-top ${showButton ? 'show' : ''}`}
      onClick={scrollToTop}><img alt='top-icon' className='scroll-icon' src={require('../Resources/icons/icons8-top-ios-16/icons8-top-32.png')}/></button></div>
  </nav>
  



  );
};

export default Navbar;