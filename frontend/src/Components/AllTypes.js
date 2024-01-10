import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import "../Styles/main.scss";

function AllTypes(){
	//debugger;
	const [posts, setPosts] = useState([]);
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
			<Navbar />
			<div className="content">
				<div className="productSection">
					<h1>Najczęściej kupowane</h1>
					<div className='productList'>
					</div>
				</div>
			</div>
			<Footer />	
		</div>
	);
}

export default AllTypes;