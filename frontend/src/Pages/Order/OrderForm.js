import React from "react";
import { Link } from "react-router-dom";

function OrderForm() {

    return (
        <div className="App">
            <h1>Wypełnij formularz swoimi danymi adresowymi</h1>
            <form>
                <p>Imię:</p>
                <input type="text" id="name" placeholder="np. Jan"></input>
                <p>Nazwisko:</p>
                <input type="text" id="surname" placeholder="np. Kowalski"></input>
                <p>E-mail:</p>
                <input type="text" id="email" placeholder="np. abc@gmail.com"></input>
                <p>Nazwa miejscowości:</p>
                <input type="text" id="place" placeholder="np. Warszawa"></input>
                <p>Ulica:</p>
                <input type="text" id="street" placeholder="np. Szeroka"></input>
                <p>Numer domu:</p>
                <input type="int" id="house-number" placeholder="np. 10"></input>
                <p>Numer mieszkania:</p>
                <input type="int" id="apartment-number" placeholder="(opcjonalnie)"></input>
                <p>Kod pocztowy:</p>
                <input type="text" id="zip" placeholder="np. 12-345"></input>
            </form>

            <Link to="/shopping-cart"><button className='gray-button'>Wstecz</button></Link>
			<Link to="/"><button className='green-button'>Dalej</button></Link>

        </div>
    );
}

export default OrderForm;

/*

const orderSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the username"]
    },
    date:{
        type: Date,
        required: [true, "Please add the date of order"]
    },
    totalPrice: {
        type: Number,
        required: [true, "Please add the total price"]
    },
    adress: {
        type: String,
        required: [true, "Please add your address"]
    },
    products: {
        type: Array,
        required: [true, "Please add the ordered products"]
    }
*/