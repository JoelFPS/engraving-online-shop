import React, { Component } from 'react';
import { CiCircleRemove } from "react-icons/ci";
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
                            <div key={"a_" + product.id} className='productCard1'>
                                <div className='imageBlock1'>
                                    <img src={product.category+"/"+product.src+".png"} alt='product-img' className='productImage1'></img>
                                </div><CiCircleRemove className="remove"/>
                                <h3 className='productName1'>{product.name}</h3>
                                <div className='productPrice1'>{product.price} zł</div>  
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default GetAllProducts;