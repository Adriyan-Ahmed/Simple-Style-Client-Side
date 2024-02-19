import SectionHead from "../../Shared/Section Head/SectionHead";
import { GiMedicalPack } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { GiClothes } from "react-icons/gi";

const WhyUs = () => {
    return (
        <>
            <div className="container mx-auto space-y-8 md:space-y-12 lg:space-y-14 ">
                <div>
                    <SectionHead SubTitle={'WHY CHOOSE US'} Title={'WHY CHOOSE US'} Description={"When you choose us, you'll feel the benefit of 10 years experience of Shopping. Because we know that how to handle it. With working knowledge of online, SEO and social media. "}></SectionHead>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="space-y-4 bg-[#0FCFEC] bg-opacity-15 py-8 px-8 rounded-md">
                        <div className="p-8 rounded-md bg-white">
                            <GiMedicalPack className="text-5xl text-[#0FCFEC] mx-auto"></GiMedicalPack>
                        </div>
                        <h1 className="text-lg font-bold">QUALITY PRODUCTS</h1>
                        <p className="text-sm xl:text-base font-medium leading-relaxed">High-quality materials and craftsmanship make our clothes stand out, ensuring you get lasting style and comfort.</p>
                    </div>
                    <div className="space-y-4 bg-[#F04141] bg-opacity-15 py-8 px-8 rounded-md">
                        <div className="p-8 rounded-md bg-white">
                            <GiClothes className="text-5xl text-[#F04141] mx-auto"></GiClothes>
                        </div>
                        <h1 className="text-lg font-bold">FASHION TRENDS AND VARIETY</h1>
                        <p className="text-sm xl:text-base font-medium leading-relaxed">Stay in vogue with our diverse range of styles, colors, and sizes, offering something for every fashion preference.</p>
                    </div>
                    <div className="space-y-4 bg-[#F47630] bg-opacity-15 py-8 px-8 rounded-md">
                        <div className="p-8 rounded-md bg-white">
                            <IoEye className="text-5xl text-[#F47630] mx-auto"></IoEye>
                        </div>
                        <h1 className="text-lg font-bold">CUSTOMER REVIEWS</h1>
                        <p className="text-sm xl:text-base font-medium leading-relaxed">Satisfied customers rave about our products, assuring you of positive shopping experience and stylish wardrobe additions.</p>
                    </div>
                    <div className="space-y-4 bg-[#0FEC2D] bg-opacity-15 py-8 px-8 rounded-md">
                        <div className="p-8 rounded-md bg-white">
                            <FaMoneyBillTransfer className="text-5xl text-[#0FEC2D] mx-auto"></FaMoneyBillTransfer>
                        </div>
                        <h1 className="text-lg font-bold">AFFORDABLE PRICING</h1>
                        <p className="text-sm xl:text-base font-medium leading-relaxed">Enjoy competitive prices and ongoing promotions, providing budget-friendly options and added value to your shopping.</p>
                    </div>
                    <div className="space-y-4 bg-[#F8AA1E] bg-opacity-15 py-8 px-8 rounded-md">
                        <div className="p-8 rounded-md bg-white">
                            <BiSupport className="text-5xl text-[#F8AA1E] mx-auto"></BiSupport>
                        </div>
                        <h1 className="text-lg font-bold">CUSTOMER SUPPORT</h1>
                        <p className="text-sm xl:text-base font-medium leading-relaxed">Count on our responsive customer service for quick and helpful assistance with any inquiries or concerns you may have.</p>
                    </div>
                    <div className="space-y-4 bg-[#A60FEC] bg-opacity-15 py-8 px-8 rounded-md">
                        <div className="p-8 rounded-md bg-white">
                            <FaHandshake className="text-5xl text-[#A60FEC] mx-auto"></FaHandshake>
                        </div>
                        <h1 className="text-lg font-bold">SUSTAINABLE PRACTICES</h1>
                        <p className="text-sm xl:text-base font-medium leading-relaxed">Choose us for eco-friendly materials, ethical sourcing, and a commitment to sustainable, responsible fashion choices.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyUs;