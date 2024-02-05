import React, { Component } from 'react';

function Summary(props) {

    return (
        <div className='sum'>
            <div className='prod-text'><h2>Suma 6 produktów</h2></div>
            <div className='prod-price'><h2>198,87 zł</h2></div>

            <div className='ship-text'><h2>Wysyłka</h2></div>
            <div className='ship-price'><h2>15,99 zł</h2></div>

            <div className='sum-text'><h2>Suma</h2></div>
            <div className='sum-price'><h2>214,86</h2></div>

            <button className='payment-button'>Przejdź do płatności</button>
            <button className='continue-button'>Kontynuuj zakupy</button>
        </div>
    );
}

export default Summary;