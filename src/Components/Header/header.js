import React, { useState , useEffect} from 'react';
import logo from '../../images/logo.jpg';
import search from '../../images/search.png';
import Cart from "../Cart/Cart";
import '../Cart/cart.scss';
import './header.scss';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const Header = ( props) => {

    const { cart,isDrop,setIsDrop } = props;

    const [isShow, setIsShow] = useState(false);
    const [isCart, setIsCart] = useState(false);

    return (

        <header>
            <div className="container">
                <div className="header-row header-content">
                    <div className="col-3">
                        <Link className="logo"><img src={logo} alt="logo" /></Link>
                    </div>
                    <div className="col-6">
                        <form>
                            <input type="search" name="search" placeholder="Enter your search term..." />
                            <button className="search-btn" type="submit"><img src={search} /></button>
                        </form>
                    </div>
                    <div className="col-2">
                        <ul className={isShow ? "nav-links nav-show" : "nav-links"}>
                            <li className="close"><img src={logo} alt="logo" /><span onClick={() => setIsShow(false)}>×</span></li>

                            <li><a href="#">
                                <div className="icon"><i className="icon-help"></i></div>
                                <div className="name">Help</div></a>
                           </li>
                            <li><a href="#">
                                <div className="icon"><i className="icon-track"></i></div>
                                <div className="name">Track</div></a>
                           </li>
                            <li><a href="#">
                                <div className="icon"><i className="icon-account"></i><i className="icon-dropdown"></i></div>
                                <div className="name">Account</div></a>
                           </li>
                            <li><a className="cart-btn"
                             onClick={() => setIsCart(!isCart)}
                             >
                                <div className="icon"><i className="icon-cart" ></i>
                                    <div className="cart-count">
                                    {cart.length}
                                   </div></div>
                                <div className="name">My Cart</div>


                            </a></li>
                        </ul>

                        <div className="menu-bar" onClick={() => setIsShow(!isShow)}>
                            {isShow ? ""
                                : (<span className="menu"></span>)}

                        </div>
                    </div>
                </div>

                <div className="navigation">
                    <div className="header-row">
                        <div className="col-3">
                            <div className="side-nav">
                                <h6 className="side">Shop by Categories <i className="icon-dropdown"  onClick={() => setIsDrop(!isDrop)}></i></h6>
                                
                            </div>
                        </div>
                        <div className="col-7">
                            <div className={isShow ? "sub-navs active" : "sub-navs"}>
                                <Link className="sub-navs-nav" to="#">Our Stores</Link>
                                <Link className="sub-navs-nav" to="#">Gift Cards</Link>
                                <Link className="sub-navs-nav" to="#">Season Sale</Link>
                                <Link className="sub-navs-nav" to="#">Best Deals</Link>
                                <Link className="sub-navs-nav" to="#">Login</Link>
                                <Link className="sub-navs-nav" to="#">Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={isCart ? "cart-overlay show" : "cart-overlay"}>


                <div className={isCart ? "cart-products show" : "cart-products"}>
                    <span className="close-cart" onClick={() => setIsCart(!isCart)}>X</span>
                    <Cart />
                </div>
            </div>

        </header>


    );
}

const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    };
  };
  
  export default connect(mapStateToProps)(Header);
  