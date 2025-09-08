import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import NavbarLinks from "./data/NavbarLinks"

function Navbar(){

    return(
        <div className="w-full h-[70px] bg-white flex flex-col justify-center items-center shadow-md shadow-gray-200">
            <nav className="flex w-11/12 justify-between items-center pt-[10px]">
                <img src={logo}/>
                <ul className="flex font-semibold text-gray-700 text-xl gap-4">
                    {NavbarLinks.map((link, index)=> {
                        return(
                            <li key={index} className="relative group hover:text-blue-600 transition-all duration-300">
                                    <Link to={`${link.path}`} className="relative">{link.title}</Link>
                                    <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar