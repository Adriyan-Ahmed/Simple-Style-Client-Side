// -------------------------------- //
// -------- Imported Items -------- //
// -------------------------------- //



import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";




const Navbar = () => {



    const Links = [
        <NavLink className={({ isActive }) => isActive ? `bg-[#0FCFEC] bg-opacity-10 py-2.5 px-5 text-[#0FCFEC] font-bold text-sm md:text-base rounded` : `bg-transparent py-2.5 px-5 font-bold text-sm md:text-base  rounded `} to="/" >HOME</NavLink>,
        <NavLink className={({ isActive }) => isActive ? `bg-[#0FCFEC] bg-opacity-10 py-2.5 px-5 text-[#0FCFEC] font-bold text-sm md:text-base rounded` : `bg-transparent py-2.5 px-5 font-bold text-sm md:text-base  rounded `} to="/all-jobs" >ALL JOBS</NavLink>,
        <NavLink className={({ isActive }) => isActive ? `bg-[#0FCFEC] bg-opacity-10 py-2.5 px-5 text-[#0FCFEC] font-bold text-sm md:text-base rounded` : `bg-transparent py-2.5 px-5 font-bold text-sm md:text-base  rounded `} to="/blogs" >BLOGS</NavLink>,
    ]



    return (
        <>
            <section className="bg-base-200 fixed top-0 w-full">
                <div className="container mx-auto">
                    <div className="navbar py-3 md:py-4 lg:py-6">
                        <div className="navbar-start">
                            <div className="dropdown xl:hidden ">
                                <label tabIndex={0} className="btn btn-ghost btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-200  shadow-md rounded-md w-52 z-10 gap-3">
                                    {
                                        Links.map((Link, i) => <li key={i}>{Link}</li>)
                                    }
                                </ul>
                            </div>
                            <div className="hidden xl:flex">
                                <nav className="flex items-center gap-3">
                                    {
                                        Links.map((Link, i) => <span key={i}>{Link}</span>)
                                    }
                                </nav>
                            </div>
                        </div>
                        <div className="navbar-center">
                            <Link className=" btn btn-ghost ">
                                <div className="flex items-center gap-2">
                                    <img className=" h-10" src="https://i.ibb.co/MZ607Cf/Simple-Style.png" alt="LOGO" />
                                    <h1 className=" text-sm md:text-base lg:text-lg xl:text-xl font-bold">SIMPLE STYLE</h1>
                                </div>
                            </Link>
                        </div>
                        <div className="navbar-end">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="https://file.xunruicms.com/admin_html/assets/pages/media/profile/profile_user.jpg" />
                                    </div>
                                </label>
                                <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-52">
                                    <li className="bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm  rounded">User Name</li>
                                    <li className="bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm  rounded">
                                        <Link className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </Link>
                                    </li>
                                    <li className="bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm btn-ghost rounded"><Link>Logout</Link></li>
                                </ul>
                            </div>
                            <Link to='/login'>
                                <button className="bg-[#0FCFEC] py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">LOGIN</button>
                            </Link>
                        </div>
                    </div >
                </div>
            </section>
        </>
    );
};

export default Navbar;