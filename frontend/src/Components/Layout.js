import { Outlet, Link } from "react-router-dom";
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

<AddProductForm />
<GetProductForm />
<Footer />

*/


const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;