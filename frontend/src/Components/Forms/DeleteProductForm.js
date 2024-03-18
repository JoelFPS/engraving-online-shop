import React, { Component } from 'react'

export class DeleteProductForm extends Component {
    constructor() {
        super();
        this.delProduct = this.delProduct.bind(this);
        this.reset();
    }

    reset() {
        this.state = {
            name: ""
        }
    }

    delProduct() {
        console.log(this.getState);
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        }
        fetch(`http://localhost:5001/api/products/${this.state.productId}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    productData: data
                });
            })
            .catch(error => {
                console.error('Error deleting product:', error);
            });

    }
    render() {
        return (
            <div className='del'>
                <h1>Usuwanie danych z bazy</h1><br></br>
                <label>Podaj nazwę produktu: </label>
                <input type="text" value={this.state.productName} onChange={evt => this.DeleteProductNameValue(evt)} />
                <input type="button" value="Usuń dane" onClick={this.delProduct} />
            </div>
        )
    }

    DeleteProductNameValue(evt) {
        const val = evt.target.value;
        this.setState({
            productName: val,
        });
    }

}

export default DeleteProductForm;