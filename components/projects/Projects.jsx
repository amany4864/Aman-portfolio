import './projects.scss'
import { motion , useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from 'react';



const items =[
    {
        id:1,
        title:"Help-Me (App)",
        demo:"https://drive.google.com/file/d/1-Jqk4CsxreEaarePXhFZMqCgHrZ1F_68/view?usp=sharing"
        ,github: "https://github.com/amany4864/HelpMe_App"
        ,img:"https://i.postimg.cc/85LH0r1S/helpme3.png",
        desc:"Help-Me is an Android application developed using Kotlin. Its primary aim is to enable users to share their location without the need for an internet connection in situations of distress."},
    {
        id:2,
        title:"Portfolio website",
        img:"https://i.postimg.cc/tC8sYv3B/portfolioss.pngpublic/portfolioss.png",
        demo: "https://www.google.com/url?q=https://aman-portfolio-snowy.vercel.app/&sa=D&source=apps-viewer-frontend&ust=1719724075895765&usg=AOvVaw3e8OrHTnpZDCl7uUONnUjj&hl=en-GB",
        github: "https://github.com/amany4864/Aman-portfolio",
        desc: "Tools: React, Framer Motion, Email JS. It consists of animations and parallax effects created using Framer Motion’s useScroll and useTransform hooks. It also has a feature to contact me directly from the webpage which is based on Email JS."
    },
    {
        id:3,
        title:"Aim Trainer",
        demo: "https://amany4864.github.io/AimTrainer/",
        github: "https://github.com/amany4864/AimTrainer",
        img:"https://i.postimg.cc/1418XM2g/image.png",
        desc:"Gamers. The main idea behind it, is you have to shoot(click) the target appearing on canvas, and on shooting the target it will reappear at the new location. The tech stack behind uses DOM manipulation, Event Handling, and the SetTimeout function."
    },
    {
        id:4,
        title:"ToDo App",
        demo: "https://todo-react-firebase-three.vercel.app/",
        github: "https://github.com/amany4864/Todo-React-Firebase",
        img:"https://i.postimg.cc/XJ0d1fnk/image.png",
        desc:" The app uses Firebase for online data storage and retrieval. It has the feature to add tasks and remove tasks with one click and it will be directly manipulate inside the database. "
    },
];



const handleButtonClick = (url) => {
    window.open(url, '_blank');
    };


const Single = ({item}) =>{
    const ref= useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start","end start"]
   });
   const y= useTransform(scrollYProgress, [0,1], [-300,300]);

    return (
        <section>
            <div className='container'>
            <div className='wrapper'>
            <div className='imageContainer'  ref={ref}>
                <img src={item.img} alt="" />
            </div>
                <motion.div className='textContainer' style={{y}} >
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button  onClick={() => handleButtonClick(item.demo)}
                    >See Demo</button>
                    <button  onClick={() => handleButtonClick(item.github)}>Visit Repo</button>
                </motion.div>
            </div>    
            </div>
        </section>
    )
};

const Projects=()=> {

    const ref= useRef()

    const { scrollYProgress } = useScroll({
         target: ref,
        offset:["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness:100,
        damping:30,
    });

    return (
        <div className='portfolio' ref={ref}>
            <div className='progress'>
                <h1>Projects</h1>
                <motion.div style={{scaleX}} className='progressBar'></motion.div>
            </div>
            {items.map(item=>(
                <Single item={item} key={item.id}/>
            ))}  
    </div>
  );
};

export default Projects
