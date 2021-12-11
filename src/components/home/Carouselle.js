import React from 'react';

const Carouselle = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active carousel3">
                        <div className='home-txt'>
                        <h1>Top of Power</h1>
                        <p>New collection</p>
                        <button className='btn-home'>SHOP NOW</button>
                        </div>
                    </div>
                    <div className="carousel-item carousel3">
                        <div className='home-txt'>
                        <h1>Top of Power</h1>
                        <p>New collection</p>
                        <button className='btn-home'>SHOP NOW</button>
                        </div>
                    </div>
                    <div className="carousel-item carousel3">
                        <div className='home-txt'>
                        <h1>Top of Power</h1>
                        <p>New collection</p>
                        <button className='btn-home'>SHOP NOW</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    );
};

export default Carouselle;