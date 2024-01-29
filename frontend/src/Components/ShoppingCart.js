import { useRef } from "react";
import { FaBars, FaTimes, FaShoppingCart, FaStar} from "react-icons/fa";
import GetProductsInCart from "./Elements/GetProductsInCart";
import "../Styles/ShoppingCart.scss";

function ShoppingCart(props) {

    return (
        <div className="cart">
            <div className="products">
            <h1>Twoje zakupy w koszyku</h1>
            <GetProductsInCart/>

            </div>
            <div className="summary">
                <h1>Podsumowanie zamówienia</h1>
                
            </div>
        </div>
    );
}

export default ShoppingCart;