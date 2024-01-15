import React, { Component } from 'react';

export class GetProductForm extends Component {
    constructor() {
        super();
        this.state = {
            productId: "",
            productData: null
        };
        this.getProduct = this.getProduct.bind(this);
    }

    getProduct() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(`http://localhost:5001/api/products/${this.state.productId}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    productData: data
                });
            })
            .catch(error => {
                console.error('Error fetching product:', error);
            });
    }

    render() {
        return (
            <div className='get'>
                <h1>Pobieranie danych z bazy</h1>
                <label>Podaj ID produktu: </label>
                <input type="text" value={this.state.productId} onChange={evt => this.updateProductIdValue(evt)} />
                <input type="button" value="Pobierz dane" onClick={this.getProduct} />

                {this.state.productData && (
                    <div>
                        <h2>Dane produktu:</h2>
                        <p>Name: {this.state.productData.name}</p>
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

    updateProductIdValue(evt) {
        const val = evt.target.value;
        this.setState({
            productId: val,
            productData: null // Reset product data when changing the product ID
        });
    }
}

export default GetProductForm