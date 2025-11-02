import React from "react"
import { FaUser } from "react-icons/fa"
import logo from "../../assets/logo.png"
import AshishPic from "../../assets/AshishPic.jpg";

function AboutMeSection(){

    function handleResumeButton(){
        window.open(`${logo}`, "_blank")
    }

    return(
        <div id="about" className="w-full flex justify-center items-center">
            <div className="w-11/12 flex flex-col justify-center items-center">
                <div className="flex items-center gap-2">
                    <FaUser className="text-4xl"/>
                    <h1 className="text-4xl font-bold">
                        About {" "}
                        <span className="text-orange-500">
                            Me
                        </span>
                    </h1>
                </div>
                <div className="flex justify-between mt-14 gap-20 mb-20">
                    <div>
                        <img src={AshishPic} className="rounded-full w-[400px] h-[400px]" />
                    </div>
                    <div className="flex flex-col gap-10 mt-7">
                        <div>
                            <h1 className="text-3xl font-bold">I am Ashish</h1>
                            <p className="font-semibold ">Full Stack Developer | Devops</p>
                        </div>
                        <div className=" flex flex-col gap-3">
                            <p>I am fullstack developer and devops engineer. I am <span>{" "} <br/>Computer Science and Engineering {" "}</span> graduated from <span>{" "} I.E.T Khandari Campus, Agra. <br></br> {" "}</span>
                                I am passionate about learning and improving my coding skills <br></br> and Developing applications & Websites using MERN Stack.
                            </p>
                            <p><span className="text-blue-600 font-semibold">Email: </span> ashishpaljnpup@gamil.com</p>
                            <p><span className="text-blue-600 font-semibold">Place: </span> Lucknow, U.P, India</p>
                        </div>
                        <div>
                            <button onClick={handleResumeButton} className="bg-blue-800 px-6 py-2 rounded-md text-white font-bold shadow-lg shadow-blue-800/80 cursor-pointer">Resume</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMeSection