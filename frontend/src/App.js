import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Products } from './Components/Products';
import Product from './Components/Product';
import contents from './content';
import Slider from './Components/Slider';
import { AddProductForm } from './Components/add-product/form.js'; //temporary
import { GetProductForm } from './Components/add-product/showProd.js'; //temporary
import "./Styles/main.scss";

function App(){

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
			{/*<Product />*/}
			
			<div className="content">
				<div className="productSection">
					<h1>Najczęściej kupowane</h1>
					<Slider />
				</div>
			</div>
			<div className="content">
				<div className="productSection">
					<h1>Najczęściej kupowane</h1>
					<div className='productList'>
						
						{contents.map(contents => (
								<Products 
									key={contents.id}
									image={contents.image}
									name={contents.name}
									price={contents.price}
									totalSales={contents.totalSales}
									timeLeft={contents.timeLeft}
									rating={contents.rating}
								/>
							))}
					</div>
				</div>
			</div>
			<AddProductForm />
			<GetProductForm />
			<Footer />
			
		</div>
	);
}

export default App;