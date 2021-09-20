import React from 'react'
import './menfashion.scss';
import {  Link } from "react-router-dom";

const Menfashion = () => {
    return (
       <div className="container">
            <div className="offer-content">
            <nav className="category-nav">
          <h6 className="topic">Men's Fashion</h6>
         <ul className="men-nav">
            <li><Link className="men-menus">United Colors</Link></li>
            <li>  <Link className="men-menus">Levi's</Link></li>
            <li> <Link className="men-menus">Cello</Link></li>
            <li><Link className="men-menus" >Multi</Link></li>
            <li> <Link className="men-menus">Lee</Link></li>
         </ul>
          </nav>
          </div>
          <div className="cards">
           <div className="cards-box">
                hhg
           </div>
           <div className="cards-box">
                hhg
           </div>
           <div className="cards-box">
                hhg
           </div>
           <div className="cards-box">
                hhg
           </div>
          </div>
       </div>
    )
}

export default Menfashion
