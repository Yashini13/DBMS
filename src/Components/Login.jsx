import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css'
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()
  const handleLogin = () => {
    // Here you can implement your authentication logic
    // For simplicity, let's assume the username is 'admin' and the password is 'password'
    if (username === 'admin' && password === 'password') {
      // Successful login
      setIsLoggedIn(true);
    } else {
      // Incorrect login, show error message
      setError('Incorrect username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <div className='container'>
      {isLoggedIn ? (
        navigate("/users")
      ) : (
        <div >
          <h2>Inventory Admin Login Page</h2>
          <form
          className='form-container'
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div>
              <label>Admin Id</label>
              <input
                type="text"
                placeholder='Enter Admin Id'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                placeholder='password'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
