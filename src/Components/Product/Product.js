import React,{useEffect} from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { BASE_PATH } from '../../utils/env';
import "./product.scss"

const Product = (props) => {
  
    const {products} = props;
    const type  = props.match.params.type;
   
    return (
        <div className="container">
          <div className="offer-content">
          <h6 className="topic">{type}</h6>
          </div>
             <div className="product">
         
        {  products.filter(product => product.type === type).map((product) =>
         <div className="card-item">
                <img src={`${BASE_PATH}/${product.image}`} alt={product.title} className="product-img" />
                
                <div className="product-text">
                  <div className="name">{product.title}</div>
                  <h6 className="topic">${product.price}</h6>
                </div>
                <div className="product-btn">
                <Link className="cart-btn">Add to Cart</Link>
                <Link to={`view/${product.id}`} className="view-btn">View Detail</Link>
                  </div>
            </div>
        )}
          </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      products: state.shop.products,
     
    };
  };
  export default connect(mapStateToProps)(Product);

