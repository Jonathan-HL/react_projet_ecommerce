import React from 'react';
import img3 from '../../img/img-new/3.jpg'
import img12 from '../../img/img-old/12.jpg'
import img5 from '../../img/img-old/5.jpg'
import img6 from '../../img/img-old/6.jpeg'

const Sale = () => {
    return (
        <>
        <div className='sale-app'>
            <div>
                <img src={img3} alt="img3" />
                <p>aze</p>
                <p>sss</p>
            </div>
            <div>
            <img src={img12} alt="img12" />
                <p>sasasa</p>
                <p>sasasa</p>
            </div>
            <div>
            <img src={img5} alt="img5" />
                <p>sasa</p>
                <p>sasa</p>
            </div>
            <div>
                <img src={img6} alt="img6" />
                <div>
                    <p>sasas</p>
                    <span>sasa</span>
                </div>
            </div>
        </div>
    </>
    );
};

export default Sale;