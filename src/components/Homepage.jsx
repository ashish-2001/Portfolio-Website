import AboutMeSection from "./sections/AboutMeSection"
import ContactMe from "./sections/ContactSection"
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
            <ContactMe/>
        </div>
    )
}

export default HomePage