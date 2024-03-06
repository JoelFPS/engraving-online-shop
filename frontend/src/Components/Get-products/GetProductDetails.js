import React, { Component } from 'react';
import CartContext from '../../Context/Cart/CartContext';
import { useContext } from 'react';
import "../../Styles/product.scss"

export class GetProduct extends Component {
    constructor() {
        super();
        this.state = {
            productId: "",
            productData: null
        };
        this.getProduct = this.getProduct.bind(this);
    }

    
    componentDidMount() {
        this.getProduct();
    }

    getProduct() {
        const { productId } = this.props;
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        console.log("cokolwiek")

        fetch(`http://localhost:5001/api/products/${productId}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    productData: data
                });
            })
            .catch(error => {
                console.error('Error fetching product:', error);
            });
            console.log(this.state.productData);
    }

    addToOrder() {

    }

    render() {
        return (
            <div className='product-get'>
                {this.state.productData && (
                        <div className='product-page'>
                            <div className='pg-left'>
                                <img className="productPgImg" src={this.state.productData.src+".png"}></img>
                            </div>
                            <div className='pg-middle'>
                                <h1>{this.state.productData.name}</h1>
                                <div className='category'>Kategoria: {this.state.productData.category}</div>
                                <div className='rating'>Opinie {this.state.productData.rating}</div>
                                <div className='description'>{this.state.productData.description}</div>
                            </div>
                            <div className='pg-right'>
                                    <h1 className='price'>{this.state.productData.price+" zł"}</h1>
                                    <input className='quantity' type='number' id='quantity' defaultValue='1'/>
                                    <input className='addToCartBtn' type='button' onClick={this.addToOrder()} value='Dodaj do koszyka' />
                                    {/*<input type='button' onClick={} value='Przejdź do koszyka' />*/}
                            </div>
                            <div className='clear-both'></div>
                        </div>
                )}
            </div>
        );
    }
}

export default GetProduct;