// ai-stylist-frontend/src/pages/Register.js

import React, { useState } from 'react';
import axios from 'axios';


function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(true); // Track whether user is registering or logging in
  const [registered, setRegistered] = useState(false); // State to track registration status

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      if (isRegistering) {
        // Registration endpoint
        const response = await axios.post('http://localhost:5001/api/register', {
          name,
          email,
          password
        });
        console.log(response.data); // Assuming response.data is 'User registered successfully'
        setRegistered(true); // Update state to indicate registration success
      } else {
        // Login endpoint
        const response = await axios.post('http://localhost:5001/api/login', {
          email,
          password
        });
        console.log(response.data); // Assuming response.data is 'Login successful'
        // Handle success or redirect
      }
    } catch (error) {
      console.error('Authentication error:', error);
      // Handle error state or display error message
    }
  };

  if (registered) {
    window.location.href = '/products';
  }

  return (
    <div>
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
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
      </form>
      <p>
        {isRegistering
          ? "Already have an account? "
          : "Don't have an account? "}
        <button onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Login' : 'Register'}
        </button>
      </p>
    </div>
  );
}

export default Register;
