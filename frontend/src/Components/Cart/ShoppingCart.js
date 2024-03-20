import GetProductsInCart from "./GetProductsInCart";
import Summary from "./Summary";
import "../../Styles/ShoppingCart.scss";

function ShoppingCart(props) {

    return (
        <div className="cart">
            <div className="products">
            <h1>Twoje zakupy w koszyku</h1>

            </div>
            <div className="summary">
                <h1>Podsumowanie zamówienia</h1>
                <Summary/>
            </div>
        </div>
    );
}

export default ShoppingCart;

