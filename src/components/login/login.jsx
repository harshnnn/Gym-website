import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from './firebase';
import { Link, useNavigate } from 'react-router-dom';
import './login.css'
import SignupPage from './signup';
import logo from '../../Resources/logo.png';


const LoginPage = () => {

    const navigate = useNavigate();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = JSON.parse(localStorage.getItem('user'));
    const [showSignup,setShowSignup] = useState(false);
    const handleShowSignup = () =>{
        setShowSignup(true);
    }


    const handleSubmit = async (e) => {

        if (user) {
            alert("already logged in");
            navigate('/user');
        }
        e.preventDefault();
        if (user == null) {
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                console.log(userCredential);
                const user = userCredential.user;
                localStorage.setItem('token', user.accessToken);
                localStorage.setItem('user', JSON.stringify(user));
                navigate('/user');

            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className='auth-body'>
            {showSignup === false && (<img src={logo}  alt="" />)}

            {showSignup ===false && (<h1>Login in to your account</h1>)}
            {showSignup ===false && (<form onSubmit={handleSubmit} className='signup-form'>
                <input
                    type="email"
                    placeholder='Your Email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Your Password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit' className='signup-button'>Login</button>
            </form>)}
            {showSignup ===false && (<p className='switch-auth'>Need to Signup? <button onClick={handleShowSignup}>Create Account</button> </p>)}
            {showSignup &&(<SignupPage/>)}
        </div>
    );
};

export default LoginPage;
