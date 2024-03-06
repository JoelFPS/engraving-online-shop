import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
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