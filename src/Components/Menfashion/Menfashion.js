import React from 'react'
import './menfashion.scss';
import {  Link } from "react-router-dom";
import Man  from "../../images/mencoat.jpeg";
import ManHalf from "../../images/men-half.jpg";
import Levis from "../../images/leviss.jpg";
import Digjam from "../../images/digjam.jpg";
const Menfashion = () => {
    return (
       <div className="container">
           <div className="offer-content">
            <nav className="category-nav">
            <div className="offer-content">
          <h6 className="topic">Men's Fashion</h6>
          </div>
          <div className="offer-content">
         <ul className="men-nav">
            <li><Link className="men-menus">United Colors</Link></li>
            <li>  <Link className="men-menus">Levi's</Link></li>
            <li> <Link className="men-menus">Cello</Link></li>
            <li><Link className="men-menus" >Multi</Link></li>
            <li> <Link className="men-menus">Lee</Link></li>
         </ul>
         </div>
          </nav>
        
          
          <div className="cardss">
           <div className="cardss-box">
              <h6 className="top-head">Top Categories</h6>
              <div className="top-category">
              <Link className="category" to="#" >Shirts</Link>
              <Link className="category" to="#" >T-Shirts &amp; Polos</Link>
              <Link className="category" to="#" >Jeans</Link>
              <Link className="category" to="#" >Trousers &amp; Chinos</Link>
              <Link className="category" to="#" >Suits &amp; Blazers</Link>
              <Link className="category" to="#" >Jackets</Link>
              <Link className="category" to="#" >Sweatshirts</Link>
              <Link className="category" to="#" >Kurta &amp; Sherwants</Link>
              </div>
           </div>    
           <div className="cardss-box">
               <div className="men1">
                    <img src={ Man } alt="Coat"  className="img" />
                    <div className="box-text-right">
                    <h5 className="italic">All FORMAL MEN'S WEAR ONLY ON </h5>
                    <h4 className="italic">$499</h4>
                            <a className="fashion-btn">Shop Now</a>
                        </div> 
                </div>
           </div>
           <div className="cardss-box">
                <div className="col">
              <div className="row-2">
              <img src={Levis} alt="Shop Now" className="img" />
              <div className="box-text-right">
                            <h5 className="poiret">UPTO 50% OFF</h5>
                            <a className="fashion-btn">Shop Now</a>
                        </div>
              </div>
              <div className="row-2">
              <img src={Digjam} alt="Shop Now" className="img" />
              <div className="box-text-left">
                            <h5 className="poiret">UPTO 50% OFF</h5>
                            <a className="fashion-btn">Shop Now</a>
                        </div>
               </div>
               </div>
           </div>
           <div className="cardss-box">
           <div className="men-half">
                    <img src={ ManHalf } alt="Coat"  className="img" />
                    <div className="box-text-center">
                            <h5>40%-70% OFF ON</h5>
                            <h3 className="italic">Suits and Blazers</h3>
                            <a className="fashion-btn">Shop Now</a>
                        </div> 
               </div>
           </div>
          </div>
          </div>
          </div>
    )
}

export default Menfashion;
