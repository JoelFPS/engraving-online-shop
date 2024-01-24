import { Outlet } from "react-router-dom";
import Navbar from "./Elements/Navbar";
import Footer from "./Elements/Footer";
import "../Styles/main.scss";

const LayoutMain = () => {
	return (
	<>
    	<Navbar />
    	<Outlet />
		<Footer />
    </>
	)
};

export default LayoutMain;