import Intro from "./Intro";
import ProjectTile from "../components/ProjectTile";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="home">
      <Intro/>
      <Skills/>
      <ProjectTile/>
    </div>
  );
};

export default Home;
