import { useScroll, motion, useMotionValueEvent } from "motion/react";

const Intro = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        bounce: 0.3,
      },
    },
  };

  return (
    <div className="intro">
      <div className="intro-gradient">
        <div className="shape1"></div>
        <div className="shape2"></div>
        <div className="shape3"></div>
      </div>
      <motion.div
        className="intro-text"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="intro-title" variants={item}>
          <h2>Dahee Lee</h2>
        </motion.div>

        <motion.div className="intro-caption" variants={item}>
          <p>
            Creative Full Stack Software Developer <br></br>obsessed with clean
            designs and clean code.
          </p>
          <div className="connect-icons-div">
            <p>
              <a
                href="https://www.linkedin.com/in/daheelee/"
                aria-label="Link to LinkedIn profile of Dahee Lee"
                style={{ fontSize: "24px" }}
              >
                <i className="devicon-linkedin-plain"></i>
              </a>
            </p>

            <p>
              <a
                href="https://github.com/dhl92000"
                aria-label="Link to Github profile of Dahee Lee"
                style={{ fontSize: "26px" }}
              >
                <i className="devicon-github-original"></i>
              </a>
            </p>
            <p class="material-symbols-outlined" style={{marginBottom:'4px'}}>
              <a
                href="mailto:dahlee97@gmail.com"
                aria-label="Link to open email app to send an email to Dahee Lee"
                style={{ fontSize: "32px" }}
              >
                email
              </a>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Intro;
