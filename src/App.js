import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main_page from './components/Main_page/Main_page';
import Shop_page from "./components/Shop_page/Shop_page";
import Cart_page from './components/Cart_page/Cart_Page';
function App() {
  return (
<Router>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Main_page />}/>
          <Route path="/Shop_page" element={<Shop_page/>}/>
          <Route path="/Cart_page" element={<Cart_page/>}/>
        </Routes>
      </div>
</Router>


  );
}

export default App;
