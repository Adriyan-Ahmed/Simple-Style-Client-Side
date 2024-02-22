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
            <main className="min-h-screen mt-[75px] md:mt-[83px] lg:mt-[99px] space-y-14 md:space-y-20 lg:space-y-28 bg-[#f6ffff] ">
                <Outlet />
            </main>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default MainLayout;