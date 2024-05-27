import { useState } from 'react'
import './ProjectPage.css'
// Project component
import Project from "./Project"


const Projects = ({ allProjects }) => {
    const [projects, setProjects] = useState(allProjects)

    return (
        <div class="projects">
            <div class="projectsHeader">
                <h1>Work</h1>
            </div>
            <div class="projectsDiv">
            {
                projects.map((project) => {
                    return (
                        <Project project={project} key={project}/>
                    )
                })
            }
            </div>

        </div>
    )
}

export default Projects