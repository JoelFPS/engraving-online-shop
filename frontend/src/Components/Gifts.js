import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "../Styles/main.scss";
import { GetAllProducts } from './Elements/GetAllProducts';

function Gifts(){
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
		<div className='App'>
			<div className="content">
				<div className="productSection">
					<h1>Wszystkie produkty</h1>
					<div className='productList'>
						<GetAllProducts />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Gifts;