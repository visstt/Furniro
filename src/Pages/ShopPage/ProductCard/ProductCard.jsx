import React from 'react';
import '../../ShopPage/ShopPage.css'
const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.photo} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to cart</button> 
    </div>
  );
};

export default ProductCard;
