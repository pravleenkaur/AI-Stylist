// ai-stylist-frontend/src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [preferences, setPreferences] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const handleRegister = async () => {
    const preferencesArray = preferences.split(',').map(Number);
    try {
      const response = await axios.post('http://localhost:5001/api/register', {
        name,
        preferences: preferencesArray,
      });
      console.log('User registered successfully:', response.data);

      const recommendationResponse = await axios.post('http://localhost:5001/api/recommend', {
        preferences: preferencesArray,
      });
      console.log('Recommendation:', recommendationResponse.data);
      setRecommendation(recommendationResponse.data); // Set recommendation state
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Preferences (comma-separated numbers)"
        value={preferences}
        onChange={(e) => setPreferences(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>

      {recommendation && (
        <div>
          <h3>Recommendation:</h3>
          <p>{recommendation}</p>
        </div>
      )}
    </div>
  );
}

export default Register;
