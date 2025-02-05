import "./Header.css";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useScroll, motion, useMotionValueEvent } from "motion/react";

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);

  // # of pixels user is scrolled down on page
  const { scrollY } = useScroll();
  
  const lastYRef = useRef(0);
  //react to something that changes in scrollY
  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  return (
    <motion.header
      className="header"
      animate={isHidden ? "hidden" : "visible"}
      whileHover={"visible"}
      onFocusCapture={() => setIsHidden(false)}
      variants={{
        hidden: {
          y: "-80%",
        },
        visible: {
          y: "0%",
        },
      }}
      transition={{ duration: 0.2 }}
    >
      <div id="headerName">
        <Link to="/">( DAHEE LEE )</Link>
      </div>
      <div class="headerNav">
        <Link to="/">
          <button class="keyboardButton">Home</button>
        </Link>

        <Link to="/about">
          <button class="keyboardButton">About</button>
        </Link>
        <Link to="/contact">
          <button class="keyboardButton">Contact</button>
        </Link>
      </div>
    </motion.header>
  );
};

export default Header;
