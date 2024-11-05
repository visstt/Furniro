import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard/ProductCard";
import { Link } from "react-router-dom";
import "./ShopPage.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Подключаем стили
import Navbar from "./Navbar/Navbar";
import Section_inf from "./Section_inf/Section_inf";

const ShopPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products/getProducts") // Запрос на получение списка продуктов
      .then((response) => response.json())
      .then((data) => {
        // Добавляем полный URL для изображений
        const productsWithImageUrl = data.map((product) => ({
          ...product,
          imageUrl: `http://localhost:8080/products/images/${product.photo}`, // URL к фото на сервере
        }));
        setProducts(productsWithImageUrl);
      })
      .catch((error) => console.error("Ошибка загрузки данных:", error));
  }, []);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success(`${product.name} добавлен в корзину!`, {
      autoClose: 2000,
    });
  };

  return (
    <div className="shop-page">
      <Navbar />
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      <Section_inf />
      <ToastContainer />
    </div>
  );
};

export default ShopPage;
