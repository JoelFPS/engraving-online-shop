import React from 'react';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Products } from './Components/Products';
import Product from './Components/Product';
import contents from './content';
import Slider from './Components/Slider'
import "./Styles/main.scss";


function App() {
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
			<Footer />
			
		</div>
	);
}

export default App;