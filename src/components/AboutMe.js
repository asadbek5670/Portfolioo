import aboutMeImg from "../images/aboutme.jpeg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const AboutMe = ({ name }) => {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className="aboutContainer container">
      <div className="row">
        <motion.div
          className="personalImage col-12 col-lg-6"
          ref={ref}
          initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
          animate={inView ? { x: 0, opacity: 1, scale: 1 } : { x: "-10vw", opacity: 0, scale: 0.5 }}
          transition={{ delay: 0.5, duration: 0.4, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.img src={aboutMeImg} alt={name} />
        </motion.div>
        <div className="personalInfo col-12 col-lg-6">
          <motion.div className="contentContainer" variants={staggerVariants}>
            <motion.h4 variants={paragraphVariants}>Nice to meet you! 👋🏻</motion.h4>
            <motion.h5 variants={paragraphVariants}>I'm a Po'latov Asadbek</motion.h5>
            <motion.div
              className="contentDescription"
              variants={staggerVariants}
              initial="initial"
              animate={inView ? "animate" : "initial"}
            >
              <motion.p variants={paragraphVariants}>
                I'am Po'latov Asadbek, was born on December24,2003.I was admitted to the 1st grade in 2011.
                After graduating form the 9th grade in 2020, I was acceted into the profession in 2022, I
                was accepted into the international university of information Technologies and Software Taminot,
                where I graduated from a vocational achool.2022 2023 I completed a wab programming course for 10 months,
                Ie.HTML, CSS, JS, REACT, NODE.JS programs. I thank my teacher Muhammadali for teaching me this
              </motion.p>


            </motion.div>
            <NavLink to="/portfolio">
              <motion.button className="btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.99 }}>
                <p>View Portfolio</p>
                <div>
                  <FiArrowUpRight whileHover={{ scale: 4 }} className="arrow-icon" />
                </div>
              </motion.button>
            </NavLink>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
