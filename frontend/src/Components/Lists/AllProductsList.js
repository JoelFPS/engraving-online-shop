import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { GetAllProducts } from '../Get-products/GetAllProducts';

function AllProductsList()
{
    //debugger;
	const [setPosts] = useState([]);
	useEffect(() => {
        axios
            .get('http://localhost:5001/api/products')
            .then((response) => {
                setPosts(response.data);
		        console.log(response.data);
            })
            .catch((err) => {
            	console.log(err); 
            });
	}, []);
	return (
		<div className="productSection">
			<h1>Wszystkie Produkty</h1>
			<div className='productList'>
				<GetAllProducts />
			</div>
		</div>
	);
}

export default AllProductsList;