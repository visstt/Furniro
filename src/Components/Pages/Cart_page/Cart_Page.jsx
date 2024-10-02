import React from 'react';

const CartPage = ({ cart }) => {
  if (!cart.length) {
    return <p>Корзина пуста</p>;
  }

  return (
    <div className="cart-page">
      <h1>Корзина</h1>
      {cart.map((product, index) => (
        <div key={index} className="cart-item">
          <img src={product.photo} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Цена: {product.price} руб.</p>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
