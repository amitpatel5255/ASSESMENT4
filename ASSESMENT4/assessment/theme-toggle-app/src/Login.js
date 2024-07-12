// src/Login.js
import React, { useState, useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './Login.css';

const Login = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className={`login-container ${theme}`}>
      <button onClick={toggleTheme} className="theme-toggle">
        Toggle Theme
      </button>
      <form onSubmit={handleLogin} className="login-form">
        <h1>Login</h1>
        <div className="form-group">
          <label>Username</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
