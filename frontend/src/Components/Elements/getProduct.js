import React, { Component } from 'react';

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

    render() {
        return (
            <div className='product-get'>
                {this.state.productData && (
                    <div>
                        <h2>{this.state.productData.name}</h2>
                        <p>Category: {this.state.productData.category}</p>
                        <p>Src: {this.state.productData.src}</p>
                        <p>Description: {this.state.productData.description}</p>
                        <p>Price: {this.state.productData.price}</p>
                        <p>Rating: {this.state.productData.rating}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default GetProduct;