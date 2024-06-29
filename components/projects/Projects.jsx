import './projects.scss'
import { motion , useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from 'react';


const items =[
    {
        id:1,
        title:"Help-Me (App)",
        img:"https://i.postimg.cc/85LH0r1S/helpme3.png",
        desc:"Help-Me is an Android application developed using Kotlin. Its primary aim is to enable users to share their location without the need for an internet connection in situations of distress."},
    {
        id:2,
        title:"Portfolio website",
        img:"https://i.postimg.cc/tC8sYv3B/portfolioss.pngpublic/portfolioss.png",
        desc: "Tools: React, Framer Motion, Email JS. It consists of animations and parallax effects created using Framer Motion’s useScroll and useTransform hooks. It also has a feature to contact me directly from the webpage which is based on Email JS."
    },
    {
        id:3,
        title:"Aim Trainer",
        img:"https://i.postimg.cc/1418XM2g/image.png",
        desc:"Gamers. The main idea behind it, is you have to shoot(click) the target appearing on canvas, and on shooting the target it will reappear at the new location. The tech stack behind uses DOM manipulation, Event Handling, and the SetTimeout function."
    },
    {
        id:4,
        title:"ToDo App",
        img:"https://i.postimg.cc/XJ0d1fnk/image.png",
        desc:" The app uses Firebase for online data storage and retrieval. It has the feature to add tasks and remove tasks with one click and it will be directly manipulate inside the database. "
    },
];

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
                    <button id="android" >See Demo</button>
                    <button id="android">Visit Repo</button>
                </motion.div>
            </div>    
            </div>
        </section>
    )
};

const Portfolio=()=> {

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

export default Portfolio
