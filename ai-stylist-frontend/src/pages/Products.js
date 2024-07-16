import React, { useState } from 'react';
import PreferencesForm from '../components/PreferencesForm.js';
import ProductList from '../components/ProductList.js'; // Assuming you have a ProductList component
import axios from 'axios';
import './Products.css'; // Import the CSS file

const ProductsPage = () => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  const handlePreferencesSubmit = async (preferences) => {
    try {
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

  return (
    <div className="products-page-container">
      <h1 class="product-page-heading">Products Page</h1>
      <PreferencesForm onSubmit={handlePreferencesSubmit} />
      <ProductList products={recommendedProducts} /> {/* Pass products to ProductList component */}
    </div>
  );
};

export default ProductsPage;
