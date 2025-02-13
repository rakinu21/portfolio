import './firstPageContact.scss'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import Form from '../form/form';
import { FaLocationDot } from "react-icons/fa6";
import { motion } from 'framer-motion';

const sliderVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } }
  };
  
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
  

const FirstPageContact = () => {
  return (
      <div className='firstPageContact'>
          <div className="textContainerContact">
              <motion.h1 variants={h1Variants} initial='hidden' whileInView='visible'>let`s Talk</motion.h1>
              <motion.p variants={itemVariants} initial='hidden' whileInView='visible'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quo asperiores odit quam, vero consequuntur numquam
                  Lorem ipsum dolor sit amet consectetur.
              </motion.p>

              <div className="iconsContactInfo">
                  
                  <motion.h1 className='contactInfo' variants={h1Variants} initial='hidden' whileInView='visible'>Contact Info</motion.h1>
                  <motion.div className="iconcontact" variants={itemVariants} initial='hidden' whileInView='visible'>
                      <FaPhoneAlt className='icon'/> +639093845632
                  </motion.div>
                  <motion.div className="iconcontact" variants={itemVariants} initial='hidden' whileInView='visible'>
                      <MdOutlineMail className='icon'/> rakinu21@gmail.com
                  </motion.div>
                  <motion.div className="iconcontact" variants={itemVariants} initial='hidden' whileInView='visible'>
                  <FaFacebook className='icon'/> example/profile/fb.com
                  </motion.div>
                  <motion.h1 className='address'variants={h1Variants} initial='hidden' whileInView='visible' >Address</motion.h1>
                  <motion.div className="iconcontact" variants={itemVariants} initial='hidden' whileInView='visible'>
                  <FaLocationDot className='icon'/> General Santos city Philippine
                  </motion.div>
                
              </div>
              
          </div>
          
          <motion.div className="form" variants={sliderVariants} initial='hidden' whileInView='visible'>
             <Form/>
          </motion.div>
    </div>
  )
}

export default FirstPageContact