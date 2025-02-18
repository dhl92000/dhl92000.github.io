import { Link } from "react-router-dom";
const ProjectTile = () => {
  return (
    <div className="project-tile">
      <h1>Projects</h1>
      <div className="project-tile-container">
        <Link to="/financetracker" className="project-tile1">
          <h2>Finance Tracker</h2>
          <h4>WEB DEVELOPMENT</h4>
          <p>
            A React application that allows users to track their expenses.
            Created using React and NextUI. Written with TypeScript.
          </p>
        </Link>

        <Link to="/retrosquares" className="project-tile2">
          <h2>Retrosquares</h2>
          <h4>WEB DEVELOPMENT</h4>
          <p>
            A full stack application where users can share photos in a fun way.
            Built with ExpressJS, AWS, and React.
          </p>
        </Link>

        <Link to="/pickleball" className="project-tile3">
          <h2>Pickleball Skies</h2>
          <h4>MOBILE DEVELOPMENT</h4>
          <p>
            A simple React Native application that helps pickleball players
            determine ideal weather conditions.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectTile;
