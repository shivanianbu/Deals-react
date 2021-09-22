import "./trendings.scss";
import React from "react";
import Product from "./Product";



const Trendings = ({products}) => {

  return (
    <section className="trending">
      <div className="container">
        <div className="offer-content">
          <h6 className="topic">See What's Trending</h6>
          </div>
          <div className="row">
          <div className="cards">
        {
        
          products.filter(product => product.trending === "trend").map((product) =>
          
          <Product key={product.id} product={product} />
         ) }
          </div>
          </div>
        </div>
    </section>

  )
}

export default Trendings;




