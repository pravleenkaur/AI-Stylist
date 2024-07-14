// src/components/ShoppingInputForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ShoppingInputForm = () => {
  const [formData, setFormData] = useState({ preferences: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/shopping', formData);
      // Handle response for product suggestions
    } catch (error) {
      alert('Failed to submit shopping preferences');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea name="preferences" value={formData.preferences} onChange={handleChange} placeholder="Enter your shopping preferences" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ShoppingInputForm;
