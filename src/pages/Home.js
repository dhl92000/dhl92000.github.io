import IMG_1290 from "../projectData/IMG_1290.jpg";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div >
          <p class="nameTitle">Dahee Lee</p>

          <p>Full Stack Software Developer</p>
          <p>React Node.js JavaScript ExpressJS</p>


        </div>
        <span className="headshotContainer">
            <img
              class="headshot"
              src={IMG_1290}
              alt="black and white headshot of Dahee against a wall with abstract art"
            />
          </span>
      </div>
      <div>
        <p>
          Creative full stack software engineer obsessed with clean designs and
          clean code.
        </p>

        {/* <p>
          My passion is creating responsive, inspiring websites and applications
          that are intuitive for users. With an entrepreneurial background and
          excellent communication skills, I am adept at balancing both business
          and product needs when developing.
        </p> */}
      </div>
    </div>
  );
};

export default Home;
