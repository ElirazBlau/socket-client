import React from 'react'
import { useState } from 'react';

export default function Login() {

    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Basic validation
    if (!username || !password) {

      setError('Please enter both username and password');
      return;
    }
    // Here you can perform login logic like sending data to backend or validating with mock data
    // For simplicity, I'll just log the username and password
    console.log('Username:', username);
    console.log('Password:', password);
    // Clear input fields
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <div className="App">
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

