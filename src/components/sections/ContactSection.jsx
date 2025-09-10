import { useState } from "react"
import { useForm } from "react-hook-form"
import { FaUser } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { MdHeadsetMic, MdOutlineEmail } from "react-icons/md"
import { RiMessage2Fill } from "react-icons/ri";


function ContactMe(){

    const [loading, setLoading] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful }
    } = useForm();

    const submitContactForm = async() =>{

    }

    return(
        <div className="bg-blue-200">
            <div className="flex flex-col justify-center items-center pt-8">
                <div className="flex items-center text-4xl font-bold">
                    <MdHeadsetMic/>
                    <span>Get In <span className="text-purple-700">Touch</span></span>
                </div>
                <div className="flex justify-center items-center bg-white rounded-2xl gap-10 mt-10 mb-10">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOAXcOkHyvvRrDbMnDmc2Ck4XnYaafyLJ_Zg&s" className="rounded-l-2xl w-[400px]"/>
                    <form onSubmit={handleSubmit(submitContactForm)} className="pt-5">
                        <div className="flex flex-col bg-white rounded-xl gap-10 p-6">
                            <div className="flex justify-center items-center relative border-1 border-gray-600 p-3 gap-3 rounded-md bg-blue-100 text-xl">
                                <FaUser className="text-blue-800"/>
                                <input 
                                    type="text"
                                    placeholder="Name"
                                    className="w-[400px] form-style outline-none"
                                    id="senderName"
                                    name="senderName"
                                    {...register("senderName", { required: true})}
                                />
                                {errors.senderName && (
                                    <span className="absolute left-0 -bottom-4 text-[12px] text-red-600 font-semibold">Please Enter Your Name!</span>
                                )}
                            </div>
                            <div className="flex justify-center relative items-center border-1 border-gray-600 rounded-md p-3 gap-3 bg-blue-100 text-xl">
                                <MdOutlineEmail className="text-red-600"/>
                                <input 
                                    type="email"
                                    placeholder="Email"
                                    className="w-[400px] form-style outline-none"
                                    id="email"
                                    name="email"
                                    {...register("email", { required: true})}
                                />
                                {errors.email && (
                                    <span className="absolute left-0 -bottom-4 text-[12px] text-red-600 font-semibold">Enter Your Email!</span>
                                )}
                            </div>
                            <div className="flex justify-center items-center relative border-1 border-gray-600 rounded-md p-3 gap-3 bg-blue-100 text-xl">
                                <IoCall className="text-green-600"/>
                                <input 
                                    placeholder="Phone Number" 
                                    className="w-[400px] form-style outline-none"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    {...register("phoneNumber", { required: true })}
                                />
                                {errors.phoneNumber && (
                                    <span className="absolute left-0 -bottom-4 text-[12px] text-red-600 font-semibold">Enter Your Phone Number!</span>
                                )}
                            </div>
                            <div className="flex justify-center border-1 relative border-gray-600 rounded-md  gap-3 bg-blue-100 h-[150px] text-xl pt-2">
                                <RiMessage2Fill className="mt-[6px] text-blue-700"/>
                                <textarea 
                                    placeholder="Message" 
                                    className=" w-[400px] form-style outline-none"
                                    id="message"
                                    name="message"
                                    {...register("message", { required: true })}
                                />
                                {errors.message && (
                                    <span className="absolute left-0 -bottom-4 text-[12px] text-red-600 font-semibold">Enter your message!</span>
                                )}
                            </div>
                            <div className="flex justify-end items-center">
                                <button className="flex items-center cursor-pointer hover:scale-102 transition-all duration-100 bg-blue-700 px-4 py-2 rounded-xl text-xl text-white font-semibold shadow-lg shadow-blue-800/80 gap-1">Submit <LuSend /></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactMe