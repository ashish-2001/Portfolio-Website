import { FaChevronRight, FaGithub, FaHeart, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"
import NavbarLinks from "./data/NavbarLinks"
import { Link } from "react-router-dom"
import { IoCall } from "react-icons/io5"
import { CgMail } from "react-icons/cg"
import { FaLocationDot } from "react-icons/fa6"

function Footer(){

    return(
        <div className="w-full flex flex-col justify-center items-center bg-blue-900">
            <div className="flex justify-between  flex-row text-white w-11/12 pt-8 text-xl">
                <div>
                    <h1 className="text-3xl font-semibold">Ashish's Portfolio</h1>
                    <p className="pt-6">Thank you for visiting my portfolio website.<br/>
                    connect me over social media</p>
                </div>
                <div>
                    <h1 className="text-3xl font-semibold">Links</h1>
                    <ul className="pt-6">
                        {NavbarLinks.map((link, index) => {
                        return(
                            <li key={index}>
                                <div className="flex justify-start items-center gap-3">
                                    <FaChevronRight className="rounded-full bg-white text-black text-[12px] font-semibold p-[1px]"/>
                                    <Link to={link.path}>{link.title}</Link>
                                </div>
                            </li>
                        )
                    })}
                    </ul>
                </div>
                <div>
                    <h1 className="text-3xl font-semibold">Contact Info</h1>
                    <div className="flex flex-col pt-6 gap-4">
                        <p className="flex justify-start items-center gap-2">
                            <IoCall className="text-green-400 text-2xl"/>
                            <span>+91-XXXX-XXXX-XX</span>
                        </p>
                        <p className="flex justify-start items-center gap-2">
                            <CgMail className="text-red-500 text-2xl"/>
                            <span>ashishpaljnpup@gamil.com</span>
                        </p>
                        <p className="flex justify-start items-center gap-2">
                            <FaLocationDot className="text-red-500"/>Lucknow, U.P, India
                        </p>
                        <div className="flex gap-4 text-2xl">
                            <FaLinkedin/>
                            <FaGithub/>
                            <CgMail/>
                            <FaTwitterSquare/>
                            <FaInstagramSquare/>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="h-[1px] w-11/12 text-white mt-10"></hr>
            <div className="pt-4 pb-4">
                <span className="flex justify-center items-center text-white font-semibold gap-2">
                    Designed with <FaHeart className=" text-red-700"/> by 
                    <span>
                        Ashish Pal
                    </span>
                </span>
            </div>
        </div>
    )
}

export default Footer