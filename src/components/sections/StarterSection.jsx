import { Link } from "react-router-dom"
import TypeWriter from "../Typewriter"
import SocialMediaLinks from "../data/SocialMediaLinks"

function StarterSection(){

    return(
        <div id="home" className="w-full flex justify-center items-center">
            <div className="w-11/12 flex justify-between items-center mt-25 mb-25">
                <div>
                    <div className="flex flex-col gap-7">
                        <h1 className="text-5xl font-bold">Hi There,</h1>
                        <h1 className="text-5xl font-bold">I'm Ashish <span className="text-orange-400">Pal</span></h1>
                        <div className="flex items-center mb-7 gap-2">
                            <span className="text-2xl font-bold">I Am Into</span>
                            <span><TypeWriter/></span>
                        </div>
                    </div>
                    <Link to="/about" className="bg-blue-800 text-white py-2 px-6 font-semibold rounded-4xl text-lg shadow-lg shadow-blue-800/80">About Me</Link>
                    <ul className="flex gap-3 mt-10 mb-6">
                        {SocialMediaLinks.map((ele, index) =>{
                            return(
                                <li key={index} className="bg-black p-2 rounded-full">
                                    <Link to={ele.path} className="text-2xl text-blue-300 ">{ele.icon}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                        <img src="https://static.vecteezy.com/system/resources/previews/024/183/502/non_2x/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg" width={450} height={450} />
                </div>
            </div>
        </div>
    )
}

export default StarterSection