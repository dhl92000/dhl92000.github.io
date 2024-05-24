import { Link } from 'react-router-dom'


const Project = ({ project }) => {

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

export default Project