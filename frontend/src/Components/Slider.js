// Components/Slider.js
import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/slider.scss';
import { Products } from './Products'; 

import axios from 'axios';

let tryAgain = true;

const SliderComponent = () => {
    console.log('asd')
    const [productData, setProductData] = useState(null)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    /*this.useState ({
        productData: null
    })*/

function getProduct() {
    console.log("getProduct()");
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    const tableId = [
        "656db87f6969bb7bd4bf73ef",
        "656dbb3f6969bb7bd4bf73f1",
        "656dbb536969bb7bd4bf73f3",
        "656dbb6e6969bb7bd4bf73f5"
    ];

    fetch(`http://localhost:5001/api/products/${tableId[1]}`, requestOptions)
        .then(response => response.json())
        .then(data => {
            setProductData(
                [data]
            );
        })
        .catch(error => {
            console.error('Error fetching product:', error);
        });
}

//getProduct();

useEffect(() => {
    axios
       .get('http://localhost:5001/api/products/656dbb3f6969bb7bd4bf73f1')
       .then((response) => {
             setProductData(
                [response]
             );
       })
       .catch((err) => {
          console.log(err);
       });
}, []);

return (
        
    <div className="slider-container">
        <Slider {...settings}>
            {productData && productData.map(contents => (
                    <Products 
                        key={contents.id}
                        image={"f/"+contents.src}
                        name={contents.name}
                        price={contents.price}
                        totalSales={0}
                        timeLeft={21}
                        rating={contents.rating}
                    />
            ))}
        </Slider>
    </div>
    
);
};

export default SliderComponent;
