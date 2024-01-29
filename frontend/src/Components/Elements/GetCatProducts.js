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
        //const productLink = "./product/"+product.src;
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
            <div className='get'>
                {this.state.productData && (
                    <div>
                        {this.state.productData.map(product => (
                            <Link to={"./" + product.src}>
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
                            </Link>
                            
                        ))}
                    </div>
                )}
             {/*   <Switch>
                    <Route
                    path={"/"+product.category+"/"+product.src}
                    render={({ match }) => (
                        <ProductPage
                        product={products.find(
                            (product) => String(product.src) === match.params.src
                        )}
                        />
                    )}
                    />
                        </Switch> */}
                        </div>
        );
    }
}

export default GetCatProducts;