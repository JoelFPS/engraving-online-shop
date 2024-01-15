import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

import Layout from "./Components/Layout.js";
import Home from "./Components/Home.js";
import Gifts from "./Components/Gifts.js";
import Pens from "./Components/Pens.js";
import Knifes from "./Components/Knifes.js";
import AboutUs from "./Components/AboutUs.js";
import Test from "./Components/Test.js";

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
						<Route path="gifts" element={<Gifts />} />
						<Route path="pens" element={<Pens />} />
						<Route path="knifes" element={<Knifes />} />
						<Route path="about-us" element={<AboutUs />} />
						<Route path="test" element={<Test />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;