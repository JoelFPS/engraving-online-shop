import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from "./Components/Layout.js";
import Home from "./Components/Home.js";
import AllTypes from "./Components/AllTypes.js";
import { Products } from './Components/Products';
import Product from './Components/Product';
import Swiper from './Components/Swiper';
import List from './Components/List';
import contents from './content';
import Slider from './Components/Slider';
import { AddProductForm } from './Components/add-product/form.js'; //temporary
import { GetProductForm } from './Components/add-product/showProd.js'; //temporary
import "./Styles/main.scss";

function App(){
	//debugger;
	const [posts, setPosts] = useState([]);

	console.log('test')
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
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="alltypes" element={<AllTypes />} />
					</Route>
				</Routes>
			</BrowserRouter>
			<GetProductForm />
		</div>
	);
}

export default App;