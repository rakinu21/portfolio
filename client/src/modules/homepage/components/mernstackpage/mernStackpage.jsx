import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./mernStackpage.scss";
import Services from "../../../about/page/services";




const MernStack = () => {

  const targetRef = useRef();
const { scrollYProgress } = useScroll({ target: targetRef });

// Projects animation
const x = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);
const scaleProjects = useTransform(scrollYProgress, [0, 0.3], [1, 2]);
const opacityProjects = useTransform(scrollYProgress, [0.1, 0.3], [1, 0]);

// Contact Me animation (opposite)
const scaleContact = useTransform(scrollYProgress, [0.6, 1], [2, 1]); // Scale down
const opacityContact = useTransform(scrollYProgress, [0.9, 1], [0, 1]); // Fade in

  

  return (
    <div className="carousel-about" ref={targetRef}>
    <div className="contentContainer-about">
      {/* Projects Heading */}
      <motion.h1 style={{ scale: scaleProjects, opacity: opacityProjects }} className="projects-text">
        Services
      </motion.h1>
      
       
     
 
      <motion.h1 style={{ scale: scaleContact, opacity: opacityContact }} className="resume">
        Resume
      </motion.h1>
      </div>
      <Services />
      
  </div>
  );
};

export default MernStack;
