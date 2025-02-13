import dataServices from "../components/data.js";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./services.scss";

const Services = () => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], // Triggers animation when in viewport
  });

  return (
    <div className="services-container" ref={targetRef}>
      {dataServices.map((service, index) => {
        // Animation settings per card
        const y = useTransform(scrollYProgress, [0, 1], [50, -50]); // Moves upward when scrolling
        const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]); // Fade in, stay, fade out

        // Last card gets extra zoom effect
        const isLast = index === dataServices.length - 1;
        const scale = isLast ? useTransform(scrollYProgress, [0.6, 1], [1, 1.2]) : 1;

        return (
          <motion.div
            key={index}
            className="service-card"
            style={{ y, opacity, scale }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }} // Ensures animation only when in view
          >
            <div className="service-text">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul>
                {service.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="service-image">
              <img src={service.img} alt={service.title} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Services;
