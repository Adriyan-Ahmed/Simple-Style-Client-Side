import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Error = () => {
    return (
        <>
            <section className='min-h-screen flex flex-col lg:flex-row items-center justify-center  gap-5 font-primary container mx-auto' >
                <div className='text-center lg:text-left lg:ml-40  lg:flex-1 space-y-4 md:spacey-y-6 '>
                    <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold'>OPPS... <span className="text-[#A60FEC]">You're Lost</span></h1>
                    <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-6 md:leading-7 lg:leading-9">Uh oh, we can't seem to find the page you're looking for. <br />Try goring back to page or contact us for more information.</p>
                    <Link to="/">
                        <button className=" bg-[#A60FEC] rounded-md text-white font-bold py-3 px-12 text-sm md:text-base hover:bg-transparent hover:py-2.5 hover:border-[#A60FEC] hover:border-2 hover:text-[#A60FEC] duration-500 flex items-center gap-3 ">GO BACK TO HOME <FaArrowRightLong className="text-xl"></FaArrowRightLong></button>
                    </Link>
                </div>
                <div className='w-full lg:flex-1'>
                    <img className='w-10/12 mx-auto' src="https://i.ibb.co/bX7NBTJ/ezgif-1-d7dfbd4dac.gif" alt="" />
                </div>
            </section>
        </>
    );
};

export default Error;