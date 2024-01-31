import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import "../../Styles/products.scss";

export class GetCatProducts extends Component {
    constructor() {
        super();
        this.state = {
            productData: null
        };
        this.getProducts = this.getProducts.bind(this);
    }

    componentDidMount() {
        this.getProducts();
    }

    getProducts() {
        const { category } = this.props; //pobieranie kategorii
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(`http://localhost:5001/api/products`, requestOptions)
            .then(response => response.json())
            .then(data => {
                const filteredProducts = data.filter(product => product.category === category); //filtrowanie kategorii
                this.setState({
                    productData: filteredProducts
                });
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }

    render() {
        return (
            <div key="result-block" className='get'>
                {this.state.productData && (
                    <div className='grid'>
                        {this.state.productData.map(product => (
                            <Link key={"link_"+product._id} to={"./"+product._id}>
                            <div key={"productCard_" + product._id} className='productCard'>
                                <div className='imageBlock'>
                                    <img src={product.category+"/"+product.src+".png"} alt='product-img' className='productImage'></img>
                                </div>
                                <div className='productCard__content'>
                                    <div className='displayStack__1'>
                                        <h3 className='productName'>{product.name}</h3>
                                        <div className='productPrice'>{product.price} zł</div>
                                    </div>
                                    <div className='displayStack__2'>
                                        <div className='productRating'>
                                            {[...Array(product.rating)].map((val, idx) => (
                                                <FaStar className={(idx + 1)} key={product._id + "_c_" + idx} />
                                            ))}
                                            <FaShoppingCart className={"productCard__cart"} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default GetCatProducts;