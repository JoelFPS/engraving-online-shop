import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

import LayoutMain from "./Pages/LayoutMain.js";
import Home from "./Pages/Outlets/Home.js";
import AllProducts from "./Pages/Outlets/AllProducts.js";
import Pens from "./Pages/Outlets/Pens.js";
import Knifes from "./Pages/Outlets/Knifes.js";
import AboutUs from "./Pages/Outlets/AboutUs.js";
import Admin from "./Pages/Outlets/Admin.js";
import ShoppingCart from "./Components/Cart/ShoppingCart.js";

import Cart from "./Pages/Outlets/Cart/Cart.js";

import ProductDetails from "./Pages/Outlets/Product/ProductDetails.js"
import AllProductsList from "./Components/Lists/AllProductsList.js"
import PensList from "./Components/Lists/PensList.js"
import KnifesList from "./Components/Lists/KnifesList.js"

import AdminPanel from './Pages/Outlets/Admin/AdminPanel.js'
import AdminOrders from './Pages/Outlets/Admin/AdminOrders.js'
import AdminModify from './Pages/Outlets/Admin/AdminModify.js'

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
						<Route exact path="all-products" element={<AllProducts />} >
							<Route path=":productId" element={<ProductDetails />} />
							<Route path="" element={<AllProductsList />} />
						</Route>
						<Route exact path="pens" element={<Pens />} >
							<Route path=":productId" element={<ProductDetails />} />
							<Route path="" element={<PensList />} />
						</Route>
						<Route exact path="knifes" element={<Knifes />} >
							<Route path=":productId" element={<ProductDetails />} />
							<Route path="" element={<KnifesList />} />
						</Route>
						<Route exact path="about-us" element={<AboutUs />} />
						<Route exact path="admin" element={<Admin />} >
							<Route path="" element={<AdminPanel />} />
							<Route path="orders" element={<AdminOrders />} />
							<Route path="modify" element={<AdminModify />} />
						</Route>
						<Route exact path="shopping-cart" element={<ShoppingCart />} />
						<Route exact path="cart" element={<Cart />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;