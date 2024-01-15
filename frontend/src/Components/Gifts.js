import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "../Styles/main.scss";

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
					<h1>Najczęściej kupowane</h1>
					<div className='productList'>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Gifts;