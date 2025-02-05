import { useState } from "react";
import "./ProjectPage.css";
// Project component
import Project from "./Project";
import { Link } from "react-router-dom";
import retrosqImg from "../projectData/first.png";
import pickleballImg from "../projectData/pickleball.png";
const Projects = ({ allProjects }) => {
  const [projects, setProjects] = useState(allProjects);

  return (
    <div class="projects">
      <div class="projectsHeader">
        <h1>Work</h1>
      </div>
      <div class="projectsDiv">
        <div class="project">
          <Link to={"/financetracker"}>
            <div class="projectImg">
              <img src={retrosqImg} alt='finance tracker application homepage'/>
            </div>
            <p class="projectTitle">
              <h2>Finance Tracker</h2>
            </p>
            <p>WEB DEVELOPMENT</p>
          </Link>
        </div>
        <div class="project">
          <Link to={"/retrosquares"}>
            <div class="projectImg">
              <img src={retrosqImg} alt='retrosquares application homepage'/>
            </div>
            <p class="projectTitle">
              <h2>Retrosquares</h2>
            </p>
            <p>WEB DEVELOPMENT</p>
          </Link>
        </div>
        <div class="project">
          <Link to={"/pickleball"}>
            <div class="projectImg">
              <img src={pickleballImg} alt='pickleball application homepage'/>
            </div>
            <p class="projectTitle">
              <h2>Pickleball Skies</h2>
            </p>
            <p>MOBILE DEVELOPMENT</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
