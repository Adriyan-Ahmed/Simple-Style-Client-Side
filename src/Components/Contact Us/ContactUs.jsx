import { useRef } from "react";
import { toast } from "react-toastify";
import SectionHead from "../../Shared/Section Head/SectionHead";




const ContactUs = () => {



    const form = useRef();



    const handleMessage = (e) => {



        e.preventDefault();



        emailjs.sendForm('service_vxw8rl1', 'template_xefodc9', form.current, 'waJ9Yf5ojORw9LwV5')



            .then((result) => {

                console.log(result.text);

                toast.success('Successfully Message Send')

            }, (error) => {

                toast.error("Opss ! Can't Able to Send Message ")

            });

    }
    return (
        <>
            <div className="container mx-auto">
                <div className="mx-4 space-y-8 md:space-y-12 lg:space-y-14">
                    <div>
                        <SectionHead SubTitle={'CONTACT'} Title={'CONTACT WITH US'} Description={"When you choose us, you'll feel the benefit of 10 years experience of Shopping. Because we know that how to handle it. With working knowledge of online, SEO and social media. "}></SectionHead>
                    </div>
                    <div className="md:px-6 md:py-12 mx-auto">
                        <div className="flex flex-col lg:flex-row gap-5">
                            <div className="flex-[3] lg:p-8 rounded-xl">
                                <h1 className="text-xl inter font-bold">Leave a Message</h1>
                                <form onSubmit={handleMessage} ref={form} className="mt-10 space-y-7">
                                    <div className="flex flex-col md:flex-row gap-3">
                                        <div className="form-control flex-1">
                                            <label className="label">
                                                <span className="label-text  font-medium lex">Name</span>
                                            </label>
                                            <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered inter text-black font-medium" required />
                                        </div>
                                        <div className="form-control flex-1">
                                            <label className="label">
                                                <span className="label-text  font-medium lex">E-mail</span>
                                            </label>
                                            <input type="email" name="email" placeholder="Enter Your E-mail Address" className="input input-bordered inter text-black font-medium" required />
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text  font-medium lex">Subject</span>
                                        </label>
                                        <input type="text" name="subject" placeholder="Type Your Subject" className="input input-bordered inter text-black font-medium" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text  font-medium lex">Message</span>
                                        </label>
                                        <textarea type="text" name="message" placeholder="Type Your Message" className="input input-bordered inter text-black font-medium h-72" required />
                                    </div>
                                    <div className="form-control">
                                        <button className="text-sm flex items-center justify-center gap-2 md:text-base inter rounded py-3 px-5 font-bold bg-[#0FCFEC] content-glow hover:bg-transparent hover:border-[#0FCFEC] text-white hover:border hover:duration-700 hover:text-[#0FCFEC] ">SEND MESSAGE</button>
                                    </div>
                                </form>
                            </div>
                            <div className="grid grid-cols-1 gap-6 ">

                                <div className="flex flex-col items-center justify-center text-center border-[#0FCFEC] border rounded-xl p-5">
                                    <span className="p-3 text-[#0FCFEC] rounded-full border-[#0FCFEC] border content-glow ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    </span>
                                    <div className="w-full space-y-4 mt-6">
                                        <div className="flex items-center justify-between w-full">
                                            <h4 className="text-sm lg:text-base inter font-bold">Country :</h4>
                                            <p className="text-sm lg:text-base roboto  font-medium">Bangladesh</p>
                                        </div>
                                        <div className="flex items-center justify-between w-full">
                                            <h4 className="text-sm lg:text-base inter font-bold">City :</h4>
                                            <p className="text-sm lg:text-base roboto  font-medium">Dhaka</p>
                                        </div>
                                        <div className="flex items-center justify-between w-full">
                                            <h4 className="text-sm lg:text-base inter font-bold">Street :</h4>
                                            <p className="text-sm lg:text-base roboto  font-medium">46/1 R.N.D Road, Dhaka-1211</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center justify-center text-center border-[#0FCFEC] border rounded-xl p-5 ">
                                    <span className="p-3 text-[#0FCFEC] rounded-full border-[#0FCFEC] border content-glow ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </span>

                                    <div className="w-full space-y-4 mt-6">
                                        <div className="flex items-center justify-between w-full">
                                            <h4 className="text-sm lg:text-base inter font-bold">E-mail :</h4>
                                            <p className="text-sm lg:text-base roboto  font-medium">simple.style@gmail.com</p>
                                        </div>
                                        <div className="flex items-center justify-between w-full">
                                            <h4 className="text-sm lg:text-base inter font-bold">Linkedin :</h4>
                                            <p className="text-sm lg:text-base roboto  font-medium">@Adriyan Ahmed</p>
                                        </div>
                                        <div className="flex items-center justify-between w-full">
                                            <h4 className="text-sm lg:text-base inter font-bold">Facebook :</h4>
                                            <p className="text-sm lg:text-base roboto  font-medium">@Adriyan Ahmed</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="flex flex-col items-center justify-center text-center border-[#0FCFEC] border rounded-xl p-5 ">
                                    <span className="p-3 text-[#0FCFEC] rounded-full border-[#0FCFEC] border content-glow ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </span>

                                    <div className="w-full space-y-4 mt-6">
                                        <div className="flex items-center justify-between w-full">
                                            <h4 className="text-sm lg:text-base inter font-bold">Number :</h4>
                                            <p className="text-sm lg:text-base roboto  font-medium">+880 19640-88195</p>
                                        </div>
                                        <div className="flex items-center justify-between w-full">
                                            <h4 className="text-sm lg:text-base inter font-bold">What's App :</h4>
                                            <p className="text-sm lg:text-base roboto  font-medium">+880 19640-88195</p>
                                        </div>
                                        <div className="flex items-center justify-between w-full">
                                            <h4 className="text-sm lg:text-base inter font-bold">Telegram :</h4>
                                            <p className="text-sm lg:text-base roboto  font-medium">+880 19640-88195</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;