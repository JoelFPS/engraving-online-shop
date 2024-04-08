import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { GetTopProducts } from '../../Components/Get-products/GetTopProducts';

function Home()
{
	//debugger;
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:5001/api/products')
			.then((response) => {
				setPosts(response.data);
			})
			.catch((err) => {
			console.log(err);
			});
	}, []);

	return (
		<div className='App'>
			<div className="content">
                {/*<div className='textSection'>
                    Znajdź inspirację na wyjątkowy prezent na każdą okazję
                </div>*/}
				<div className="productSection">
					<h1>Najczęściej kupowane</h1>
					<div className='productList'>
						<GetTopProducts/>
					</div>
				</div>
                <div className='textSection'>
                    Zapraszamy do zapoznania się z naszą ofertą
                </div>
			</div>
		</div>
	);
}

export default Home;