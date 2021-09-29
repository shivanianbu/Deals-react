import React from 'react'

import { connect ,useDispatch} from "react-redux";
import { addToCart } from "../../redux/Action/cartAction";
import { Link,useHistory } from 'react-router-dom';
import { BASE_PATH } from '../../utils/env';
import "./product.scss"
const View = (props) => {

  
    const {products, addToCart} = props;
    const id  = props.match.params.id;
    const oldcost = (cost) =>
    {
      return cost+ 200;
    }
    let history = useHistory();
    const dispatch = useDispatch();
   
       const addCart = async(id) => {
         dispatch(addToCart(id));
         alert("Do you want to add Item ?");
         history.push('/');
     }
    return (
        <div className="container">
            <div className="card-wrapper">
            {  products.filter(product => product.id === id).map((product) =>
            <div className="product-view">
                <div className="pro-img">
                <img src={`${BASE_PATH}/${product.image}`} alt={product.type} className="view-img"/>
                <h5 className="pro-title">{product.title}</h5>
                    <Link to="#" className="pro-link">Visit Store</Link>
                    <div className="pro-rating">
                    <i className="star"></i>
                    <i className="star"></i>
                    <i className="star"></i>
                    <i className="star"></i>
                    <i className="star-half"></i>
                    <span>4.7</span>
                </div>
                </div>
                <div className="pro-content">
                <div className="pro-price">
                    <p className="last-price">Old Price: <span>$ {oldcost(product.price)}</span></p>
                    <p className="new-price">New Price: <span>$ {product.price}</span></p>
                </div>
                <div className="pro-detail">
                    <h5>About :</h5>
                    <p>{product.description}</p>
                    <ul>
                        <li>Available: <span>In stock</span></li>
                        <li>Category: <span>{product.type}</span></li>
                        <li>Shopping Area: <span>All over the world</span></li>
                        <li>Shipping Fee: <span>Free</span></li>
                    </ul>
                </div>
                <div className="pro-info">
                      <button type="button" className="btn"  onClick={() => addCart(product.id)}>Add to Cart</button>
                </div>
                <div className = "social-links">
            <p>Share At: </p>
            <Link to="#" className = "social-link">
              <i class = "icon-facebook"></i>
            </Link >
            <Link to="#" className = "social-link">
              <i class = "icon-twitter"></i>
            </Link>
            <Link to="#" className = "social-link">
              <i class = "icon-google-plus"></i>
            </Link>
            <Link to="#" className = "social-link">
              <i class = "icon-linkedin"></i>
            </Link>
            <Link to="#" className = "social-link">
              <i class = "icon-pinterest"></i>
            </Link>
          </div>
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
  const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => dispatch(addToCart(id)),
    };
  };
  export default connect (mapStateToProps, mapDispatchToProps)(View);
