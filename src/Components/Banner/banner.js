import React from 'react';
import banner from '../../images/background.jpg';
import Aside from '../Aside/Aside';
import "./banner.scss";

const Banner = (props) => {

const {isDrop, setIsDrop} = props;
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-3 drop">
                        <Aside isDrop={isDrop} setIsDrop={setIsDrop}/>
                    </div>
                    <div className="col-9">
                        <div className="banner">
                            <img src={banner} alt="banner" className="img" />
                            <div className="content">
                                <div className="content-body">
                                    <h1>iPhone 6 Plus</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam consequat justo</p>
                                    <a className="button">Expore Now</a>
                                </div>
                            </div>
                            <div className="bottom-navs">
                                <a className="bottom-nav" href="#">Daily Deals</a>
                                <a className="bottom-nav" href="#">Laptops</a>
                                <a className="bottom-nav" href="#">Mobiles</a>
                                <a className="bottom-nav" href="#">Clothings</a>
                                <a className="bottom-nav" href="#">Kitchen Appliance</a>
                                <a className="bottom-nav" href="#">Gifts Vouchers</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}



export default Banner
