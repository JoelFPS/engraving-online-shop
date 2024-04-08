import React from 'react';
import { useContext } from 'react';
import CartContext from '../../Context/Cart/CartContext';
import "../../Styles/product.scss";
import { useState, useEffect } from 'react';
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";

function GetProductDetails(props) {
    const [productData, setProductData] = useState(null);
    const { productId } = props;
    
    const { addToCart, increase, decrease, removeFromCart, cartItems, sumItems, itemCount } = useContext(CartContext);

    const isInCart = () => {
        const bool = !!cartItems.find((item) => item._id === productId);
        console.log(bool)
        console.log(cartItems)
        if(bool == true) {
            increase(productData);
            console.log("increase")
        } else {
            addToCart(productData);
            console.log("add")
        }
    };

    const countInCart = () => {
        const Quantity = cartItems.find((item) => item._id === productId).quantity;
        console.log(Quantity);
        if(Quantity > 1) {
            decrease(productData);
            console.log("decrease")
        } else {
            removeFromCart(productData);
            console.log("remove")
        }
    }

    useEffect(() => {
        getProduct();
    });
    
    const getProduct = () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch(`http://localhost:5001/api/products/${productId}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                setProductData(data);
            })
            .catch(error => {
                console.error('Error fetching product:', error);
            });
    };

    return (
        <div className='product-get'>
            {productData && (
                <div className='product-page'>
                    <div className='pg-left'>
                        <img className="productPgImg" src={productData.src + ".png"} alt={productData.name} />
                    </div>
                    <div className='pg-middle'>
                        <h1>{productData.name}</h1>
                        <div className='category'>Kategoria: {productData.category}</div>
                        <div className='rating'>
                        Opinie {[...Array(productData.rating)].map((_, index) => (
                            <span key={index}>&#9733;</span> // Kod Unicode dla gwiazdki
                        ))}
                        </div>
                        <div className='description'>{productData.description}</div>
                    </div>
                    <div className='pg-right'>
                        <h1 className='price'>{productData.price + " zł"}</h1>
                        <input className='quantity' type='number' id='quantity' defaultValue='1' />
                        <div>
                            <FiMinusCircle onClick={() => countInCart(productData)} className="minus-btn"/>
                            <FiPlusCircle onClick={() => isInCart(productData)} className="plus-btn"/>
                        
                            <input type='button' onClick={() => isInCart(productData)} className="btn" value='Dodaj do koszyka' />

		                </div> 
                    </div>
                    <div className='clear-both'></div>
                </div>
            )}
        </div>
    );
}

export default GetProductDetails;
