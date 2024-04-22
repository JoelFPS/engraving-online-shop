import { formatCurrency } from "../../utils.js";
import { useContext } from "react";
import CartContext from "../../Context/Cart/CartContext.js";
import { Link } from "react-router-dom";

const Checkout = () => {
	const { clearCart, itemCount, total } = useContext(CartContext);
	let shipment = parseFloat(15.99);
	let itemsPrice = parseFloat(total);
	const totalPrice = shipment+itemsPrice;

	return (
		<div className='sum'>
			<div className='prod-text'><h2>Liczba produktów</h2></div>
			<div className='prod-price'><h2>{itemCount}</h2></div>

			<div className='ship-text'><h2>Wysyłka</h2></div>
			<div className='ship-price'><h2>15,99 zł</h2></div>

			<div className='sum-text'><h2>Suma</h2></div>
			<div className='sum-price'><h2>{formatCurrency(totalPrice)}</h2></div>

			<Link to="/order-form"><button className='payment-button'>Przejdź do płatności</button></Link>
			<button className='clear-button' onClick={clearCart}>Wyczyść koszyk</button>
		</div>
  	);
};

export default Checkout;