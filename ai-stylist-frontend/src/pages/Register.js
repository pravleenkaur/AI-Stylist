import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(true);
  const [registered, setRegistered] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isRegistering) {
        const response = await axios.post('http://localhost:5001/api/register', { name, email, password });
        setRegistered(true);
      } else {
        const response = await axios.post('http://localhost:5001/api/login', { email, password });
        // Handle success or redirect
      }
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  if (registered) {
    window.location.href = '/products';
  }

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>{isRegistering ? 'Register' : 'Login'}</h2>
        <form onSubmit={handleSubmit}>
          {isRegistering && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className='button1' type="submit">{isRegistering ? 'Register' : 'Login'}</button>
        </form>
        <p>
          {isRegistering ? "Already have an account? " : "Don't have an account? "}
          <button onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? 'Login' : 'Register'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
