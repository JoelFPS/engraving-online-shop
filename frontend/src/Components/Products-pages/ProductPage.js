import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { GetOneProduct } from '../Elements/GetOneProduct';

function ProductPage()
{
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
                {/*<div className='textSection'>
                    Znajdź inspirację na wyjątkowy prezent na każdą okazję
                </div>*/}
				<div className="productSection">
					<h1>Najczęściej kupowane</h1>
					<div className='productList'>
                        <GetOneProduct name="Długopis zielony - 4 kolory" />
						<GetOneProduct name="Scyzoryk" />
                        <GetOneProduct name="Długopis różowy - 4 kolory" />
					</div>
				</div>
                <div className='textSection'>

                    Zapraszamy do zapoznania się z naszą ofertą
                </div>
			</div>
		</div>
	);
}

export default ProductPage;