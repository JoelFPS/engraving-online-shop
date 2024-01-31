import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { GetCatProducts } from '../Elements/GetCatProducts';

function KnifesList()
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
			<h1>Noże</h1>
			<div className='productList'>
				<GetCatProducts category="knifes"/>
			</div>
		</div>
	);
}

export default KnifesList;