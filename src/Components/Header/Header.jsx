import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from './img/logo.svg';
import user from './img/user.svg';
import search from './img/serch.svg';
import like from './img/like.svg';
import cart from './img/cart.svg';
import burgerMenu from './img/burger-menu.svg';
import closeMenu from './img/close-menu.svg';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <div className="header">
            <Link to="/">
                <div className="logo_section">
                    <img src={logo} alt="Logo" />
                    <div className="text_logo">
                        <h1>Furniro</h1>
                    </div>
                </div>
            </Link>

            <div className={`nav ${isMenuOpen ? 'nav_open' : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/ShopPage">Shop</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
            </div>

            <div className="item_section">
                <Link to="/UserPage"><img src={user} alt="User" /></Link>
                <Link to="/"><img src={search} alt="Search" /></Link>
                <Link to="/"><img src={like} alt="Like" /></Link>
                <Link to="/Cart_page"><img src={cart} alt="Cart" /></Link>
                <img src={isMenuOpen ? closeMenu : burgerMenu} alt="Menu" className="burger_menu_icon" onClick={toggleMenu} />
            </div>
        </div>
    );
}

export default Header;
