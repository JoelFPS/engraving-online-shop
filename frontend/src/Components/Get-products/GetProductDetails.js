import React, { Component } from 'react';
import CartContext from '../../Context/Cart/CartContext';
import { useContext } from 'react';
import "../../Styles/product.scss";
import { useState, useEffect } from 'react';

function GetProduct(props) {
    const [productId, setProductId] = useState("");
    const [productData, setProductData] = useState(null);
    
    const { productId: productIdProp } = props;
    const { addToCart, increase, cartItems, sumItems, itemCount } = useContext(CartContext);

    const isInCart = (product) => {
        return !!cartItems.find((item) => item.id === product.id);
      };

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(`http://localhost:5001/api/products/${productIdProp}`, requestOptions)
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
                        <div className='rating'>Opinie {productData.rating}</div>
                        <div className='description'>{productData.description}</div>
                    </div>
                    <div className='pg-right'>
                        <h1 className='price'>{productData.price + " zł"}</h1>
                        <input className='quantity' type='number' id='quantity' defaultValue='1' />
                        {isInCart(productData) && (
                            <input type='button' onClick={increase(productData)} className="btn" value='Dodaj więcej' />
                        )}
                        {!isInCart(productData) && (
                            <input type='button' onClick={addToCart(productData)} className="btn" value='Dodaj do koszyka' />
                        )}
                    </div>
                    <div className='clear-both'></div>
                </div>
            )}
        </div>
    );
}

export default GetProduct;
