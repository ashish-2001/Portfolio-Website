import { FaGraduationCap } from "react-icons/fa"

function EducationSection(){

    return(
        <div className="bg-blue-100 w-full">
            <div className="w-11/12">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center">
                        <FaGraduationCap/>
                        <span>My <span>Education</span></span>
                    </div>
                    <p>Education Is Not The Learning Of Facts. But The Training Of Minds To Think</p>
                </div>
                <div className="flex justify-center items-center bg-white shadow-lg shadow-gray-100/10">
                    <img/>
                    <div>
                        <h1>Bachelor Of Engineering In Computer Science</h1>
                        <p>Institute of Engineering And Technology, Khandari Campus, Agra</p>
                        <span>2020-24 | GRADUATED</span>
                    </div>
                </div>
                <div className="flex justify-center items-center bg-white">
                    <img/>
                    <div>
                        <h1></h1>
                        <p></p>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationSection