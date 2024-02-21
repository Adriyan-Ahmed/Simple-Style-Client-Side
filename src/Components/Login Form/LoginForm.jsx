import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa6";

const LoginForm = () => {
    return (
        <>
            <div className='mx-4'>
                <div className='flex flex-col-reverse lg:flex-row lg:items-center gap-7 lg:gap-0 w-full'>
                    <div className='lg:flex-1'>
                        <div className='py-8 px-6 shadow-xl w-full md:w-8/12 mx-auto bg-base-100 rounded-md space-y-8 '>
                            <div className='space-y-2'>
                                <h1 className='text-2xl font-bold'>LOGIN</h1>
                                <p className='font-medium text-gray-400'>Doesn't have an account yet? <Link className='text-[#0FCFEC] font-semibold underline'>Sign Up</Link> </p>
                            </div>
                            <div>
                                <form className='space-y-5'>
                                    <div className='space-y-3'>
                                        <h6 className='font-bold'>Name</h6>
                                        <div className="relative input-box">
                                            <input className="border-2 w-full py-2.5 rounded-md px-5 outline-none" type="text" name="password" required />
                                            <span className="absolute left-3 text-gray-400 duration-300 ">YOUR NAME</span>
                                        </div>
                                    </div>
                                    <div className='space-y-3'>
                                        <h6 className='font-bold'>E-mail Address</h6>
                                        <div className="relative input-box">
                                            <input className="border-2 w-full py-2.5 rounded-md px-5 outline-none" type="text" name="password" required />
                                            <span className="absolute left-3 text-gray-400 duration-300 ">YOUR E-MAIL</span>
                                        </div>
                                    </div>
                                    <div className='space-y-3'>
                                        <h6 className='font-bold'>Password</h6>
                                        <div className="relative input-box">
                                            <input className="border-2 w-full py-2.5 rounded-md px-5 outline-none" type="text" name="password" required />
                                            <span className="absolute left-3 text-gray-400 duration-300 ">YOUR PASSWORD</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="bg-[#0FCFEC] py-2 md:py-3 w-full text-white font-bold  rounded">LOGIN</button>
                                    </div>
                                </form>
                            </div>
                            <div className='flex items-center'>
                                <div className='border-2 w-full'></div>
                                <span className='font-medium text-gray-400 w-full text-center'>or login with</span>
                                <div className='border-2 w-full'></div>
                            </div>
                            <div>
                                <button className='flex items-center justify-center gap-3 border-[#0FCFEC] border-2 py-2.5 w-full rounded-md '>
                                    <FaGoogle></FaGoogle>
                                    <span className='font-bold text-[#0FCFEC] '>GOOGLE</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex-1'>
                        <img className='w-full md:w-10/12 mx-auto' src="https://i.ibb.co/rfSHjph/ezgif-5-125125aa26.gif" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;