import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./firstPageProject.scss";
import { Link } from "react-router-dom";
import ArrowDown from "../arrowDown/arrowDown";


const h1Variants = {
  hidden: { opacity: 0, x: "-100%" },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } }
};



const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: index * 0.2 }
  })
};



const Reordering = () => {
  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 2000);
    return () => clearTimeout(timeout);
  }, [order]);



  return (
    <div className="projecthomepage">
      <div className="text">
        <motion.h1 variants={h1Variants} initial='hidden' whileInView='visible'>Projects</motion.h1>
        <motion.p variants={itemVariants} initial='hidden' whileInView='visible'>
        Explore our project and discover its features. We aim to provide an 
        intuitive and seamless experience to help you achieve your goals.
        </motion.p>
        <div className="button">
  <button onClick={() => document.getElementById('mywork').scrollIntoView({ behavior: 'smooth' })}>
    <ArrowDown/>
  </button>
</div>
      </div>

          <motion.div className="container-image">
              <div className="images">
              {order.map((backgroundColor) => (
          <motion.div
            className="item"
            key={backgroundColor}
            layout
            transition={spring}
            style={{ backgroundColor }}
          ></motion.div>
        ))}
              </div>
       
      </motion.div>
    </div>
  );
};

export default Reordering;

const initialOrder = [
  "#ff0088", "#dd00ee", "#9911ff", "#0d63f8", "#00aaff",
  "#00ffcc", "#00ff66", "#66ff00", "#ccff00", "#ffff00",
  "#ffcc00", "#ff9900",
 
];

function shuffle([...array]) {
  return array.sort(() => Math.random() - 0.5);
}

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 100,
};
