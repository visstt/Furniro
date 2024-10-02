import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.photo} alt={product.name} /> 
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Купить</button>
    </div>
  );
};

export default ProductCard;
