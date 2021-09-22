import React from 'react'
import "./footer.scss"
import Trust from "../../images/trustpay.jpg";
import ScrollBar from "../../images/scroll up.jpg";
import IOS from "../../images/dwn_app.jpg";
import PlayStore from "../../images/dwn_play.jpg";
import Windows from "../../images/dwn_win.jpg";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">

                <div className="footer-top">
                    <div className="row">
                        <div className="column">
                        <div className="download-app">
                        <div className="footer-content">
                             
                               <h6 className="footer-headings">DOWNLOAD APP</h6>
                               </div>
                               <ul class="links">
                        <li><Link to ="#" onClick={e => e.preventDefault()}><img src={ IOS }/></Link></li>
                         <li><Link to ="#" onClick={e => e.preventDefault()}><img src={ Windows }/></Link>
                         </li>
                         <li> <Link to ="#" onClick={e => e.preventDefault()}><img src={ PlayStore }/></Link></li>
                              </ul>
                              </div>
                               
                            </div>
                            <div className="column">
                           
                            <div className="information">
                            <div className="footer-content">
                               <h6 className="footer-headings">INFORMATION</h6>
                              </div>
                               <ul class="links">
                        <li><a href="javascript:void(0)">About us</a></li>
                        <li><a href="javascript:void(0)">Our office</a></li>
                         <li><a href="javascript:void(0)">Delivery</a></li>
                         <li><a href="javascript:void(0)">Store</a></li>
                        <li><a href="javascript:void(0)">Guarantee</a></li>
                         <li><a href="javascript:void(0)">Buy gift cards</a></li>
                         <li><a href="javascript:void(0)">Returns</a></li>
                              </ul>
                            
                                </div>
                            </div>
                            <div className="column">
                            <div className="policy-info">
                            <div className="footer-content">
                               <h6 className="footer-headings">POLICY INFO</h6>
                                </div>
                                <ul class="links">
                        <li><a href="javascript:void(0)">Privacy Policy</a></li>
                        <li><a href="javascript:void(0)">Terms of Sale</a></li>
                         <li><a href="javascript:void(0)">Terms of Use</a></li>
                         <li><a href="javascript:void(0)">Report Abuse</a></li>
                        <li><a href="javascript:void(0)">CSR Policy</a></li>
                         <li><a href="javascript:void(0)">T&amp;C Adv./Media</a></li>
                         <li><a href="javascript:void(0)">FAQ</a></li>
                              </ul>
                                </div>
                            </div>
                            <div className="column">
                            <div className="stores">
                            <div className="footer-content">
                           
                               <h6 className="footer-headings">WHAT IN STORES</h6>
                                </div>
                                <ul class="links">
                        <li><a href="javascript:void(0)">Women</a></li>
                        <li><a href="javascript:void(0)">Men</a></li>
                         <li><a href="javascript:void(0)">Accessories</a></li>
                         <li><a href="javascript:void(0)">Buy Gift Vouchers</a></li>
                        <li><a href="javascript:void(0)">Electronics</a></li>
                              </ul>
                            </div>
                            </div>
                            <div className="column">
                           
                            <div className="edeals-business">
                            <div className="footer-content">
                               <h6 className="footer-headings">EDEALS BUSINESS</h6>
                                </div>
                                <ul class="links">
                        <li><a href="javascript:void(0)">Edeals Gift Voucher</a></li>
                        <li><a href="javascript:void(0)">Sell on Edeals</a></li>
                         <li><a href="javascript:void(0)">Media Entities</a></li>
                         <li><a href="javascript:void(0)">Be an affiliate</a></li>
                        <li><a href="javascript:void(0)">Deal of the Day</a></li>
                        <li><a href="javascript:void(0)">Edeals Launchpad</a></li>
                              </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="footer-middle">
                        <div className="row">
                            <div className="col-2">
                            <div className="footer-content">
                                <div className="payment">

                                    <h6 className="footer-headings">100% SECURE PAYMENTS</h6>

                                    <p>All major credit &amp; debit cards accepted</p>
                                    <ul className="payment-cards">
                                        <li className="pay"><a href="#" title="Paypal" target="_blank"><i className="icon-paypal" ></i></a></li>
                                        <li className="pay"><a href="#" title="Visa" target="_blank"><i className="icon-visa"></i> </a></li>
                                        <li className="pay"><a href="#" title="American" target="_blank"><i className="icon-american"></i></a></li>
                                        <li className="pay"><a href="#" title="Master Card" target="_blank"><i className="icon-mastercard"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-2">
                            <div className="footer-content">
                                <div className="social">
                                <div className="heading-space">
                                    <h6 className="footer-headings">CONNECT WITH US</h6>
                                </div>
                                <ul className="soc-media">
                                    <li className="soc-icon"><i className="icon-facebook" ></i></li>
                                    <li className="soc-icon"><i className="icon-twitter"></i> </li>
                                    <li className="soc-icon"><i className="icon-google-plus"></i></li>
                                    <li className="soc-icon"><i className="icon-linkedin"></i></li>
                                    <li className="soc-icon"><i className="icon-pinterest"></i></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-4">
                            <div className="footer-content">
                                <div className="trustpay">
                                    <a href="#default" className="logo"><img src={Trust} />
                                        <div className="trust-logo">
                                            TrustPay
                                        </div>
                                    </a>
                                    <span>100% Moneyback Guarantee &amp; 7 Days Return Policy&gt;&gt;</span>

                                </div>
                            </div>
                            </div>
                            <div className="col-1">
                            <div className="footer-content">
                                    <img src={ScrollBar} alt="Scroll Up"/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>2021 edeals - All right reserved.</span>
                </div>
            
        </footer>
    )
}

export default Footer
