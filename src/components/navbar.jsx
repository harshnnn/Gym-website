import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FaUser } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

import LoginPage from './login/login';
import SignupPage from './login/signup';



const Navbar = ({ handleLogout }) => {
	const [scroll, setScroll] = useState(false);
	const [userDiv, setUserDiv] = useState(false);
	const [authDiv, setAuthDiv] = useState(false);
	const [loginDiv, setLoginDiv] = useState(false);
	const [signupDiv, setSignupDiv] = useState(false);

	const user = JSON.parse(localStorage.getItem('user'));

	const loginDivRef = useRef(null); //for closing the auth div when clicked outside

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (loginDivRef.current && !loginDivRef.current.contains(event.target)) {
				// Click occurred outside of login-div, so close it
				//setSignupDiv(false);
				setAuthDiv(false);
				//setLoginDiv(false);
				document.body.classList.remove('login-active'); // Add CSS class to body

			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const showAuthDiv = () => {
		setUserDiv(!userDiv);
	}

	const handlelogin = () => {
		setAuthDiv(true);
		setLoginDiv(true);
		setSignupDiv(false);
		setUserDiv(null);
		document.body.classList.add('login-active'); // Add CSS class to body

	}

	const handleSignup = () => {
		setAuthDiv(true);
		setSignupDiv(true);
		setLoginDiv(false);
		setUserDiv(null);
		document.body.classList.add('login-active'); // Add CSS class to body

	}


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

				<li className='user-icon' >

					{/* <img src={scroll ? userlogo2 : userlogo } alt="" onClick={showAuthDiv} className='user-icon-img' /> */}
					<li className={scroll ? 'scroll-user-icon': ''} onClick={showAuthDiv}>{scroll ?<FaRegUser/> : < FaUser/>}</li>
					{userDiv && (
						<div className='user-icon-list'>
							{user !== null ? (
								<>
									<Link to="/user">User</Link>
									<button onClick={handleLogout}>Logout</button>
								</>
							) : (
								<>
									<button onClick={handlelogin}>Login</button>
									<button onClick={handleSignup}>Signup</button>
								</>
							)}
						</div>
					)}
				</li>

			</ul>
			<div className='Go-Top'>
				<button className={`scroll-to-top ${showButton ? 'show' : ''}`}
					onClick={scrollToTop}><img alt='top-icon' className='scroll-icon' src={require('../Resources/icons/icons8-top-ios-16/icons8-top-32.png')} />
				</button>
			</div>

			{authDiv && (<div className='login-div' ref={loginDivRef}>
				{loginDiv && (
					<div><LoginPage /></div>
				)}

				{signupDiv && (
					<div><SignupPage /></div>
				)}
			</div>)}

		</nav>




	);
};

export default Navbar;