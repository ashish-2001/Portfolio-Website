import { Route, Routes } from "react-router-dom"
import AboutMeSection from "./sections/AboutMeSection"
import ContactMe from "./sections/ContactSection"
import EducationSection from "./sections/EducationSection"
import ExperienceSection from "./sections/ExperienceSection"
import ProjectsSection from "./sections/ProjectSection"
import Skills from "./sections/SkillsSection"
import StarterSection from "./sections/StarterSection"
import Navbar from "./Navbar"

function HomePage(){
            
    return(
        <div>
            <Navbar/>
            <section id="home">
                <StarterSection/>
            </section>
            <section id="about">
                <AboutMeSection/>
            </section>
            <section id="skills">
                <Skills/>
            </section>
            <section id="education">
                <EducationSection/>
            </section>
            <section id="projects">
                <ProjectsSection/>
            </section>
            <section id="experience">
                <ExperienceSection/>
            </section>
            <section id="contact">
                <ContactMe/>
            </section>
        </div>
    )
}

export default HomePage