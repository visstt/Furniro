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
                <Link to={'/Shop_page'}>Shop</Link>
                <Link to={'/'}>About</Link>
                <Link to={'/'}>Contact</Link>
            </div>

            <div className="item_section">
            <a href="#"><img src={user} alt="" /></a>
            <a href="#"><img src={search} alt="" /></a>
            <a href="#"><img src={like} alt="" /></a>
            <a href="#"><img src={cart} alt="" /></a>
            </div>
        </div>
    )
    
}

export default Header;