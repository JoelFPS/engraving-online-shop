import { useRef } from "react";
import { Link } from "react-router-dom";
import CartContext from "../Context/Cart/CartContext"
import { useContext } from "react";
import { FaBars, FaTimes, FaShoppingCart} from "react-icons/fa";
import "../Styles/main.scss";
import "../Styles/header.scss";

function Navbar() {
	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	const { cartItems } = useContext(CartContext);

	return (
		<header>
			<Link to={"/"} onClick={showNavbar} className="nav-buttons"><h3>Grawerowy.pl</h3></Link>
			<nav ref={navRef}>
				<Link to="/" onClick={showNavbar} className="nav-buttons">Home</Link>
				<Link to="/all-products" onClick={showNavbar} className="nav-buttons">Prezenty</Link>
				<Link to="/pens" onClick={showNavbar} className="nav-buttons">Długopisy</Link>
				<Link to="/knifes" onClick={showNavbar} className="nav-buttons">Noże</Link>
				<Link to="/about-us" onClick={showNavbar} className="nav-buttons">O nas</Link>
				<Link to="/admin" onClick={showNavbar} className="nav-buttons">Admin</Link>
				<Link to="/shopping-cart" onClick={showNavbar}><FaShoppingCart className={"productCard_nav_cart"} /></Link>
				<Link to="/shopping-cart"><FaShoppingCart className={"productCard_nav_cart2"} />
				{cartItems.length > -1 && (
				cartItems.length
				)}
				</Link>
				
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;