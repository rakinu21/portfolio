import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./menu.scss";

const variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } }
};

const Menu = ({ onClose }) => {
  const [dataLink] = useState(["Home", "Project", "Contact","Services"]);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <motion.div
      className="menu-container"
      initial={{ x: "100%", opacity: 0.5 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0, transition: { duration: 0.8 } }}
      transition={{ duration: 0.8 }}
    >
      <AnimatePresence>
        {hoveredItem && (
          <motion.div className="background-text" variants={variants} initial="hidden" animate="visible" exit="exit">
            {hoveredItem}
          </motion.div>
        )}
      </AnimatePresence>

      <ul>
        {dataLink.map((item, index) => (
          <motion.li
            key={index}
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href={item === "Home" ? "/" : `/${item}`} onClick={onClose}>{item}</a> {/* Close menu on click */}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Menu;
