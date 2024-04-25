import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2>Information coming soon</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;