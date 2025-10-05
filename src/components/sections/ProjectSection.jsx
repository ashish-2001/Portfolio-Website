import React from "react"
import { FaLaptopCode } from "react-icons/fa"
import ProjectsInfo from "../data/ProjectsInformation"
import { Link } from "react-router-dom"

function ProjectsSection(){
    
    return(
        <div id="projects" className="bg-purple-800 w-full flex justify-center pt-8 pb-15">
            <div className="w-11/12 flex justify-center flex-col items-center gap-5">
                <div className="flex justify-center items-center text-white text-4xl gap-3 pb-5">
                    <FaLaptopCode className="text-5xl pt-3"/>
                    <span className="font-bold text-yellow-300">Projects</span>
                </div>
                <div className="">
                    <ul className=" grid grid-cols-3 gap-8">
                        {ProjectsInfo.map((ele, index) =>{
                            return(
                                <li key={index} className="rounded-xl relative hover:scale-105 duration-300 transition-all">
                                    <Link to={ele.link} className="flex flex-col justify-center items-center relative">
                                        <img src={ele.logo} className="w-[300px] h-[270px] rounded-xl relative"/>
                                        <div className="flex justify-between items-center px-2 bg-orange-400 absolute bottom-0 w-full rounded-b-xl h-[40px] text-xl font-bold text-gray-800 space-0">
                                            <span>{ele.projectsName}</span>
                                            <span className="text-red-600">{ele.stack}</span>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection