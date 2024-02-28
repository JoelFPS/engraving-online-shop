import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
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