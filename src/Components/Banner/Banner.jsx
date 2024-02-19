const Banner = () => {
    return (
        <>
            <div className=" bg-[#0FCFEC] bg-opacity-15 ">
                <div className=" container mx-auto ">
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0 py-10">
                        <div className="flex-1 text-center md:text-left mx-4">
                            <div className=" xl:w-[600px] mx-auto ">
                                <h5 className=" text-base md:text-lg xl:text-xl font-semibold text-[#F95442] ">NEW COLLECTION</h5>
                                <h1 className="text-2xl md:text-[23px] lg:text-3xl xl:text-4xl xl:leading-normal font-bold mt-3 mb-6 ">FIND THE <span className=" text-[#0FCFEC] ">NEW COLLECTION</span> IN THIS SEASON.</h1>
                                <p className="text-sm md:text-sm xl:text-base font-medium">New season and new style only for you in our collection. Fall in love with up to 70% off in Winter collection.</p>
                                <div className="mt-3 lg:mt-5 xl:mt-6">
                                    <button className="text-sm lg:text-base font-semibold py-3 px-6 border-2">Shop Our Collection</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 mx-4">
                            <img className="mx-auto" src="https://i.ibb.co/8XyBBvy/Simple-Style-Banner-1-removebg.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;