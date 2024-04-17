import { animate } from "framer-motion";
import "./hero.scss"
import { duration } from "@mui/material";
import { motion } from "framer-motion";

const textVariants ={
initial: {
  x: -500,
  opacity: 0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    }
  },
};

const Hero = () => {
  return (
    <div className="hero">
    <div className="wrapper">

      <motion.div 
      className="textContainer"
      variants={textVariants} 
      initial="initial" 
      animate="animate"
      >
        <motion.h2 variants={textVariants}>Aman Yadav</motion.h2>
        <motion.h1 variants={textVariants}>Web Developer and Designer</motion.h1>
        <motion.div className="buttons">
          <motion.button variants={textVariants}>See the Latest Works</motion.button>
          <motion.button>Contact Me</motion.button>
        </motion.div>
        <img variants={textVariants} src="../../scroll.png"/>
      </motion.div>
      
      
      </div>
      <div className="slidingTextContainer">
        Web Developer Software Developer
      </div>
      <div className="imageContainer">
        <img src="../../hero.png" alt=""/>

      </div>
    </div>
  )
}

export default Hero
