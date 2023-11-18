import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from './firebase';
import { Link, useNavigate } from 'react-router-dom';

import './login.css'


const SignupPage = () => {

    const navigate = useNavigate();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

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
            <h1>Signup page</h1>
            <form onSubmit={handleSubmit} className='signup-form'>
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
            </form>
            <p>Need to Login? <Link to="/login">Login </Link> </p>
        </div>
    );
};

export default SignupPage;
