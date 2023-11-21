import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import './Layout.css'

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="content">
                <Outlet />
            </div>
            <footer>footer</footer>
        </>
    );
};
export default Layout;