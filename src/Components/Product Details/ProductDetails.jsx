// --------------------------- //
// --Imported Files & Hooks -- //
// --------------------------- //

import { LuDollarSign } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai";
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { TbBrandKbin } from "react-icons/tb";
import { MdOutlineBloodtype } from "react-icons/md";




const ProductDetails = () => {



    const [product, setProduct] = useState({});



    const {id} = useParams();



    useEffect(() => {

        axios.get(`http://localhost:5000/api/v1/product?id=${id}`)

        .then(res => {

            setProduct(res.data)

        })

    }, [])




    return (
        <>
            <div className="container mx-auto">
                <div className="mx-4">
                    <div className="flex flex-col lg:flex-row items-start justify-center md:justify-normal gap-5">
                        <div className="flex-1 space-y-4 md:space-y-2 lg:space-y-8 w-full">
                            <div className="bg-[#F5F6F6] rounded-tl-lg rounded-tr-lg w-full">
                                <img className="h-[450px] md:h-[500px] py-4 mx-auto" src={product.image} alt="" />
                            </div>
                        </div>
                        <div className="flex-1 space-y-4 md:space-y-6 lg:space-y-8 w-full">
                            <div className=" py-4 bg-base-300 px-6 rounded-md">
                                <h1 className=" text-xl lg:text-2xl xl:text-3xl font-semibold ">{product.name}</h1>
                            </div>
                            <p className="text-[14px] md:text-[14px] lg:text-[16px] leading-6 md:leading-7 lg:leading-8 ">{product.details}</p>
                            <div className="flex items-center gap-4">
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F5C332]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F5C332]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F5C332]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F5C332]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F5C332]" checked />
                                </div>
                                <div>({product.rating})</div>
                            </div>
                            <div className="space-y-4 md:space-y-6 lg:space-y-8">
                                <p className="flex items-center gap-2 font-semibold"><TbBrandKbin className="text-[#A60FEC] text-2xl "></TbBrandKbin><span className="text-[#A60FEC]">Brand :</span>{product.brand}</p>
                                <p className="flex items-center gap-2 font-semibold"><MdOutlineBloodtype className="text-[#0FEC2D] text-2xl "></MdOutlineBloodtype><span className="text-[#0FEC2D]">Type :</span>{product.type}</p>
                            </div>
                            <div className="flex items-center gap-2 font-bold lg:text-lg text-[#F04141]">
                                <LuDollarSign className=" text-[#F04141] text-2xl "></LuDollarSign>
                                <h1>PRICE :</h1>
                                <span className=" text-[#F04141] ">{product.price} </span>
                            </div>
                            <div className="flex items-center justify-center md:justify-normal gap-5">
                                <button className="w-full bg-[#0FCFEC] rounded-md text-white font-bold py-3 text-sm md:text-base hover:bg-transparent hover:py-2.5 hover:border-[#0FCFEC] hover:border-2 hover:text-[#0FCFEC] duration-500 flex items-center justify-center gap-3 " > ADD TO CART <AiOutlineShoppingCart className=" text-lg md:text-xl"></AiOutlineShoppingCart></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default ProductDetails;