import "./homepageIntro.scss";
import homePic from "../assets/homePicture.png";
import facebook from "../assets/facebook.png";
import linkin from "../assets/linkin.png";
import github from "../assets/github.png";
import twitter from "../assets/twitter.png";
import Button from "../button/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Track mouse movement effect for image
const HomepageIntro = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 30 - 15,
        y: (event.clientY / window.innerHeight) * 30 - 15,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Floating bubble animation for text
  const bubbleAnimation = {
    hidden: { opacity: 0, x: "-100%" }, // Start off-screen (left)
    visible: { 
      opacity: 1, 
      x: 0, // Moves to original position
      transition: { duration: 1.5, ease: "easeOut" } // Smooth entrance
    },
    animate: {
      y: [0, -10, 0, 10, 0], // Floating effect
      scale: [1, 1.05, 1], // Slight bounce effect
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
  
  // Infinite scrolling text animation
  const SliderVariants = {
    initial: { x: 0 },
    animate: {
      x: "-290%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 30,
      },
    },
  };

  // SVG drawing animation
  const draw = {
    animate: {
      strokeDasharray: [500, 100],
      strokeDashoffset: [300, 100],
      transition: {
        strokeDasharray: { duration: 3, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
        strokeDashoffset: { duration: 3, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
      },
    },
  };

  const h1Variants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } }
  };

  const sliderVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: index * 0.2 }
    })
  };
  

  return (
    <div className="homepage">
      {/* Floating Text Animation */}
      <div className="textContainer">
        <motion.h1 variants={bubbleAnimation} initial="hidden"  whileInView="visible" animate="animate" viewport={{ once: true }} >
          Hello <span>I'm</span>
        </motion.h1>
        <motion.h2 variants={bubbleAnimation} initial="hidden"  whileInView="visible" animate="animate" viewport={{ once: true }} >
          Ralph Kineth <span>Ugdamin</span>
        </motion.h2>
        <motion.h3 variants={bubbleAnimation} initial="hidden"  whileInView="visible" animate="animate" viewport={{ once: true }} >
          Web <span>Developer</span>
        </motion.h3>

        <motion.div className="content" variants={itemVariants} initial='hidden' animate='visible'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero et iste quia eius quisquam repellendus officia
            doloremque voluptates sequi doloribus. Dolorem blanditiis explicabo necessitatibus, quos aut est delectus
            exercitationem minus.
          </p>
        </motion.div>

        <div className="icons-container">
          <div className="icons">
            <motion.img variants={h1Variants} initial='hidden' animate='visible' src={github} alt="github" />
            <motion.img variants={h1Variants} initial='hidden' animate='visible' src={linkin} alt="linkin" />
            <motion.img variants={h1Variants} initial='hidden' animate='visible' src={twitter} alt="twitter" />
            <motion.img variants={h1Variants} initial='hidden' animate='visible' src={facebook} alt="facebook" />
          </div>

          <div className="button">
            <Button />
          </div>
        </div>
      </div>

      {/* Image Section with Mouse Movement Effect */}
      <motion.div className="imageContainer" variants={sliderVariants} initial='hidden' animate='visible'>
        <motion.img
          src={homePic}
          alt="home pic"
          animate={{ x: mousePosition.x, y: mousePosition.y }}
          transition={{ type: "spring", stiffness: 50, damping: 10 }}
        />


     <motion.svg
        id="visual"
        viewBox="0 0 900 600"
        width="800"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        className="circle"
      >
        <rect x="0" y="0" width="900" height="600" fill="transparent"></rect>
        <g fill="none" stroke="blue" strokeWidth="10">
          <motion.circle r="147" cx="671" cy="447" variants={draw} animate="animate" />
          <motion.circle r="65" cx="182" cy="380" variants={draw} animate="animate" />
          <motion.circle r="109" cx="685" cy="102" variants={draw} animate="animate" />
        </g>
      </motion.svg>
      </motion.div>

      {/* Animated Bubbles */}
   

      {/* Moving Text Animation */}
      <motion.div className="text" variants={SliderVariants} initial="initial" animate="animate">
        <h1>Full-Stack Developer</h1>
      </motion.div>
    </div>
  );
};

export default HomepageIntro;
