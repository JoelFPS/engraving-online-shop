import GetProductsInCart from "./GetProductsInCart";
import Summary from "./Summary";

import CartItem from "../../Components/Cart/CartItem";
import { useContext } from "react";
import CartContext from "../../Context/Cart/CartContext";
import styled from "styled-components";
import Checkout from "../../Components/Cart/Checkout";
import { Link } from "react-router-dom";

import "../../Styles/ShoppingCart.scss";

function ShoppingCart(props) {

    const { cartItems, checkout, clearCart } = useContext(CartContext);

    return (
        <div className="cart">
            <div className="products">
            <h1>Twoje zakupy w koszyku ({cartItems.length})</h1>
                <div> 
                {
                    <div>
                        {cartItems.length === 0 ? (
                            <h4>Cart is empty</h4>
                        ) : (
                            <ul>
                                {cartItems.map((product) => (
                                    <CartItem key={"cartitem"+product._id} product={product} />
                                ))}
                            </ul>
                        )}
                    </div> 
                }
                </div>
            </div>
            <div className="summary">
                <h1>Podsumowanie zamówienia</h1>
                <Summary/>
            </div>

            {checkout && (
                <div>
                    <h4>Thank you for your purchase!</h4>
                    <p>
                        Your order has been placed and will be delivered to you within 24
                        hours.
                    </p>
                    <Link to="/">
                        <input type="button" onClick={clearCart}>Continue Shopping</input>
                    </Link>
                </div>
            )}
            <div>
                {cartItems.length > 0 && <Checkout />}
            </div>
        </div>

    );
}

export default ShoppingCart;

