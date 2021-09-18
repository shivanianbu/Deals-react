import React from 'react';
import offer from '../images/women-cus.jpg';

const Womencosmetics = () => {
    return (
        <section>
            <div className="container">
                <div className="offer-content">
                    <img src={offer} alt="Offer" className="img" />
                    <div className="left-content">
                        <h2>50% <span>OFF ON</span></h2>
                        <h3>WOMEN COSMETIC</h3>
                        <a className="button" href="#">Shop Now</a>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Womencosmetics





