import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.jpg'

const Navigation = () => {
    return (
        <nav className='nav-app'>
        <div className='d-flex'>
            <img src={logo} alt="logodbz" />
            <div className='lien'>
                    <Link to="/">Home</Link>
                    <Link to="/produits">Produits</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
            </div>
            <div className='logos'>
            <i className="far fa-heart"></i>
            <span>|</span>
            <i className="fas fa-shopping-basket"></i>
            </div>
        </div>
        </nav>
    );
};

export default Navigation;