import { useContext } from "react";
import { AuthContext } from "../../Contexts/Authentication/Authentication";
import axios from "axios";
import { toast } from "react-toastify";

const ProductAddingForm = () => {


    const { User } = useContext(AuthContext);


    const handleAddProduct = (e) => {

        e.preventDefault();

        const form = e.target;

        const name = form.name.value;

        const image = form.image.value;

        const type = form.type.value;

        const price = form.price.value;

        const rating = form.rating.value;

        const brand = form.brand.value;

        const details = form.details.value

        const email = User.email

        const product = { image, name, type, price, rating, brand, details, email }





        axios.post(`http://localhost:5000/api/v1/products`, product)

        .then(res => {

            if(res.status == 'ok'){

                toast.success('Congratulations ! Your Product Added successfully .')

            }

        })

        


        .catch(err => {
            
            if(err){

                toast.error('There is a Trouble to Add Your Product');

            }

        })

    }


    return (
        <>
            <div className="container mx-auto">
                <div className="mx-4">
                    <div className="p-8 border-2 rounded-md">
                        <form onSubmit={handleAddProduct} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:items-center justify-between gap-6'>
                                <div className='space-y-3 flex-1'>
                                    <h6 className='font-bold'>Product Name</h6>
                                    <div className="relative input-box">
                                        <input className="border-2 w-full py-2.5 rounded-md px-5 outline-none" type="text" name="name" required />
                                        <span className="absolute left-3 text-gray-400 duration-300 ">PRODUCT NAME</span>
                                    </div>
                                </div>
                                <div className='space-y-3 flex-1'>
                                    <h6 className='font-bold'>Product Image URL</h6>
                                    <div className="relative input-box">
                                        <input className="border-2 w-full py-2.5 rounded-md px-5 outline-none" type="text" name="image" required />
                                        <span className="absolute left-3 text-gray-400 duration-300 ">PRODUCT IMAGE URL</span>
                                    </div>
                                </div>
                            <div className='space-y-3'>
                                <h6 className='font-bold'>Product Type</h6>
                                <div className="relative input-box">
                                    <input className="border-2 w-full py-2.5 rounded-md px-5 outline-none" type="text" name="type" required />
                                    <span className="absolute left-3 text-gray-400 duration-300 ">PRODUCT TYPE</span>
                                </div>
                            </div>
                            <div className='space-y-3'>
                                <h6 className='font-bold'>Product Price</h6>
                                <div className="relative input-box">
                                    <input className="border-2 w-full py-2.5 rounded-md px-5 outline-none" type="text" name="price" required />
                                    <span className="absolute left-3 text-gray-400 duration-300 ">PRODUCT PRICE</span>
                                </div>
                            </div>
                            <div className='space-y-3'>
                                <h6 className='font-bold'>Product Rating</h6>
                                <div className="relative input-box">
                                    <input className="border-2 w-full py-2.5 rounded-md px-5 outline-none" type="text" name="rating" required />
                                    <span className="absolute left-3 text-gray-400 duration-300 ">PRODUCT RATING</span>
                                </div>
                            </div>
                            <div className='space-y-3'>
                                <h6 className='font-bold'>Product Brand Name</h6>
                                <div className="relative input-box">
                                    <input className="border-2 w-full py-2.5 rounded-md px-5 outline-none" type="text" name="brand" required />
                                    <span className="absolute left-3 text-gray-400 duration-300 ">PRODUCT BRAND NAME</span>
                                </div>
                            </div>

                            <div className="form-control md:col-span-2 lg:col-span-3">
                                <label className="label">
                                    <h6 className='font-bold'>Product Details</h6>
                                </label>
                                <textarea name="details" className=" text-[10px] md:text-base lg:text-lg py-2 md:py-4 rounded-lg px-6 border-2 outline-none " rows="5" placeholder="PRODUCT DETAILS"></textarea>
                            </div>
                            <button className=" md:col-span-2 lg:col-span-3 bg-[#0FCFEC] py-3 text-white font-bold text-sm md:text-base rounded">ADD PRODUCT</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductAddingForm;