import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../Redux/cartActions';
import '../Cart_page/Cart_page.css';

const CartPage = () => {
  const cart = useSelector((state) => state.cart.cart); // Получаем состояние корзины
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId)); // Отправляем действие удаления
  };

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
          <button onClick={() => handleRemove(product.id)}>Удалить</button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;