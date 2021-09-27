import "./trendings.scss";
import React from "react";
import Product from "./Product";
import { connect,useDispatch,} from "react-redux";


const Trendings = ({products}) => {
// console.log(products);
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

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Trendings);




