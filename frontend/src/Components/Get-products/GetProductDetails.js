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
                        <input className='addToCartBtn' type='button' value='Dodaj do koszyka' />
                        {/*<input type='button' onClick={} value='Przejdź do koszyka' />*/}
                    </div>
                    <div className='clear-both'></div>
                </div>
            )}
        </div>
    );
}

export default GetProduct;
