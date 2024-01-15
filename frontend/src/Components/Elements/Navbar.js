import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart} from "react-icons/fa";
import "../../Styles/main.scss";
import "../../Styles/header.scss";

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
				<Link to="/">Home</Link>
				<Link to="/gifts">Prezenty</Link>
				<Link to="/pens">Długopisy</Link>
				<Link to="/knifes">Noże</Link>
				<Link to="/about-us">O nas</Link>
				<a to="/"><FaShoppingCart className={"productCard_nav_cart"} /></a>
				<FaShoppingCart className={"productCard_nav_cart2"} />
				
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