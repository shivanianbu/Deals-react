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
                        <li><Link to="#">About us</Link></li>
                        <li><Link to="#">Our office</Link></li>
                         <li><Link to="#">Delivery</Link></li>
                         <li><Link to="#">Store</Link></li>
                        <li><Link to="#">Guarantee</Link></li>
                         <li><Link to="#">Buy gift cards</Link></li>
                         <li><Link to="#">Returns</Link></li>
                              </ul>
                            
                                </div>
                            </div>
                            <div className="column">
                            <div className="policy-info">
                            <div className="footer-content">
                               <h6 className="footer-headings">POLICY INFO</h6>
                                </div>
                                <ul class="links">
                        <li><Link to="#">Privacy Policy</Link></li>
                        <li><Link to="#">Terms of Sale</Link></li>
                         <li><Link to="#">Terms of Use</Link></li>
                         <li><Link to="#">Report Abuse</Link></li>
                        <li><Link to="#">CSR Policy</Link></li>
                         <li><Link to="#">T&amp;C Adv./Media</Link></li>
                         <li><Link to="#">FAQ</Link></li>
                              </ul>
                                </div>
                            </div>
                            <div className="column">
                            <div className="stores">
                            <div className="footer-content">
                           
                               <h6 className="footer-headings">WHAT IN STORES</h6>
                                </div>
                                <ul class="links">
                        <li><Link to="#">Women</Link></li>
                        <li><Link to="#">Men</Link></li>
                         <li><Link to="#">Accessories</Link></li>
                         <li><Link to="#">Buy Gift Vouchers</Link></li>
                        <li><Link to="#">Electronics</Link></li>
                              </ul>
                            </div>
                            </div>
                            <div className="column">
                           
                            <div className="edeals-business">
                            <div className="footer-content">
                               <h6 className="footer-headings">EDEALS BUSINESS</h6>
                                </div>
                                <ul class="links">
                        <li><Link to="#">Edeals Gift Voucher</Link></li>
                        <li><Link to="#">Sell on Edeals</Link></li>
                         <li><Link to="#">Media Entities</Link></li>
                         <li><Link to="#">Be an affiliate</Link></li>
                        <li><Link to="#">Deal of the Day</Link></li>
                        <li><Link to="#">Edeals Launchpad</Link></li>
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
                                        <li className="pay"><Link to="#" title="Paypal" target="_blank"><i className="icon-paypal" ></i></Link></li>
                                        <li className="pay"><Link to="#" title="Visa" target="_blank"><i className="icon-visa"></i> </Link></li>
                                        <li className="pay"><Link to="#" title="American" target="_blank"><i className="icon-american"></i></Link></li>
                                        <li className="pay"><Link to="#" title="Master Card" target="_blank"><i className="icon-mastercard"></i></Link></li>
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
                                    <Link to="#" className="logo"><img src={Trust} />
                                        <div className="trust-logo">
                                            TrustPay
                                        </div>
                                    </Link>
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
