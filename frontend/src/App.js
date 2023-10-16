import React from 'react';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Products } from './Components/Products';
import contents from './content';

function App() {
	return (
		<div className='App'>
			<Navbar />
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