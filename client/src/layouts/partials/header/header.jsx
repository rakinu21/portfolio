import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai"; // Import close icon
import { AnimatePresence } from "framer-motion";
import "./header.scss";
import Menu from "./components/toolTips/menu";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="header">
      <div className="logo">
        <h1>rakinu</h1>
      </div>
      <div className="links">
        <div className="Hamburger" onClick={() => setToggle(!toggle)}>
          {toggle ? <AiOutlineClose /> : <GiHamburgerMenu />} {/* Toggle icon */}
        </div>
      </div>

      {/* AnimatePresence handles exit animations */}
      <AnimatePresence>
        {toggle && <Menu onClose={() => setToggle(false)} />} 
      </AnimatePresence>
    </div>
  );
};

export default Header;
