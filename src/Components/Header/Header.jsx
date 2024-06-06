import './Header.css';
import logo from './img/logo.svg';
import user from './img/user.svg';
import search from './img/serch.svg';
import like from './img/like.svg';
import cart from './img/cart.svg';
import { Link } from 'react-router-dom'
function Header(){

    return(
        <div className="header">
            <Link to="/" >
                <div className="logo_section">
                <img src={logo} alt="" />
                <div className="text_logo">
                <h1> Furniro</h1>
                </div>
            </div>
            </Link>


            <div className="nav">
                <Link to={'/'}>Home</Link>
                <Link to={'/ShopPage'}>Shop</Link>
                <Link to={'/'}>About</Link>
                <Link to={'/'}>Contact</Link>
            </div>

            <div className="item_section">
            <Link to={"/UserPage"}><img src={user} alt="" /></Link>
            <Link to={"/"}><img src={search} alt="" /></Link>
            <Link to={"/"}><img src={like} alt="" /></Link>
            <Link to={"/Cart_page"}><img src={cart} alt="" /></Link>
            </div>
        </div>
    )
    
}

export default Header;