// -------------------------------- //
// -------- Imported Items -------- //
// -------------------------------- //


import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../Shared/Navbar/Navbar";




const MainLayout = () => {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main className="min-h-screen mt-[75px] md:mt-[83px] lg:mt-[99px] space-y-10 md:space-y-16 lg:space-y-20 ">
                <Outlet />
            </main>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default MainLayout;