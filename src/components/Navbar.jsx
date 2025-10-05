import React from "react"
import { Link } from "react-scroll"
import logo from "../assets/logo.png"
import NavbarLinks from "./data/NavbarLinks"

function Navbar(){

    function handleButton(){
        
    }

    return(
        <div className=" sticky z-50 top-0 w-full h-[70px] bg-white flex flex-col justify-center items-center shadow-md shadow-gray-200">
            <nav className="flex w-11/12 justify-between items-center pt-[10px]">
                <img src={logo}/>
                <ul className="flex font-semibold text-gray-700 text-xl gap-4">
                    {NavbarLinks.map((link, index)=> {
                        return(
                            <li key={index} className="relative group ">
                                <Link 
                                    to={link.path}
                                    activeClass="active-link"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="pb-1 relative cursor-pointer transition-all duration-300" 
                                    onClick={handleButton}
                                >{link.title}
                                    <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar