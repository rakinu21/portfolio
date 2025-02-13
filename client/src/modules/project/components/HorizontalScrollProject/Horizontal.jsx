import { useRef } from "react";
import "./styles.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageContainer from "../ImageContainer/imageContainer";
import projects from "../indexdata";
const Horizontal = () => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Projects animation
  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);
  const scaleProjects = useTransform(scrollYProgress, [0, 0.3], [1, 2]);
  const opacityProjects = useTransform(scrollYProgress, [0.1, 0.3], [1, 0]);

  // Contact Me animation (opposite)
  const scaleContact = useTransform(scrollYProgress, [0.3, 1], [2, 1]); // Scale down
  const opacityContact = useTransform(scrollYProgress, [0.9, 1], [0, 1]); // Fade in

  return (
    <div className="carousel" ref={targetRef}>
      <div className="contentContainer">
        {/* Projects Heading */}
        <motion.h1  id="mywork" style={{ scale: scaleProjects, opacity: opacityProjects, background: 'orange'}} className="projects-text">
          MY WORKS
        </motion.h1>

        {/* Scrolling Images */}
        <motion.div className="images" style={{ x }}>
          {projects.map((items, index) => (
             <ImageContainer image={items.image} discription={items.description} title={items.title} button={items.button} key={index}/>
           ))}
        </motion.div>

        {/* Contact Me Section */}
        <motion.h1 style={{ scale: scaleContact, opacity: opacityContact ,background: 'orange' }} className="contact-me">
          CONTACT ME
        </motion.h1>
      </div>
    </div>
  );
};

export default Horizontal;
