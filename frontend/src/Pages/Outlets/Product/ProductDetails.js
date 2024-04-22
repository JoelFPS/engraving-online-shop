import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import GetProduct from '../../../Components/Get-products/GetProductDetails';

function ProductDetails()
{
	const { productId } = useParams();
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
	});
	return (
		<div className="productSection">
			<div className='productList'>
				<GetProduct productId={productId}/>
			</div>
		</div>
	);
}

export default ProductDetails;