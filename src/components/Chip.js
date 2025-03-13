import { motion } from "framer-motion";
import { useRef, useState } from "react";

const Chip = (props) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = ref.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      setPosition({ x, y });
    };
  
    const mouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };
  
    const { x, y } = position;
    return (
      <motion.div
        className="chip"
        onMouseMove={mouseMove}
        onMouseLeave={mouseLeave}
        ref={ref}
        animate={{ x, y }}
        transition={{ type: "string", stiffness: 150, damping: 15, mass: 0.1 }}
      >
        <i class={props.chip}></i>
        <p>{props.text}</p>
      </motion.div>
    );
}

export default Chip