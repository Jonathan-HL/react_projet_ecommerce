import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  Badge  from '@material-ui/core/Badge';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import logo from '../img/logo.jpg'

const Navigation = () => {
    const like = useNavigate()
    const panier = useNavigate()
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
                <FavoriteBorderOutlinedIcon onClick={()=>like("/like")} className='icon-coeur'  color="action" sx={{ fontSize: 30 }}  />
            <span>|</span>
            <Badge badgeContent={3} color="secondary">
                    <ShoppingBagOutlinedIcon onClick={()=>panier("/panier")} className='icon-shop'  color="action" sx={{ fontSize: 30 }}  />
            </Badge>
            </div>
        </div>
        </nav>
    );
};

export default Navigation;