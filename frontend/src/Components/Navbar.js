import { useRef } from "react";
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
				<a href="/App.js">Home</a>
				<a href="/AllTypes.js">Prezenty</a>
				<a href="/pens.js">Długopisy</a>
				<a href="/#">Noże</a>
				<a href="/#">O nas</a>
				<a href="/#"><FaShoppingCart className={"productCard_nav_cart"} /></a>
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