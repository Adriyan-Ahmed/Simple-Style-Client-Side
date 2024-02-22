const AboutUs = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="mx-4">
                    <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-6s">
                        <div className="flex-1 space-y-8">
                            <div className="pl-6 border-[#0FCFEC] border-l-4 ">
                                <h5 className="text-base md:text-lg xl:text-xl font-semibold text-[#0FCFEC] ">WHO WE ARE ?</h5>
                                <h1 className="text-2xl md:text-[23px] lg:text-3xl xl:text-4xl xl:leading-normal font-bold mt-4 mb-6 mx-auto ">ABOUT US</h1>
                            </div>
                            <div className="space-y-5">
                                <p className="text-sm xl:text-base font-medium leading-relaxed">Welcome to Simple Style, your go-to destination for fashion that blends style and comfort seamlessly. At Simple Style, we curate a collection of high-quality, trendy, and affordable clothing to empower you to express your unique identity with confidence.</p>
                                <p className="text-sm xl:text-base font-medium leading-relaxed">Our commitment to quality craftsmanship, sustainability, and attention to detail sets us apart. From everyday casual wear to elegant occasion outfits, our range is designed for diverse tastes.</p>
                            </div>
                            <div>
                                <button className=" bg-[#0FCFEC] rounded text-white font-bold py-3 px-10 text-sm md:text-base hover:bg-transparent hover:py-2.5 hover:border-[#0FCFEC] hover:border-2 hover:text-[#0FCFEC] duration-500 ">Learn More</button>
                            </div>
                        </div>
                        <div className="flex-1">
                            <img className="w-full mx-auto" src="https://i.ibb.co/0YDhk9J/seamstress-dressmakers-designers-working-tailor-shop-1262-20678-removebg-preview.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;