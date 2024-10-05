import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import './ShopPage.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Подключаем стили
import Navbar from './Navbar/Navbar';
import Section_inf from './Section_inf/Section_inf';

const ShopPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);  // Доступ к состоянию корзины
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/getProducts')  // Получаем товары с сервера
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Ошибка загрузки данных:', error));
  }, []);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });  // Добавляем товар в корзину
    
    // Уведомление о добавлении товара в корзину
    toast.success(`${product.name} добавлен в корзину!`, {

      autoClose: 2000,  // Уведомление исчезнет через 2 секунды
    });
    
  };

  return (
    <div className="shop-page">
      <Navbar/>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />  
        ))}
      </div>
      <Section_inf/>
      <ToastContainer />  
    </div>
  );
};

export default ShopPage;
