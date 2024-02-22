const Subscribe = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="mx-4">
                    <div className="bg-[#A60FEC] bg-opacity-15">
                        <form>
                            <div className="flex items-center w-full">
                                <div className="relative input-box">
                                    <input className="border-2 w-full py-2.5 rounded-md px-5 outline-none" type="email" name="email" required />
                                    <span className="absolute left-3 text-gray-400 duration-300 ">YOUR E-MAIL</span>
                                </div>
                                <div>
                                    <button className="bg-[#0FCFEC] rounded-md text-white font-bold py-3 px-12 text-sm md:text-base hover:bg-transparent hover:py-2.5 hover:border-[#0FCFEC] hover:border-2 hover:text-[#0FCFEC] duration-500 bg-opacity-90"></button>
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