import React, { Component } from 'react'

export class AddProductForm extends Component {
    constructor() {
        super();
        this.addProduct = this.addProduct.bind(this);
        this.reset();
    }

    reset() {
        /*this.setState(state => {
            console.log(state);
            return {
                name: "",
                src: "",
                description: "",
                price: 0,
                rating: 0
            }
        })*/
        this.state = {
            name: "",
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
        const {colors} = this.props;
        return (
            <div className='add'>
                <h1>Wprowadzanie danych do bazy</h1>
                    <input type="text" value={this.state.name} onChange={evt => this.updateNameValue(evt)}/><br/>
                    <input type="text" value={this.state.src} onChange={evt => this.updateSrcValue(evt)}/><br/>
                    <input type="text" value={this.state.description} onChange={evt => this.updateDescriptionValue(evt)}/><br/>
                    <input type="number" value={this.state.price} onChange={evt => this.updatePriceValue(evt)}/><br/>
                    <input type="number" value={this.state.rating} onChange={evt => this.updateRatingValue(evt)}/><br/>
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

export default AddProductForm