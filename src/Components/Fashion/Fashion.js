import React from 'react'
import './fashion.scss';
import {  Link } from "react-router-dom";

import { connect,useDispatch,} from "react-redux";



const Fashion = (props) => {
     const { fashion } = props;

//      const getUnique = (arr, comp) =>{
//           const unique =  arr.map(e => e[comp])
//         .map((e, i, final) => final.indexOf(e) === i && i)
//        .filter((e) => arr[e]).map(e => arr[e]);
  
//   return unique;
//   };
  
//      const category =  getUnique(products, 'category');

    return (
       <div className="container">
           <div className="offer-content">
            <nav className="category-nav">
            <div className="offer-content">
          <h6 className="topic">{fashion.title}</h6>
          </div>
          <div className="offer-content">
         <ul className="men-nav">
         {/* { category.map((product) => console.log(product.category)
            ) } */}
            <li><Link className="men-menus">{fashion.link[0]}</Link></li>
            <li> <Link className="men-menus">{fashion.link[1]}</Link></li>
            <li> <Link className="men-menus">{fashion.link[2]}</Link></li>
            <li><Link className="men-menus" >{fashion.link[3]}</Link></li>
            <li> <Link className="men-menus">{fashion.link[4]}</Link></li>
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
                    <img src={ fashion.img1} alt="Coat"  className="img" />
                    <div className="box-text-right">
                    <h5 className="italic">{fashion.title1} </h5>
                    <h4 className="italic">{fashion.price}</h4>
                            <a className="fashion-btn">Shop Now</a>
                        </div> 
                </div>
           </div>
           <div className="cardss-box">
                <div className="col">
              <div className="row-2">
              <img src={ fashion.img2} alt="Shop Now" className="img" />
              <div className="box-text-right">
                            <h5 className="poiret">{fashion.offer}</h5>
                            <a className="fashion-btn">Shop Now</a>
                        </div>
              </div>
              <div className="row-2">
              <img src={ fashion.img3} alt="Shop Now" className="img" />
              <div className="box-text-left">
                            <h5 className="poiret">{fashion.offer}</h5>
                            <a className="fashion-btn">Shop Now</a>
                        </div>
               </div>
               </div>
           </div>
           <div className="cardss-box">
           <div className="men-half">
                    <img src={ fashion.img4} alt="Coat"  className="img" />
                    <div className="box-text-center">
                            <h5>{fashion.offeron}</h5>
                            <h3 className="italic">{fashion.item}</h3>
                            <a className="fashion-btn">Shop Now</a>
                        </div> 
               </div>
           </div>
          </div>
          </div>
          </div>
    )
}

const mapStateToProps = (state) => {
     return {
       products: state.shop.products,
     };
   };
   
   export default connect(mapStateToProps)(Fashion);

