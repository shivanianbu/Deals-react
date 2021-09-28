import React from 'react'
import { BASE_PATH } from '../../utils/env';
import { connect } from "react-redux";
import { addToCart } from "../../redux/Action/cartAction";
import { Link } from 'react-router-dom';


const Product = ({ product, addToCart }) => {
    
  return (
            <article className="card">
              <div className="card-box">
                <img src={`${BASE_PATH}/${product.image}`} alt="trendings" className="img" />

                <div className="text">
                  <div className="name">{product.title}</div>
                  <h6 className="topic">${product.price}</h6>
                </div>
              </div>
              <div className="product-cart">
                <Link className="search-cart"></Link>
                <Link className="bag-btn"><i className="icon-shoppingcart"  onClick={() => addToCart(product.id)} ></i></Link>
                <Link className="analytics"></Link>
              </div>
            </article>
          )
      
}
const mapDispacthToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispacthToProps)(Product);