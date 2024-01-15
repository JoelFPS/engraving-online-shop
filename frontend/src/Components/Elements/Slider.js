// Components/Slider.js
import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../Styles/slider.scss';
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

useEffect(() => {
    axios
       .get('http://localhost:5001/api/products/656db87f6969bb7bd4bf73ef')
       .then((response) => {
             setProductData(
                [response.data]
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
                        key={"id_"+contents.id}
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