const Subscribe = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="mx-4">
                    <div className="bg-[#A60FEC] bg-opacity-15 md:py-28 md:px-14 xl:p-36 rounded-lg">
                        <h1 className="text-2xl md:text-[23px] lg:text-3xl xl:text-4xl xl:leading-normal font-bold mt-4 mb-6 w-max mx-auto ">Subscribe Now to Our <span className="text-[#A60FEC]">Newsletter!</span></h1>
                        <form>
                            <div className="flex items-center xl:w-7/12 mx-auto">
                                <div className="relative input-box w-full">
                                    <input className="border-l-2 border-t-2 border-b-2 w-full py-2.5 rounded-tl-md rounded-bl-md px-5 outline-none" type="email" name="email" required />
                                    <span className="absolute left-3 text-gray-400 duration-300 ">YOUR E-MAIL</span>
                                </div>
                                <div>
                                    <button className="bg-[#A60FEC] rounded-tr-md rounded-br-md text-white font-bold py-3 px-12 text-sm md:text-base hover:bg-transparent hover:py-2.5 hover:border-[#0FCFEC] hover:border-2 hover:text-[#0FCFEC] duration-500 bg-opacity-90">SUBSCRIBE</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Subscribe;