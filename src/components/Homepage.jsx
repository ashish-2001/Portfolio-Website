import AboutMeSection from "./sections/AboutMeSection"
import EducationSection from "./sections/EducationSection"
import ExperienceSection from "./sections/ExperienceSection"
import ProjectsSection from "./sections/ProjectSection"
import Skills from "./sections/SkillsSection"
import StarterSection from "./sections/StarterSection"

function HomePage(){
    return(
        <div>
            <StarterSection/>
            <AboutMeSection/>
            <Skills/>
            <EducationSection/>
            <ProjectsSection/>
            <ExperienceSection/>
        </div>
    )
}

export default HomePage