import Chip from "../components/Chip";
const chips = {
  JavaScript: "devicon-javascript-plain colored",
  TypeScript: "devicon-typescript-plain colored",
  CSS: "devicon-css3-plain colored",
  HTML: "devicon-html5-plain colored",
  AWS: "devicon-amazonwebservices-plain-wordmark colored",
  NodeJS: "devicon-nodejs-plain colored",
  React: "devicon-react-original colored",
  ExpressJS: "devicon-express-original colored",
  // Python: "devicon-python-plain colored",
  // Django: "devicon-django-plain colored",
  MySQL: "devicon-mysql-original colored",
  MongoDB: "devicon-mongodb-plain colored",
  PostgreSQL: "devicon-postgresql-plain colored",
  TailwindCSS: "devicon-tailwindcss-original colored",
  Github: "devicon-github-original colored",
  Netlify: "devicon-netlify-plain colored",
};

// chipsArr.map item -> class = icons[item]
const chipsArr = Object.keys(chips);

const Skills = () => {
  return (
    <div className="skills-div">
      <div className="skills-intro">
        <p>
          <h2 style={{ display: "inline" }}>My passion</h2> is creating
          responsive, inspiring websites and mobile applications that are
          intuitive for users. With an entrepreneurial background and excellent
          communication skills, I am adept at balancing both business and
          product needs when developing.
        </p>
        <div className="chips">
          {chipsArr.map((item) => (
            <Chip chip={chips[item]} text={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
