import React from "react";
import { useContext } from "react";
import CartContext from "../../Context/Cart/CartContext.js";
import styled from "styled-components";
import { formatCurrency } from "../../utils.js";

const CartItem = ({ product }) => {
const { removeFromCart, increase, decrease } = useContext(CartContext);

	return (
		<SingleCartItem>
		<CartImage src={product.category+"/"+product.src+".png"} alt={product.name} />
		<div>
			<h5>{product.name}</h5>
			<p>{formatCurrency(product.price)}</p>
		</div>

		{/* Buttons */}
		<BtnContainer>
			{product.quantity > 1 && (
			<button onClick={() => decrease(product)} className="btn">
				<Icon src={"icon/remove-circle-outline.svg"} alt="-" />
			</button>
			)}

			{product.quantity === 1 && (
			<button onClick={() => removeFromCart(product)} className="btn">
				<Icon src={"icon/trash-outline.svg"} alt="delete" />
			</button>
			)}

			<div>
			<p>Ilość: {product.quantity}</p>
			</div>

			<button
			onClick={() => increase(product)}
			className="btn btn-primary btn-sm mr-2 mb-1">
			<Icon src={"icon/add-circle-outline.svg"} alt="+" />
			</button>
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

const Icon = styled.img`
width: 1.6rem;
height: auto;
`;

export default CartItem;