import React from 'react';
import fg1 from '../../img/1.jpg'
import fg2 from '../../img/2.jpg'
import fg4 from '../../img/4.jpg'

const Card = () => {
    return (
        <div className='allcard d-flex '>
            <div className='cardz'>
                <img src={fg1} alt="fg1" />
                <div className='move-btn'>
                <button className='btn-card'>COMING SOON</button>
                </div>
            </div>

            <div className='cardz'>
                <img src={fg2} alt="fg2" />
                <div className='move-btn'>
                <button className='btn-card'>COMING SOON</button>
                </div>
            </div>

            <div className='cardz'>
                <img src={fg4} alt="fg4" />
                <div className='move-btn'>
                <button className='btn-card'>COMING SOON</button>
                </div>
            </div>
        </div>
    );
};

export default Card;