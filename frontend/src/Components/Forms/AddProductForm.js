import React, { Component } from 'react'
import "../../Styles/Admin.scss";

export class AddProductForm extends Component {
    constructor() {
        super();
        this.addProduct = this.addProduct.bind(this);
        this.reset();
    }

    reset() {
        this.state = {
            name: "",
            category: "",
            src: "",
            description: "",
            price: 0,
            rating: 0
        }
    }

    addProduct() {
        console.log(this.getState);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( this.state )
        }
        fetch('http://localhost:5001/api/products/', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });

    }
    render() {
        return (
            <div className='add'>
                <h1>Wprowadzanie danych do bazy</h1><br></br>
                    <input type="text" placeholder="nazwa" value={this.state.name} onChange={evt => this.updateNameValue(evt)}/><br/>
                    <input type="text" placeholder="kategoria" value={this.state.category} onChange={evt => this.updateCategoryValue(evt)}/><br/>
                    <input type="text" placeholder="src" value={this.state.src} onChange={evt => this.updateSrcValue(evt)}/><br/>
                    <textarea rows="7" placeholder="opis" value={this.state.description} onChange={evt => this.updateDescriptionValue(evt)}/><br/>
                    <input type="number" value={this.state.price} onChange={evt => this.updatePriceValue(evt)}/> zł<br/>
                    <input type="number" value={this.state.rating} onChange={evt => this.updateRatingValue(evt)}/> *<br/>
                    <input type="button" value="Wprowadź dane" onClick={this.addProduct}></input>
            </div>
        )
    }

    updateNameValue(evt) {
        const val = evt.target.value;
        this.setState({
            name: val,
        })
    }
    updateCategoryValue(evt) {
        const val = evt.target.value;
        this.setState({
            category: val,
        })
    }
    updateSrcValue(evt) {
        const val = evt.target.value;
        this.setState({
            src: val,
        })
    }
    updateDescriptionValue(evt) {
        const val = evt.target.value;
        this.setState({
            description: val,
        })
    }
    updatePriceValue(evt) {
        const val = evt.target.value;
        this.setState({
            price: val,
        })
    }
    updateRatingValue(evt) {
        const val = evt.target.value;
        this.setState({
            rating: val,
        })
    }
}

export default AddProductForm;