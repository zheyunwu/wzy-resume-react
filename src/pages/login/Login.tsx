import React from 'react';
import './Login.scss';  // Importing our SASS styles

import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { LoginPayload, loginEmailPassword, selectAuth } from 'store/slices/authSlice';

import { isValidEmail } from 'utils/validators';

function Login() {
  const authState = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page refresh
  
    // Trim inputs
    setEmail(email.trim());
    setPassword(password.trim());

    // Compose login paylaod
    const payload: LoginPayload = {
      email: email,
      password: password,
    };

    // Dispatch 'login' action
    await dispatch(loginEmailPassword(payload));

    // Check auth status
    
    if (authState.status === 'loggedIn') {
      navigate('/admin');
    } else if (authState.status === 'failed') {
      alert(authState.error);
    }
  }


  const isFormValid = email.trim() !== '' && password.trim() !== '' && isValidEmail(email);


  return (
    <div className="container">
      <form className="login-form">
        <h2 className="login-title">Login</h2>
        {/* {authState.status}
        <h2>HAHAHA</h2>
        {authState.error} */}
        <div className="input-group">
          <label className="label" htmlFor="email">Email</label>
          <input
            className="input"
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="label" htmlFor="password">Password</label>
          <input
            className="input"
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="login-btn"
          type="submit"
          disabled={!isFormValid}
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
