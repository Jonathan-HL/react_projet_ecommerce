import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Data from '../Data'

const ProduitsDedail = () => {
    const [cartBtn, setCartBtn] = useState("Acheter")
    const allId = useParams();
    const convert = Number(allId.id);
    const allDetail = Data.filter(x => x.id === convert);
    const produits = allDetail[0];
    const handleCart = () => {
            if (cartBtn === "Acheter") {
                    setCartBtn("Annule l'achat");
            }else {
                setCartBtn("Acheter");
            }
    }

    return (
        <div>
            <div className="container mt-5 mb-5 py-5 text-center">
                <div className="row">
                    <div className='col-md-6 d-flex justify-content-center mx-auto product'>
                        <img src={produits.img}  alt={produits.titre} height="400px"   />
                    </div>
                    <div className='col-md-6 mt-5 d-flex flex-column justify-content-center'>
                        <h1 className='display-5 fw-bold'>{produits.titre}</h1>
                        <hr />
                        <h2 className='my-4'>$ {produits.prix}</h2>
                        <p className='lead'>{produits.poids}</p>
                        <button onClick={() => handleCart(produits)} className='btn btn-outline-primary my-5'>{cartBtn}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProduitsDedail;