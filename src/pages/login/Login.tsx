import React from 'react';
import './Login.scss';  // Importing our SASS styles

import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { useAppDispatch } from 'store/hooks';
import { LoginPayload, login } from 'store/slices/authSlice';

import { isValidEmail } from 'utils/validators';

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page refresh
  
    // Trim inputs
    setEmail(email.trim());
    setPassword(password.trim());

    // Compose paylaod
    const payload: LoginPayload = {
      email: email,
      password: password,
    };

    // Dispatch 'login' action
    dispatch(login(payload));
    alert("Login sucessfully!");

    // Navigate to home page
    navigate('/admin');
  }


  const isFormValid = email.trim() !== '' && password.trim() !== '' && isValidEmail(email);


  return (
    <div className="container">
      <form className="login-form">
        <h2 className="login-title">Login</h2>
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
