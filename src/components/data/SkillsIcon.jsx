import React from "react";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { FaCss3, FaDocker, FaGithub, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiKubernetes, SiRedux } from "react-icons/si";

const SkillsInfo = [
    {
        logo: <FaReact/>,
        name: "ReactJs"
    },
    {
        logo: <SiExpress/>,
        name: "ExpressJs"
    },
    {
        logo: <FaNode/>,
        name: "NodeJs"
    },
    {
        logo: <SiRedux/>,
        name: "Redux"
    },
    {
        logo: <FaHtml5/>,
        name: "HTML5"
    },
    {
        logo: <FaCss3/>,
        name: "CSS3"
    },
    {
        logo: <IoLogoJavascript/>,
        name: "Javascript"
    },
    {
        logo: <BiLogoMongodb/>,
        name: "MongoDB"
    },
    {
        logo: <BiLogoPostgresql/>,
        name: "PostgreSQL"
    },
    {
        logo: <FaDocker/>,
        name: "Docker"
    },
    {
        logo: <SiKubernetes/>,
        name: "Kubernetes"
    },
    {
        logo: <FaGithub/>,
        name: "GitHub"
    }
]

export default SkillsInfo