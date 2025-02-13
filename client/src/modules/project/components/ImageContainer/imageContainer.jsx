import './imageContainer.scss'
import { motion } from "framer-motion";
const ImageContainer = ({image, discription, title , button }) => {
  return (
    <motion.div
    className="imageContainerProject"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  
  >
    <h1 className="title">{title}</h1>
    <div className="image">
      <img src={image} alt="project" />
    </div>
    <p>{discription}</p>
    <div className="button">
      <button>{button}</button>
    </div>
  </motion.div>
  )
}

export default ImageContainer