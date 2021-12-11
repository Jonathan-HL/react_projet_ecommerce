import React from 'react';
import Card from '../components/home/Card';
import Carouselle from '../components/home/Carouselle';
import FondImages from '../components/home/FondImages';
import Product from '../components/home/Product';

const Home = () => {
    return (
        <div className='home-app'>
            <Carouselle />
            <Card />
            <Product />
            <FondImages />
        </div>
    );
};

export default Home;