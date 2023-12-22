import { Outlet } from "react-router-dom";
import Nav from "../shared/Nav";
import Footer from "../shared/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />
            <Toaster />
        </div>
    );
};

export default Root;