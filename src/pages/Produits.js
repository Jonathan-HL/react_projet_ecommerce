import React from 'react';
import {NavLink} from 'react-router-dom'
import Data from '../Data'

const Produits = () => {

    const cardItem = (item) => {
        return(
            <div className='card my-5 py-4' key={item.id} style={{width:"20rem"}}>
                <img src={item.img} className='card-img-top' alt={item.titre} />
                <div className='card-body text-center'>
                    <h5 className='card-title'>{item.titre}</h5>
                    <p className='lead'>$ {item.prix}</p>
                    <NavLink to={`/produits/${item.id}`} className="btn btn-outline-primary">Detail</NavLink>
                </div>
            </div>
        )
    }

    return (
        <div className='produits-app'>
            <div className='banner-produits'>
                <h1>Product</h1>
                <p>New Arrival Figurine Collection</p>
            </div>
            <div className="container">
                <div className="row">
                    {Data.map(cardItem)}
                </div>
            </div>
        </div>
    );
};

export default Produits;