import styled from "styled-components";
import { formatCurrency } from "../../utils.js";
import { useContext } from "react";
import CartContext from "../../Context/Cart/CartContext.js";

const Checkout = () => {
	const { clearCart, handleCheckout, itemCount, total } = useContext(CartContext);
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

			<button className='payment-button' onClick={handleCheckout}>Przejdź do płatności</button>
			<button className='clear-button' onClick={clearCart}>Wyczyść koszyk</button>
		</div>
  	);
};

// Styled Components

const Wrapper = styled.div`
  margin-top: 3rem;
  border: 1px solid #000;
  padding: 1.5rem;

  p,
  h4 {
    margin: 1rem;
    font-size: large;
  }
`;

const CheckBtn = styled.button`
  color: #fff;
  background-color: green;
  border: 1px solid #1a1a1a;
  padding: 0.5rem 1rem;
  line-height: 1.5;
  font-size: 10px;
  border-radius: 0;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
`;

const ClearBtn = styled(CheckBtn)`
  background: transparent;
  color: #000;

  &:hover {
    background-color: red;
    color: #fff;
  }
`;
export default Checkout;