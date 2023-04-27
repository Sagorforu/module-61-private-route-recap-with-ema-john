import React, { useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [error, setError] = useState('');

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.currentPassword.value;
        console.log(email, password, confirm)
        
        if (password !== confirm) {
            setError('Your password did not match')
            return
        } else if (password.length < 6) {
            setError('Password must be 6 characters or longer')
            return
        }
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp} className='form'>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Your Email' required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Your password' required />
                </div>
                <div>
                    <label className='labelCurrent' htmlFor="confirm">Confirm Password</label>
                    <input type="password" name='currentPassword' placeholder='Confirm password' required />
                </div>
                <h4 className='error-text'>{error}</h4>
                <button className=''>Sign Up</button>
                <p className='toggle-paragraph'><small>Already have an account?
                    <Link className='toggle-link' to='/login'>Login</Link></small></p>
                <div className="container">
                    <div className="line"></div>
                    <p className="text">or</p>
                    <div className="line"></div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;