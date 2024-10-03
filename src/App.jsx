import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from './Pages/ShopPage/ShopPage'
import CartPage from "./Pages/Cart_page/Cart_Page";
import UserPage from "./Pages/UserPage/UserPage";
function App() {

  const [cart, setCart] = useState([]);  // Инициализация cart как пустого массива

  return (
<Router>
      <div className="container">
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/ShopPage" element={<ShopPage cart={cart} setCart={setCart} />} />
          <Route path="/Cart_page" element={<CartPage cart={cart} />} />
          <Route path="/UserPage" element={<UserPage/>}/>
        </Routes>
        <Footer/>
      </div>
</Router>


  );
}

export default App;
