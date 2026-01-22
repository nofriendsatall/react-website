import React from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { food_list } from "../../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";


const Cart = () => {

    const { cartItems, addToCart, removeFromCart, getTotalCartAmount } = React.useContext(StoreContext);

    const navigate = useNavigate();

    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>

                <br />
                <hr />

                {
                    food_list.map((item, id) => {
                        if (cartItems[item.id] > 0) {
                            return (
                                <div>
                                    <div className="cart-items-title cart-items-item" >
                                        <img src={item.image} alt="" />
                                        <p>{item.name}</p>
                                        <p>${item.price}</p>
                                        <p>{cartItems[item.id]}</p>
                                        <p>${item.price * cartItems[item.id]}</p>
                                        <p className="cross" onClick = {() => removeFromCart(item.id)}>x</p>
                                    </div>
                                </div>
                            )
                        }
                    })
                }

            </div>

            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>

                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>{getTotalCartAmount() > 0 ? 2 : 0}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Total</p>
                            <p>{getTotalCartAmount() > 0 ? getTotalCartAmount() + 2 : 0}</p>
                        </div>

                        <button onClick={() => navigate('/order')} >Proceed To Checkout</button>
                    </div>

                    <div className="cart-promocode">
                        <div>
                            <p>If you have a promocode, please enter it here</p>

                            <div className="cart-promocode-input">
                                <input type="text" placeholder="promocode" />
                                <button>submit</button>
                            </div>

                        </div>
                    </div>


                </div>
            </div>


        </div>
    );
};

export default Cart;