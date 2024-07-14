// src/pages/ProductsPage.js

import React, { useState } from 'react';
import PreferencesForm from '../components/PreferencesForm';
import ProductList from '../components/ProductList'; // Assuming you have a ProductList component
import axios from 'axios';

const ProductsPage = () => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  const handlePreferencesSubmit = async (preferences) => {
    try {
      // Ensure preferences is an array or another iterable structure
      const response = await axios.post('http://localhost:5001/api/recommendations', {
        preferences: [preferences], // Wrap preferences in an array if it's a single object
      });
      // Update state with recommended products
      setRecommendedProducts(response.data);
    } catch (error) {
      console.error('Error fetching recommendations:', error.message);
      // Handle error state or display error message
    }
  };
  console.log("recommendedProducts", recommendedProducts);
  return (
    <div>
      <h1>Products Page</h1>
      <PreferencesForm onSubmit={handlePreferencesSubmit} />
      <ProductList products={recommendedProducts} /> {/* Pass products to ProductList component */}
    </div>
  );
};

export default ProductsPage;
