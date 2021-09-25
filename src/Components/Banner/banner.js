import React from 'react';
import banner from '../../images/background.jpg';
import Aside from '../Aside/Aside';
import "./banner.scss";
import { Link } from 'react-router-dom';


const Banner = (props) => {

const {isDrop, setIsDrop,bannerContent} = props;
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
                                    <h1>{bannerContent.title}</h1>
                                    <p>{bannerContent.description}</p>
                                    <Link className="button">{bannerContent.button}</Link>
                                </div>
                            </div>
                            <div className="bottom-navs">
                                <Link className="bottom-nav" to="#">Daily Deals</Link>
                                <Link className="bottom-nav" to="#">Laptops</Link>
                                <Link className="bottom-nav" to="#">Mobiles</Link>
                                <Link className="bottom-nav" to="#">Clothings</Link>
                                <Link className="bottom-nav" to="#">Kitchen Appliance</Link>
                                <Link className="bottom-nav" to="#">Gifts Vouchers</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}



export default Banner
