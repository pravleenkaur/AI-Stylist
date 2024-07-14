// src/components/PreferencesForm.js
import React, { useState } from 'react';

const PreferencesForm = ({ onSubmit }) => {
  const [gender, setGender] = useState('');
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [category, setCategory] = useState('');
  // Add other filters as needed

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare preferences object to send to parent component
    const preferences = {
      gender,
      color,
      size,
      category,
      // Add other filters here
    };
    onSubmit(preferences); // Pass preferences to parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Preferences</h2>
      
      <label>
        Gender:
        <input
          type="radio"
          value="male"
          checked={gender === 'male'}
          onChange={() => setGender('male')}
        />
        Male
        <input
          type="radio"
          value="female"
          checked={gender === 'female'}
          onChange={() => setGender('female')}
        />
        Female
        {/* Add more gender options as needed */}
      </label>
      
      <br />
      
      <label>
        Color:
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Enter preferred color"
        />
      </label>
      
      <br />
      
      <label>
        Size:
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="">Select size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          {/* Add more size options as needed */}
        </select>
      </label>
      
      <br />
      
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter preferred category"
        />
      </label>
      
      {/* Add more filters based on your e-commerce needs */}
      
      <br />
      
      <button type="submit">Analyze</button>
    </form>
  );
};

export default PreferencesForm;
