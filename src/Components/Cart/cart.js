import React from 'react'

const Cart = (props) => {

    const { cart, onAdd, onRemove, remove } = props;
    const itemPrice = (price, qty) => {
        return price * qty;
    }
    const subTotal = cart.reduce((a, item) => a + item.qty * item.price, 0);
    const tax = 35;
    const total = subTotal + tax;

    return (
        <div>
            {cart.length === 0 ? <div className="empty">Cart is Empty !</div> :
                <div>
                    <table>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>SubTotal</th>
                        </tr>
                        {cart.map((item) => (<tr>
                            <td>
                                <div className="cart-item">
                                    <img src={item.image} />
                                    <div>
                                        <h6 className="title">${item.price}</h6>
                                        <span className="remove-item" onClick={() => remove(item)}>Remove</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <button onClick={() => onAdd(item)} className="add">+</button>
                                <input type="number" value={item.qty} />
                                <button onClick={() => onRemove(item)} className="remove">-</button>
                            </td>

                            <td>${itemPrice(item.price, item.qty)}</td>
                        </tr>
                        ))}
                    </table>
                    <div className="cart-footer">
                        <table>
                            <tr>
                                <td>SubTotal</td>
                                <td>${subTotal.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Tax</td>
                                <td>$35.00</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td className="title">${total.toFixed(2)}</td>
                            </tr>
                        </table>
                    </div>
                    <div className="cart-checkout">
                        <a className="checkout-btn" href="#">Proceed to checkout</a>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart
