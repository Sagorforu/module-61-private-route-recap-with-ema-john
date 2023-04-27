import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form className='form'>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Your Email' required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Your password' required />
                </div>
                <button className=''>Login</button>
                <p className='toggle-paragraph'><small>New to Ema-john?
                    <Link className='toggle-link' to='/signup'>Create New Account</Link></small></p>
                <div className="container">
                    <div className="line"></div>
                    <p className="text">or</p>
                    <div className="line"></div>
                </div>
            </form>
        </div>
    );
};

export default Login;