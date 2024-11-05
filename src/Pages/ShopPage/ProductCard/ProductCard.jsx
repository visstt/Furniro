import React from "react";
import "../../ShopPage/ShopPage.css";
const ProductCard = ({ product, addToCart }) => (
  <div className="product-card">
    <img src={product.imageUrl} alt={product.name} className="product-image" />
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>Цена: {product.price} ₽</p>
    <button onClick={() => addToCart(product)}>Добавить в корзину</button>
  </div>
);

export default ProductCard;
