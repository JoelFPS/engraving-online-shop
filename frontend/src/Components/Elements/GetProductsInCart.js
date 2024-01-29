import React, { Component } from 'react';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import "../../Styles/ShoppingCart.scss";

export class GetAllProducts extends Component {
    constructor() {
        super();
        this.state = {
            productData: null
        };
        this.getProducts = this.getProducts.bind(this);
    }

    componentDidMount() {
        this.getProducts();
    }

    getProducts() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(`http://localhost:5001/api/products`, requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    productData: data
                });
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }

    render() {
        return (
            <div className='get'>


                {this.state.productData && (
                    <div>
                        {this.state.productData.map(product => (
                            <div key={"a_" + product.id} className='productCard'>
                                <div className='imageBlock'>
                                    <img src={product.category+"/"+product.src+".png"} alt='product-img' className='productImage'></img>
                                </div>
                                <div className='productCard__content'>
                                    <div className='displayStack__1'>
                                        <h3 className='productName'>{product.name}</h3>
                                        <div className='productPrice'>{product.price} zł</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default GetAllProducts;