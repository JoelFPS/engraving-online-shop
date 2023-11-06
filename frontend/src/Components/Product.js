import React from 'react';
import Colors from './cart-components/Colors.js'
import DetailsThumb from './cart-components/DetailsThumb.js';

import "../Styles/product.scss";

class Cart extends React.Component{

    state = {
    products: [
        {
        "_id": "1",
        "title": "Długopis",
        "src": [
            "/test-img/pen1.png",
            "/test-img/pen2.png",
            "/test-img/pen3.png",
            "/test-img/pen4.png"
            ],
        "description": "Długopis z grawerem dwustronnym",
        "content": "Długopisy z możliwością laserowego wygrawerowania Twojego dowolnego napisu, imion, daty, grafiki lub krótkiej dedykacji. Grawer dwustronny z Twoim dowolnym tekstem! Wyjątkowy i spersonalizowany prezent na każdą okazję",
        "price": "9,99",
        "colors":["orangered","blue","crimson","green"],
        "count": 1
        }
    ],
    index: 0
    };

    myRef = React.createRef();

    handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
        images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
    };

    componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
    }

    render(){
    const {products, index} = this.state;
    return(
        <div className="app">
        {
            products.map(item =>(
            <div className="details" key={item._id}>
                <div className="big-img">
                <img src={item.src[index]} alt=""/>
                </div>

                <div className="box">
                <div className="row">
                    <h2>{item.title}</h2>
                    <span>{item.price}zł</span>
                </div>
                <Colors colors={item.colors} />

                <p>{item.description}</p>
                <p>{item.content}</p>

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                <button className="cart">Dodaj do koszyka</button>

                </div>
            </div>
            ))
        }
        </div>
    );
    };
}

export default Cart;