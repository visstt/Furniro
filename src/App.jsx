import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import HomePage from "./Components/Pages/HomePage/HomePage";
import ShopPage from './Components/Pages/ShopPage/ShopPage'
import Cart_page from "./Components/Pages/Cart_page/Cart_Page";
import UserPage from "./Components/Pages/UserPage/UserPage";
function App() {
  return (
<Router>
      <div className="container">
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/ShopPage" element={<ShopPage/>}/>
          <Route path="/Cart_page" element={<Cart_page/>}/>
          <Route path="/UserPage" element={<UserPage/>}/>
        </Routes>
        <Footer/>
      </div>
</Router>


  );
}

export default App;
