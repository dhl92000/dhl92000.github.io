// Project component
// import allProjects from '../projectData/projectData'

import { Link } from 'react-router-dom'

// if projectpage field is true, return below component with link.
// if it's false, return without the link.

const Project = ({ project }) => {
    function projectDetailsTrue() {
        return (
            <div class="project" id={project.name.toLowerCase().trim()}>
                <Link to={`/project/${project.name}`}>
                    <div class="projectImg">
                        <img src={project.image} />
                    </div>
                    <p class="projectTitle" id={project.name.toLowerCase().trim()}>
                        {project.name}
                    </p>
                    <p>
                        {project.description}
                    </p>
                </Link>

                {/* <a href="/html/retrosquares.html">
                </a> */}
            </div>
        )
    }

    function projectDetailsFalse() {
        return (
            <div class="project" id={project.name.toLowerCase().trim()}>

                <div class="projectImg">
                    <img src={project.image} />
                </div>
                <p class="projectTitle" id={project.name.toLowerCase().trim()}>
                    {project.name}
                </p>
                <p>
                    {project.description}
                </p>
            </div>
        )
    }

    return project.projectpage === true ? projectDetailsTrue() : projectDetailsFalse()


}

export default Project