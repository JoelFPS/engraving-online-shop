import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

function AllProducts(){
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
				<Outlet />
			</div>
		</div>
	);
}

export default AllProducts;