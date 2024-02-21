import { FaStar } from "react-icons/fa";
import { TbBrandKbin } from "react-icons/tb";
import { MdOutlineBloodtype } from "react-icons/md";




const ProductCard = ({product}) => {



    const {image, name, price, brand, rating, type } = product;



    return (
        <>
            <div className="bg-white rounded-lg ">
                <div className="bg-base-200 rounded-tl-lg rounded-tr-lg">
                    <img className="h-72 py-4 mx-auto" src={image} alt="" />
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between pb-3 border-b">
                        <h2 className="text-[#F95442] text-xl font-bold ">${price}</h2>
                        <p className="flex items-center gap-2 font-semibold"><FaStar className="text-[#FFB23E] text-2xl "></FaStar>{rating}</p>
                    </div>
                    <div className="pt-3 space-y-4">
                        <h1 className="text-2xl font-bold">{name}</h1>
                        <p className="flex items-center gap-2 font-semibold"><TbBrandKbin className="text-[#A60FEC] text-2xl "></TbBrandKbin><span className="text-[#A60FEC]">Brand :</span>{brand}</p>
                        <p className="flex items-center gap-2 font-semibold"><MdOutlineBloodtype className="text-[#0FEC2D] text-2xl "></MdOutlineBloodtype><span className="text-[#0FEC2D]">Type :</span>{type}</p>
                    </div>
                    <div className="mt-6">
                        <button className="w-full bg-[#0FCFEC] rounded-md text-white font-bold py-3 text-sm md:text-base hover:bg-transparent hover:py-2.5 hover:border-[#0FCFEC] hover:border-2 hover:text-[#0FCFEC] duration-500 ">DETAILS</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;