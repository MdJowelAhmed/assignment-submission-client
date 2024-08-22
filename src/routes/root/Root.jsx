import { Outlet } from "react-router-dom";
import Navbar from "../../components/shareComponents/Navbar";
import Footer from "../../components/shareComponents/Footer";


const Root = () => {
    return (
        <div className="mx-4 md:mx-16">
            <div className="mb-10">
                <Navbar></Navbar>
            </div>
            <div className="mt-20 min-h-[400px]">
                <Outlet></Outlet>
            </div>

            <div className="my-12">
                <Footer></Footer>

            </div>
        </div>
    );
};

export default Root;