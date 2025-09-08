import AboutMeSection from "./sections/AboutMeSection"
import EducationSection from "./sections/EducationSection"
import Skills from "./sections/SkillsSection"
import StarterSection from "./sections/StarterSection"

function HomePage(){
    return(
        <div>
            <StarterSection/>
            <AboutMeSection/>
            <Skills/>
            <EducationSection/>
        </div>
    )
}

export default HomePage