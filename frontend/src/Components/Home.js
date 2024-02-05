import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { GetOneProduct } from './Elements/GetOneProduct';

function Home()
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
						<Link to='/pens/65ae51e007a3b9fd749f071b' ><GetOneProduct name="Długopis zielony - 4 kolory" /></Link>
						<Link to='/knifes/65b0fbf76b1da251a3cf11e5' ><GetOneProduct name="Scyzoryk" /></Link>
						<Link to='/pens/65ae51f707a3b9fd749f071d' ><GetOneProduct name="Długopis różowy - 4 kolory" /></Link>
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