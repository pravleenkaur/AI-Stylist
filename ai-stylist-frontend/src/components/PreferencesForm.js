import React, { useState } from 'react';
import './PreferencesForm.css';

const PreferencesForm = ({ onSubmit }) => {
  const [gender, setGender] = useState('');
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const preferences = { gender, color, size, category };
    onSubmit(preferences);
  };

  return (
    <div className="preferences-container">
        <div className="preferences-form-background">
            <form className="preferences-form" onSubmit={handleSubmit}>
                <h2 className="preferences-form-title">Preferences</h2>
                
                <label className="preferences-form-label">
                    Gender:
                    <input
                        type="radio"
                        value="male"
                        checked={gender === 'male'}
                        onChange={() => setGender('male')}
                        className="preferences-form-radio"
                    />
                    Male
                    <input
                        type="radio"
                        value="female"
                        checked={gender === 'female'}
                        onChange={() => setGender('female')}
                        className="preferences-form-radio"
                    />
                    Female
                </label>
                
                <label className="preferences-form-label">
                    Color:
                    <input
                        type="text"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        placeholder="Enter preferred color"
                        className="preferences-form-input-text"
                    />
                </label>
                
                <label className="preferences-form-label">
                    Size:
                    <select value={size} onChange={(e) => setSize(e.target.value)} className="preferences-form-select">
                        <option value="">Select size</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </label>
                
                <label className="preferences-form-label">
                    Category:
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="Enter preferred category"
                        className="preferences-form-input-text"
                    />
                </label>
                
                <button type="submit" className="preferences-form-button">Analyze</button>
            </form>
        </div>
    </div>
  );
};

export default PreferencesForm;
