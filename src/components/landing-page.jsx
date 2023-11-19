import {link, useNavigate} from "react-router-dom";
import React, {useState, useRef, useEffect} from 'react';
import './LandingPage.css';
import SignupPage from "./login/signup";
import LoginPage from "./login/login";
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
import { RiBoxingFill, RiHeartPulseFill, RiRunLine, RiShoppingBasketFill } from 'react-icons/ri';
import { RiUserStarFill, RiVidiconFill, RiBuildingLine } from 'react-icons/ri';

import logo from '../Resources/logo.png';
import classImg1 from '../Resources/class-1.jpg';
import classImg2 from '../Resources/class-2.jpg';
import joinImg from '../Resources/join.jpg';

const LandingPage = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loginDiv, setLoginDiv] = useState(false);
  const loginDivRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginDivRef.current && !loginDivRef.current.contains(event.target)) {
        // Click occurred outside of login-div, so close it
        setShowSignup(false);
        setShowLogin(false);
        setLoginDiv(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  const navigate = useNavigate();

  const openSignup = () => {
    setShowSignup(!showSignup);
	setLoginDiv(!loginDiv);
  };

  const openLogin = () => {
    setShowLogin(!showLogin);
	setLoginDiv(!loginDiv);
  }

  return (
    < section >
      <nav className="landing-nav">
        <div className="nav__logo">
          <a href="#"><img src={logo} alt="logo"/></a> 
        </div>

        <ul className="nav__links">
          <li className="link"><a  onClick={()=> navigate('/muscle-selector')} >Home</a></li>
          <li className="link"><a  onClick={()=> navigate('/workout-plan')} >Program</a></li>
          <li className="link"><a  onClick={()=> navigate('/diet')} >Service</a></li>
          <li className="link"><a >About</a></li>  
          <li className="link"><a >Community</a></li>
        </ul>

        <button className="btn" onClick={openSignup}>Join Now</button>
      </nav>

      <header className="section__container header__container">
        <div className="header__content">
          
          <span className="bg__blur"></span>
          <span className="bg__blur header__blur"></span>

          <h4>BEST FITNESS ONLINE</h4>
          <h1><span>MAKE</span> YOUR BODY SHAPE</h1>

          <p>
            Unleash your potential and embark on a journey towards a stronger, 
            fitter, and more confident you. Sign up for 'Make Your Body Shape' now
            and witness the incredible transformation your body is capable of!
          </p>
          
          <button className="btn" onClick={()=> navigate('/muscle-selector')}>Get Started</button>
        </div>
      </header>

      <section className="section__container explore__container">

        <div className="explore__header">
          <h2 className="section__header">WHAT OUR ONLINE GUIDE PROVIDES YOU</h2>
          
          <div className="explore__nav">
            <span><RiArrowLeftLine /></span>
            <span><RiArrowRightLine /></span>  
          </div>
        </div>

        <div className="explore__grid">

          <div className="explore__card">
            <span><RiBoxingFill /></span>
            <h4>Exercise guide</h4>
            <p>Learn about various exercises and how to perform them here.</p>
            <a href="#">Explore now <RiArrowRightLine /></a>
          </div>

          <div className="explore__card">
            <span><RiHeartPulseFill /></span>
            <h4>Calorie counter</h4>
            <p>Count the calorie intake of the food you are planning to eat,</p>
            <a href="#">Plan calories<RiArrowRightLine /></a>
          </div>

          <div className="explore__card">
            <span><RiRunLine /></span>
            <h4>Fat Lose</h4>
            <p>Through a combination of workout routines and expert guidance, we'll empower you to reach your goals.</p>
            <a href="#">Join Now <RiArrowRightLine /></a>
          </div>

          <div className="explore__card">
            <span><RiShoppingBasketFill /></span>
            <h4>Weight Gain</h4>
            <p>Designed for individuals, our program offers an effective approach to gaining weight in a sustainable manner.</p>
            <a href="#">Join Now <RiArrowRightLine /></a>  
          </div>

        </div>

      </section>

      <section className="section__container class__container">

  <div className="class__image">
    <span className="bg__blur"></span>
    <img src={classImg1} alt="class" className="class__img-1"/>
    <img src={classImg2} alt="class" className="class__img-2"/>
  </div>

  <div className="class__content">
    <h2 className="section__header">THE GUIDANCE YOU GET HERE</h2>

    <p>
      Led by our team of experts we are sure to provide the best possible diet plans and exercise schedules. No matter what you are looking for, we have every type of plan for everybody.
    </p>
    
    <button className="btn">Book A Class</button>
  </div>

</section>

<section className="section__container join__container">

  <h2 className="section__header">WHY JOIN US ?</h2>

  <p className="section__subheader">
    Our diverse membership base creates a friendly and supportive atmosphere, where you can make friends and stay motivated.
  </p>

  <div className="join__image">

    <img src={joinImg} alt="Join" />

    <div className="join__grid">

      <div className="join__card">
        <span><RiUserStarFill /></span>
        <div className="join__card__content">
          <h4>Personal Trainer</h4>
          <p>Unlock your potential with our expert Personal Trainers.</p>
        </div>
      </div>

      <div className="join__card">
        <span><RiVidiconFill /></span>
        <div className="join__card__content">
          <h4>Practice Sessions</h4>
          <p>Elevate your fitness with practice sessions.</p>
        </div>
      </div>

      <div className="join__card">
        <span><RiBuildingLine /></span>
        <div className="join__card__content">
          <h4>Good Management</h4>
          <p>Supportive management, for your fitness success.</p>
        </div>
      </div>

    </div>
  </div>

</section>

<section className="section__container price__container">

  <h2 className="section__header">OUR PRICING PLAN</h2>

  <p className="section__subheader">
    Our pricing plan comes with various membership tiers, each tailored to cater to different preferences and
  </p>

  {/* Pricing content goes here */}

</section>

      {/* Other sections */}

      {loginDiv && (<div className="login-div" ref={loginDivRef}>
			{showSignup && (
				<div className="signup">
				<SignupPage />
				</div>
			)}

			{
				showLogin && (
				<div className="login">
					<LoginPage/>
				</div>
				)
			}
      	</div>)}

    </section>
  );
};

export default LandingPage;


// import {link, useNavigate} from "react-router-dom";
// import React from 'react';
// import './LandingPage.css';


