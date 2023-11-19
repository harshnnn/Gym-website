import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from './firebase';
import { Link, useNavigate } from 'react-router-dom';
import './login.css'
import LoginPage from './login';
import logo from '../../Resources/logo.png'

const SignupPage = () => {

    const navigate = useNavigate();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [showLogin,setShowLogin] = useState(false);

    const handleShowLogin = () =>{
        setShowLogin(true);
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/user');
        } catch(error){
            console.log(error);
        }
    }

    return (
        <div className='auth-body'>
            {showLogin === false && (<img src={logo}  alt="" />)}
            {showLogin === false &&(<h1>Create Your Account</h1>)}
            {showLogin === false &&(<form onSubmit={handleSubmit} className='signup-form'>
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
                <button type='submit' className='signup-button'>Signup</button>
            </form>)}
            {showLogin === false && (<p className='switch-auth'>Need to Login? <button onClick={handleShowLogin}>Login </button> </p>)}
            {showLogin && (<LoginPage/>)}
        </div>
    );
};

export default SignupPage;
