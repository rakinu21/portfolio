import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./mainLayout.scss";
import Header from "./partials/header/header";

const MainLayout = () => {
  const [isVisible, setIsVisible] = useState(true);
  let timeoutId = null;

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false); // Hide header when scrolling
      clearTimeout(timeoutId); // Reset timer

      timeoutId = setTimeout(() => {
        setIsVisible(true); // Show header when scrolling stops
      }, 500); // Adjust delay as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="mainLayout">
      <motion.header
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.4 }}
      >
        <Header />
      </motion.header>

      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
