import React from "react";
import { useContext } from "react";
import CartContext from "../../Context/Cart/CartContext.js";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { formatCurrency } from "../../utils.js";
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import "../../Styles/ShoppingCart.scss";

const CartItem = ({ product }) => {
const { removeFromCart, increase, decrease } = useContext(CartContext);

	return (
		<SingleCartItem>
		<Link to={"/"+product.category+"/"+product._id}>
		<CartImage src={product.category+"/"+product.src+".png"} alt={product.name} />
		<div>
			<h5>{product.name}</h5>
			<p>{formatCurrency(product.price)}</p>
		</div>
		</Link>
		{/* Buttons */}
		<BtnContainer>
			{product.quantity > 1 && (
				<FiMinusCircle onClick={() => decrease(product)} className="minus-btn" />
			)}

			{product.quantity === 1 && (
				<FiMinusCircle onClick={() => removeFromCart(product)} className="minus-btn"/>
			)}

			<div>
			<p>Ilość: {product.quantity}</p>
			</div>
			
			<FiPlusCircle onClick={() => increase(product)} className="plus-btn"/>

		</BtnContainer>
		
		</SingleCartItem>
	);
};

//Styled Components

const SingleCartItem = styled.div`
border-bottom: 1px solid gray;
padding: 10px 0;
margin-top: 10px;
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;

&:nth-child(1) {
	border-top: 1px solid gray;
}
`;

const CartImage = styled.img`
width: 100px;
height: auto;
padding-right: 2rem;
`;

const BtnContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
`;

export default CartItem;