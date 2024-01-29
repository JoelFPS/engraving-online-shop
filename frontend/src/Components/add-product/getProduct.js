import { Component } from 'react';

export class GetProduct extends Component {
    constructor() {
        super();
        this.state = {
            productId: "",
            productData: null
        };
        this.getProduct = this.getProduct.bind(this);
    }

    componentDidMount() {
        this.getProducts();
    }

    getProduct(productId) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return new Promise((resolve, reject) => {
        fetch(`http://localhost:5001/api/products/${productId}`, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                resolve(data); // Przekazujemy dane do funkcji, która użyje getProduct
            })
            .catch(error => {
                console.error('Error fetching product:', error);
                reject(error); // Przekazujemy błąd do funkcji, która użyje getProduct
            });
        });
    }
}

export default GetProduct;