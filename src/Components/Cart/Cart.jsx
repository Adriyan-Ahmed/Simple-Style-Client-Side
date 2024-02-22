// ------------------------------ //
// --------Imported Items-------- //
// ------------------------------ //

import { Avatar, Badge, Button, Popover, Table } from 'keep-react'
import { ArrowsDownUp, Crown, Cube, DotsThreeOutline, Pencil, Trash } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/Authentication/Authentication';
import axios from 'axios';
import { MdTipsAndUpdates } from "react-icons/md";
import { IoTrashBinSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';





const Cart = () => {



    const [products, setProducts] = useState([]);



    const { User } = useContext(AuthContext);



    useEffect(() => {

        axios.get(`http://localhost:5000/api/v1/cart?email=${User?.email}`)

            .then(res => {

                setProducts(res.data)

            })

    }, [])

    console.log(products);





    return (
        <>
            <div className='container mx-auto'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th className='text-base font-bold '>Product</th>
                                <th className='text-base font-bold '>Price</th>
                                <th className='text-base font-bold '>Type</th>
                                <th className='text-base font-bold '>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(product => <tr key={product._id}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="">
                                                <div className="w-40 h-28 bg-[#F5F6F6] rounded-md">
                                                    <img className='h-full py-2 mx-auto' src={product.product.image} alt="Product's Image" />
                                                </div>
                                            </div>
                                            <div className='space-y-4'>
                                                <div className="font-bold">{product.product.type}</div>
                                                <div className="font bold text-gray-400">{product.product.brand}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className='font-bold'>{product.product.price}</span>
                                    </td>
                                    <td className=''>{product.product.type}</td>
                                    <th>
                                        <Link to={`/update-product/${product._id}`} >
                                            <button className=" text-white py-3 px-7 text-xl rounded-md bg-[#0FEC2D] flex items-center gap-2 "><MdTipsAndUpdates></MdTipsAndUpdates> <span className='text-base'>Update</span></button>
                                        </Link>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Cart;