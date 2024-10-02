import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import './ShopPage.css';

const ShopPage = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/getProducts')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Проверьте, приходят ли корректные данные с картинками
        setProducts(data);
      })
      .catch(error => console.error('Ошибка загрузки данных:', error));
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];  // Обновляем корзину, добавляем товар
    setCart(updatedCart);  // Обновляем состояние корзины
    alert(`${product.name} добавлен в корзину`);
  };
  
  return (
    <div className="shop-page">
      <h1>Магазин</h1>
      <Link to="/Cart_page">Перейти в корзину</Link>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
