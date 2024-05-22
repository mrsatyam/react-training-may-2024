import React from 'react';

const Product = ({ match }) => {
  const { id } = match.params;

  return (
    <div>
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
    </div>
  );
};

export default Product;