import { FaLaptopCode } from "react-icons/fa"
import SkillsInfo from "../data/SkillsIcon"

function Skills(){

    return(
        <div className="w-full flex justify-center items-center bg-purple-800">
            <div className="w-11/12 flex flex-col justify-center items-center gap-4 mb-10">
                <div className="flex font-bold text-4xl text-white items-center gap-8 justify-center mt-10">
                    <FaLaptopCode className="text-6xl"/>
                    <h>Skills & <span className="text-yellow-300">{" "} abilities</span></h>
                </div>
                <div className="bg-purple-950 rounded-2xl px-15 py-10">
                    <ul className="grid grid-cols-3 gap-10 text-white">
                        {SkillsInfo.map((ele, index) =>{
                            return(
                                <li key={index} className="bg-black rounded-xl p-4 flex justify-between font-bold text-xl items-center flex-col">
                                    <div className="text-6xl text-blue-300">
                                        {ele.logo}
                                    </div>
                                    <div>
                                        {ele.name}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills