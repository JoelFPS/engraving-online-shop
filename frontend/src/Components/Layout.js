import { Outlet } from "react-router-dom";
import Navbar from "./Elements/Navbar";
import Footer from "./Elements/Footer";
import "../Styles/main.scss";

const Layout = () => {
	return (
	<>
    	<Navbar />
    	<Outlet />
		<Footer />
    </>
	)
};

export default Layout;

/*
		<div className='App'>
			<Navbar />
        </div>
			<div className="content">
				<div className="productSection">
					<h1>Najczęściej kupowane</h1>
					<Slider />
					<Swiper />
				</div>
			</div>
			<div className="content">
				<div className="productSection">
					<h1>Najczęściej kupowane</h1>
					<div className='productList'>
						
						{contents.map(contents => (
								<Products 
									id={contents.id}
									image={contents.image}
									name={contents.name}
									price={contents.price}
									totalSales={contents.totalSales}
									timeLeft={contents.timeLeft}
									rating={contents.rating}
									key={"p_"+contents.id}
								/>
								))}
					</div>
				</div>
<Footer />

*/