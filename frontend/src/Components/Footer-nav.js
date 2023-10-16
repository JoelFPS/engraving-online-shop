import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";

function Footer() {
	const fooRef = useRef();

	const showFooter = () => {
		fooRef.current.classList.toggle(
			"responsive_foo"
		);
	};

	return (
		<footer>
			<h3>Grawerowy.pl</h3>
			<p>Wszelkie prawa zastrzeżone 2023 &copy;</p>
			<button
				className="foo-btn"
				onClick={showFooter}>
				<FaBars />
			</button>
		</footer>
	);
}

export default Footer;