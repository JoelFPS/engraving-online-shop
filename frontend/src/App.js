import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

import LayoutMain from "./Components/LayoutMain.js";
import Home from "./Components/Home.js";
import Gifts from "./Components/Gifts.js";
import Pens from "./Components/Pens.js";
import Knifes from "./Components/Knifes.js";
import AboutUs from "./Components/AboutUs.js";
import Admin from "./Components/Admin.js";
import ShoppingCart from "./Components/ShoppingCart.js";

import ProductDetails from "./Components/Products-pages/ProductDetails.js"
import GiftsList from "./Components/Products-pages/GiftsList.js"
import PensList from "./Components/Products-pages/PensList.js"
import KnifesList from "./Components/Products-pages/KnifesList.js"

import AdminPanel from './Components/Admin-pages/AdminPanel.js'
import AdminOrders from './Components/Admin-pages/AdminOrders.js'
import AdminModify from './Components/Admin-pages/AdminModify.js'

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
					<Route path="/" element={<LayoutMain />}>
						<Route index element={<Home />} />
						<Route path="gifts" element={<Gifts />} >
							<Route path=":productId" element={<ProductDetails />} />
							<Route path="" element={<GiftsList />} />
						</Route>
						<Route path="pens" element={<Pens />} >
							<Route path=":productId" element={<ProductDetails />} />
							<Route path="" element={<PensList />} />
						</Route>
						<Route path="knifes" element={<Knifes />} >
							<Route path=":productId" element={<ProductDetails />} />
							<Route path="" element={<KnifesList />} />
						</Route>
						<Route path="about-us" element={<AboutUs />} />
						<Route path="admin" element={<Admin />} >
							<Route path="" element={<AdminPanel />} />
							<Route path="orders" element={<AdminOrders />} />
							<Route path="modify" element={<AdminModify />} />
						</Route>
						<Route path="shopping-cart" element={<ShoppingCart />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;