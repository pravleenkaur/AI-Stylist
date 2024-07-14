// ai-stylist-frontend/src/pages/ProductDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/PreferencesForm';

const ProductDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Detail</h1>
      <ProductDetail id={id} />
    </div>
  );
};

export default ProductDetailPage;
