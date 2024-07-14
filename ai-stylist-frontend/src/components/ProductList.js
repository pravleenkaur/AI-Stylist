// src/components/ProductList.js

import React from 'react';

const ProductList = ({ products }) => {
  console.log("we come here", typeof(products));
  // Check if products is not an array or is empty
  if (!Array.isArray(products) || products.length === 0) {
    return <div>No recommended products available.</div>;
  }
  console.log("hey");
  return (
    <div>
      <h2>Recommended Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <img src={product.image_url} alt={product.name} style={{ maxWidth: '200px' }} />
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>Size: {product.size}</p>
            {/* Add more details or styling as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
