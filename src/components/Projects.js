import { useState } from 'react'
import './ProjectPage.css'
// Project component
import Project from "./Project"


const Projects = ({ allProjects }) => {
    const [projects, setProjects] = useState(allProjects)

    return (
        <div class="projects">
            <div class="projectsHeader">
                <h1>Work<span style={{ color: "#0E8D44", fontSize: "1.5em" }}>.</span></h1>
            </div>
            <div class="projectsDiv">
            {
                projects.map((project) => {
                    return (
                        <Project project={project} />
                    )
                })
            }
            </div>

        </div>
    )
}

export default Projects