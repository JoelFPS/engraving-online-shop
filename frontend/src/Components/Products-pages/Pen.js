import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import GetProduct from '../add-product/getProduct';

function Pen()
{
	const { penId } = useParams();
	const pen = GetProduct(penId);
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
					<h1>{pen.name}</h1>
					<div className='productList'>

					</div>
				</div>
			</div>
		</div>
	);
}

export default Pen;