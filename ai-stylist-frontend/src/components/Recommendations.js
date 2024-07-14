// ai-stylist-frontend/src/components/Recommendations.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Recommendations = ({ preferences }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.post('http://localhost:5001/api/recommendations', {
          preferences,
        });
        setRecommendations(response.data);
      } catch (error) {
        console.error('Error fetching recommendations:', error.message);
      }
    };

    fetchRecommendations();
  }, [preferences]);

  return (
    <div>
      <h2>Personalized Recommendations</h2>
      <ul>
        {recommendations.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
