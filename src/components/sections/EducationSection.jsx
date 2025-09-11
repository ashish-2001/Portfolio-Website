import { FaGraduationCap } from "react-icons/fa"

function EducationSection(){

    return(
        <div id="education" className="bg-blue-100 w-full flex justify-center items-center">
            <div className="w-11/12 flex flex-col justify-center items-center gap-6 pt-6 pb-14">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center">
                        <FaGraduationCap className="text-6xl"/>
                        <span className="text-4xl font-bold">My <span className="text-purple-700">Education</span></span>
                    </div>
                    <p className="font-semibold text-lg">Education Is Not The Learning Of Facts. But The Training Of Minds To Think</p>
                </div>
                <div className="flex justify-start w-[900px] bg-white shadow-lg shadow-gray-100/10 rounded-xl gap-5 drop-shadow-xl/25 hover:scale-105 duration-300 transition-all">
                    <img src="https://ietagra.org/web/public/user/images/college.jpg" className="rounded-xl" height={200} width={200}/>
                    <div className="flex flex-col gap-2 pt-3">
                        <h1 className="text-3xl text-blue-950 font-bold">Bachelor Of Engineering In Computer Science</h1>
                        <p className="font-semibold">Institute of Engineering And Technology, Khandari Campus, Agra</p>
                        <span className="text-green-600 font-semibold text-xl">2020-24 | Graduated</span>
                    </div>
                </div>
                <div className="flex justify-start mb-10 w-[900px] bg-white rounded-xl gap-5 drop-shadow-xl/25 hover:scale-105 duration-300 transition-all">
                    <img src="https://www.joonsquare.com/usermanage/image/business/prasad-international-school-jaunpur-4962/prasad-international-school-jaunpur-prasad-01.jpg" width={200} height={200} className="rounded-xl"/>
                    <div className=" flex flex-col gap-2 mb-7 pt-3">
                        <h1 className="text-3xl text-blue-950 font-bold">12th Science</h1>
                        <p className="font-semibold">PRASAD INTERNATIONAL SCHOOL, JAUNPUR, U.P, INDIA | CBSE</p>
                        <span className="text-green-600 text-xl font-semibold">2017-19 | Completed</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationSection