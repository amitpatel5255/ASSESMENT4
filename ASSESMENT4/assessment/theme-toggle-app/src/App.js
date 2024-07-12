// src/App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import Login from './Login';
import './App.css';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <Router>
      <div className={`App ${theme}`}>
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default App;
