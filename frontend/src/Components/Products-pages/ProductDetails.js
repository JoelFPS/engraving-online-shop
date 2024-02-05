import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import GetProduct from '../Elements/getProduct';

function ProductDetails()
{
	const { productId } = useParams();
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
			<h1>Szczegóły produktu</h1>
			<div className='productList'>
				<GetProduct productId={productId}/>
			</div>
		</div>
	);
}

export default ProductDetails;