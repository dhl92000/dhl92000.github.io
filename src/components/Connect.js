import IMG_1290 from "../projectData/IMG_1290.jpg";

const Connect = () => {
  return (
    <div className="connect-div">
      <div className="connect">
        <div className="connect-text">
          <p>
            <h2 style={{ display: "inline" }}>Let's connect</h2> online or
            feel free to send me an email if you're interested in working
            together 👩🏻‍💻!
          </p>
        </div>

        <span className="headshotContainer">
          <img
            className="headshot"
            src={IMG_1290}
            alt="black and white headshot of Dahee against a wall with abstract art"
          />
        </span>
      </div>
      <div className="connect-icons-div">
        <p>
          <a
            href="https://www.linkedin.com/in/daheelee/"
            aria-label="Link to LinkedIn profile of Dahee Lee"
            style={{fontSize:'24px'}}
          >
            <i className="devicon-linkedin-plain"></i>
          </a>
        </p>

        <p>
          <a
            href="https://github.com/dhl92000"
            aria-label="Link to Github profile of Dahee Lee"
            style={{fontSize:'26px'}}
          >
            <i className="devicon-github-original"></i>
          </a>
        </p>
        <p class="material-symbols-outlined">
          <a
            href="mailto:dahlee97@gmail.com"
            aria-label="Link to open email app to send an email to Dahee Lee"
            style={{fontSize:'32px'}}
          >
            email
          </a>
        </p>
      </div>
    </div>
  );
};

export default Connect;
