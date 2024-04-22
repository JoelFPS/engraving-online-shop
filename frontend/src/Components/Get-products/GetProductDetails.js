import React, {useState, useCallback} from 'react';
import { useContext } from 'react';
import CartContext from '../../Context/Cart/CartContext';
import "../../Styles/product.scss";
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";

function GetProductDetails(props) {
    const [productData, setProductData] = useState(null);
    const { productId } = props;
    
    const { addToCart, increase, decrease, removeFromCart, cartItems, itemCount } = useContext(CartContext);

    const modifyQuantity = async (type) => {
        const bool = !!cartItems.find((item) => item._id === productId);
        let quantity = 0;
        if(bool === true){
            quantity = cartItems.find((item) => item._id === productId).quantity;
        }
        console.log(`itemCount: ${itemCount}`);
        if(type === "plus"){
            if(bool === true) {
                await increase(productData);
                console.log("increase")
                updateQuantity(quantity+1);
            } else {
                await addToCart(productData);
                console.log("add")
                updateQuantity(quantity+1);
            }
        } else if(type === "minus"){
            if(quantity > 1){
                await decrease(productData);
                console.log("decrease")
                updateQuantity(quantity-1);
            } else if(quantity === 1){
                await removeFromCart(productData);
                console.log("remove")
                updateQuantity(0);
            } else if(quantity < 1){
                updateQuantity(0);
            }
        }
    };

    const updateQuantity = async (quantity) => {
        let output = document.getElementById('quantityOfProduct');
        output.innerHTML = quantity;
    }

    const Quantity = cartItems.find((item) => item._id === productId)?.quantity ?? 0;
    
    useEffect(() => {
        getProduct();
    });
    
    const getProduct = useCallback (async () => {
        console.log("test");
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
    },[]);

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
                        <div>
                            <FiMinusCircle onClick={() => modifyQuantity("minus")} className="minus-btn"/>

                            <div id='quantityOfProduct'>{Quantity}</div>

                            <FiPlusCircle onClick={() => modifyQuantity("plus")} className="plus-btn"/>

		                </div> 
                    </div>
                    <div className='clear-both'></div>
                </div>
            )}
        </div>
    );
}

export default GetProductDetails;
