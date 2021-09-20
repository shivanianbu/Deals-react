import React,{useState} from 'react'
import { connect, connectFunction } from "react-redux";
import "./cart.scss";
import CartItem from "./CartItems";


const Cart = ({ cart }) => {
   
    const subTotal = cart.reduce((a, item) => a + item.qty * item.price, 0);
    const tax = 35;
    const total = subTotal + tax;

    return (
        <div>
            {cart.length === 0 ? <div className="empty">Cart is Empty !</div> :
             <>
             <table>
                 <tr>
                     <th className="th">Product</th>
                     <th className="th">Quantity</th>
                     <th  className="th">SubTotal</th>
                 </tr>
                 {cart.map((item) => (
            <CartItem item={item} key={item.id} />
                 ))}
            </table>
            
              
  <div className="cart-footer">
            <table>
                <tr>
                    <td className= "td">SubTotal</td>
                    <td className= "td">${subTotal.toFixed(2)}</td>
                </tr>
                <tr>
                    <td className= "td">Tax</td>
                    <td className= "td">$35.00</td>
                </tr>
                <tr>
                    <td className= "td">Total</td>
                    <td className= "td total">${total.toFixed(2)}</td>
                </tr>
            </table>
        </div>
        <div className="cart-checkout">
            <a className="checkout-btn" href="#">Proceed to checkout</a>
        </div>
        </>
     
                 }
                 </div>
    )
}

const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    };
  };
  
  export default connect(mapStateToProps)(Cart);
