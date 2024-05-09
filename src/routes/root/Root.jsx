import { Outlet } from "react-router-dom";
import Navbar from "../../components/shareComponents/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-16">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Root;