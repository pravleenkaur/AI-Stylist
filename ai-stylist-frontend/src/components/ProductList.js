import React from 'react';
import './ProductList.css';

const ProductList = ({ products }) => {
  if (!Array.isArray(products) || products.length === 0) {
    return <div className="product-list-container">No recommended products available.</div>;
  }

  return (
    <div className="product-list-container">
      <h2>Recommended Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <img src={product.image_url} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">Price: ${product.price}</p>
            <p className="category">Category: {product.category}</p>
            <p>Size: {product.size}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
