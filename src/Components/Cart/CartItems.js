import React, {useState}from 'react'
import { BASE_PATH } from '../../utils/env';
import { removeFromCart,adjustQty } from '../../redux/Action/cartAction';
import { connect } from "react-redux";
import "./cart.scss";

const CartItems = ({item,removeFromCart,adjustQty}) => {

    const itemPrice = (price, qty) => {
        return price * qty;
    }
    const [input, setInput] = useState(item.qty);
    const onChangeHandler = (e) => {
      setInput(e.target.value);
      adjustQty(item.id, e.target.value);
    };

    return (
       <>
            <tr>
                <td className= "td">
                    <div className="cart-item">
                        <img src={`${BASE_PATH}/${item.image}`} />
                        <div>
                            <h6 className="title">{item.price}</h6>
                            <span className="remove-item" 
                            onClick={() => removeFromCart(item.id)}
                            >Remove</span>
                        </div>
                    </div>
                </td>
                <td className= "td">
                <input min="1" type="number" id="qty"name="qty" className="input" value={input} onChange={onChangeHandler}/>                 
                 </td>

                <td className= "td">${itemPrice(item.price, item.qty)}</td>
               
            </tr>
   </>

    )
}


const mapDispacthToProps = (dispatch) => {
    return {
      removeFromCart: (id) => dispatch(removeFromCart(id)),
      adjustQty: (id, value) => dispatch(adjustQty(id, value)),
    };
  };
  
  export default connect(null, mapDispacthToProps)(CartItems);
