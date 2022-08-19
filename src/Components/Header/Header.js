import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header className="header-container">
            <nav className="menu-list">
                <i className="fa-solid fa-gem"></i>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About Us</Link>
                <Link to={'/contact'}>Contact Us</Link>
                <div className="cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <Link to={'/cart'}>Cart</Link>
                </div>
                <Link to={'/sign-up'}>Sign in</Link>
            </nav> 
        </header>
    );
}

export default Header;