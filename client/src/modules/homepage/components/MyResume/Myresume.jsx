import './myresume.scss';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { resume } from '../certificates/certicates.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TiHtml5 } from "react-icons/ti";
import { SiRedux } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaSass } from "react-icons/fa";
import { motion } from "framer-motion";


// backend
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";


import contact from '../assets/contact.png';
import Button from '../button/contactBtn/button.jsx';

const skills = [
  { name: "HTML", icon: <TiHtml5 />, percentage: 100, color: "#E34F26" }, // Orange
  { name: "CSS", icon: <IoLogoCss3 />, percentage: 100, color: "#1572B6" }, // Blue
  { name: "JavaScript", icon: <IoLogoJavascript />, percentage: 100, color: "#F7DF1E" }, // Yellow
  { name: "React", icon: <FaReact />, percentage: 100, color: "#61DAFB" }, // Cyan
  { name: "Sass", icon: <FaSass />, percentage: 100, color: "red" }, // Cyan
  { name: "Bootstrap", icon: <FaBootstrap />, percentage: 85, color: "#7952B3" }, // Purple
  { name: "Redux", icon: <SiRedux />, percentage: 80, color: "#764ABC" }, // Purple
  { name: "Tailwind CSS", icon: <RiTailwindCssFill />, percentage: 89, color: "#38B2AC" }, // Teal
  { name: "Framer Motion", icon: <TbBrandFramerMotion />, percentage: 85, color: "#FF0050" }, // Red
];

const backendSkills = [
  { name: "Node.js", icon: <FaNodeJs />, percentage: 95, color: "#68A063" }, // Green
  { name: "Express.js", icon: <SiExpress />, percentage: 90, color: "#ffffff" }, // Black
  { name: "Python", icon: <FaPython />, percentage: 95, color: "#3776AB" }, // Blue
  { name: "Flask", icon: <SiFlask />, percentage: 85, color: "#ffffff" }, // Black
  { name: "PHP", icon: <FaPhp />, percentage: 80, color: "#777BB4" }, // Purple
  { name: "MongoDB", icon: <SiMongodb />, percentage: 88, color: "#47A248" }, // Green
  { name: "MySQL", icon: <SiMysql />, percentage: 90, color: "#4479A1" } // Blue
];

// Custom Arrow Buttons
const CustomPrevArrow = (props) => (
  <div className="custom-arrow prev" onClick={props.onClick}>
    <FaArrowLeft />
  </div>
);

const CustomNextArrow = (props) => (
  <div className="custom-arrow next" onClick={props.onClick}>
    <FaArrowRight />
  </div>
);

const h1Variants = {
  hidden: { opacity: 0, x: "-100%" },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } }
};

const sectionVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: index * 0.2 }
  })
};

const sliderVariants = {
  hidden: { opacity: 0, x: "100%" },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } }
};

const Myresume = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
  };

  return (
    <div className="resume-container" >

      <div className="education_and_certicates">
              {/* Education Section */}
        <div className="education_skills">
        <motion.section className="education" variants={sectionVariants} initial="hidden" whileInView="visible">
          <motion.h2 variants={h1Variants} initial='hidden' whileInView='visible'>Education</motion.h2>
          <div className="education-items">
            <motion.div className="education-item" variants={itemVariants} initial='hidden' whileInView= 'visible'>
              <span className="year">2022</span>
              <h3>University of Studies</h3>
              <p><strong>Frontend</strong></p>
              <p>Gained fundamental skills in Frontend, user research, and prototyping using Figma and Adobe XD.</p>
            </motion.div>
            
            <motion.div className="education-item" variants={itemVariants} initial='hidden' whileInView= 'visible'>
              <span className="year">2023</span>
              <h3>University of Studies</h3>
              <p><strong>Backend</strong></p>
              <p>Gained fundamental skills in Backend, user research, and prototyping using Figma and Adobe XD.</p>
            </motion.div>
            
            <motion.div className="education-item" variants={itemVariants} initial='hidden' whileInView= 'visible'>
              <span className="year">2024</span>
              <h3>University of Studies</h3>
              <p><strong>full-stack</strong></p>
              <p>Gained fundamental skills in full-stack, user research, and prototyping using Figma and Adobe XD.</p>
            </motion.div>

          
          </div>
          
          
          
          </motion.section>
                  
                    {/* Skills Section */}
  <section className="skills">
    <motion.h2 variants={h1Variants} initial='hidden' whileInView='visible'>Coding Skills</motion.h2>
    <div className="skill-categorys">
      <div className="skill-category">
        <div className="frontend">
          <motion.h2 variants={h1Variants} initial='hidden' whileInView='visible'>Frontend</motion.h2>
          <div className="frontend-items">
            {skills.map((skill, index) => (
              <motion.div className="frontend-item" key={index} variants={itemVariants} initial='hidden' whileInView= 'visible'>
                <span className="item" style={{ color: skill.color }}>{skill.icon}</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${skill.percentage}%` }}>
                    {skill.percentage}%
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
    <div className="skill-categorys">
      <div className="skill-category">
        <div className="frontend">
          <motion.h2 variants={h1Variants} initial='hidden' whileInView='visible'>Backend</motion.h2>
          <div className="frontend-items">
            {backendSkills.map((skill, index) => (
              <motion.div className="frontend-item" key={index} variants={itemVariants} initial='hidden' whileInView= 'visible'>
                <span className="item" style={{ color: skill.color }}>{skill.icon}</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${skill.percentage}%` }}>
                    {skill.percentage}%
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
        </div>
        
       
        {/* Certifications Section with Slider */}
        <motion.section className="certifications" variants={sliderVariants} initial='hidden' whileInView='visible'>
          <h2>Certificates</h2>
          <Slider {...sliderSettings} className='slider'>
            {resume.map((cert) => (
              <div key={cert.id} className="certificate-item">
                <img src={cert.picture} alt={cert.title} className="certificate-image" />
                <p><strong>{cert.title}</strong></p>
                <span>{cert.date} - {cert.description}</span>
              </div>
            ))}
          </Slider>
          {/* Profile */}
          <div className="profileInfo">
            <div className="picture">
             <img src={contact} alt="" />
              <div className="name">
                <h1>Ralph Kineth Ugdamin</h1>
                <p>Web developer</p>
              </div>

            </div>
            <div className="Contact">
              <Button/>
            </div>
        </div>
        </motion.section>
      </div>

           

    
    </div>
  );
};

export default Myresume;
