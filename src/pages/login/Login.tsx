import React from 'react';
import './Login.scss';  // Importing our SASS styles

import { useAppDispatch } from 'app/hooks';
import { selectAuth } from 'app/store/slices/authSlice';
import { login } from 'app/store/slices/authSlice';

function Login() {
    const dispatch = useAppDispatch();

    return (
        <div className="container">
            <form className="login-form">
                <h2 className="login-title">Login</h2>
                <div className="input-group">
                    <label className="label" htmlFor="email">Email</label>
                    <input className="input" type="email" id="email" required />
                </div>
                <div className="input-group">
                    <label className="label" htmlFor="password">Password</label>
                    <input className="input" type="password" id="password" required />
                </div>
                <button className="login-btn" type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
