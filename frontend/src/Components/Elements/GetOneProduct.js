import React, { Component } from 'react';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import "../../Styles/products.scss";

export class GetOneProduct extends Component {
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
        const { name } = this.props; //pobieranie nazwy
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(`http://localhost:5001/api/products`, requestOptions)
            .then(response => response.json())  
            .then(data => {
                const filteredProducts = data.filter(product => product.name === name); //filtrowanie po nazwie
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
            <div className='get'>
                {this.state.productData && (
                    <div className='grid'>
                        {this.state.productData.map(product => (
                            <div key={"a_" + product.id} className='productCard'>
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
                                                <FaStar className={(idx + 1)} key={product.id + "_c_" + idx} />
                                            ))}
                                            <FaShoppingCart className={"productCard__cart"} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default GetOneProduct;