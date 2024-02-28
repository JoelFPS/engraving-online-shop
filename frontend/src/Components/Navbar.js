import { useRef } from "react";
import { Link } from "react-router-dom";
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

	return (
		<header>
			<h3>Grawerowy.pl</h3>
			<nav ref={navRef}>
				<Link to="/" onClick={showNavbar}>Home</Link>
				<Link to="/gifts" onClick={showNavbar}>Prezenty</Link>
				<Link to="/pens" onClick={showNavbar}>Długopisy</Link>
				<Link to="/knifes" onClick={showNavbar}>Noże</Link>
				<Link to="/about-us" onClick={showNavbar}>O nas</Link>
				<Link to="/admin" onClick={showNavbar}>Admin</Link>
				<Link to="/shopping-cart" onClick={showNavbar}><FaShoppingCart className={"productCard_nav_cart"} /></Link>
				<Link to="/shopping-cart"><FaShoppingCart className={"productCard_nav_cart2"} /></Link>
				
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