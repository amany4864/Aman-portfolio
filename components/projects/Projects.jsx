import './projects.scss'
import { motion , useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from 'react';


const items =[
    {
        id:1,
        title:"Help-Me (App)",
        img:"/public/HelpME img.jpg",
        desc:"Help-Me is an Android application developed using Kotlin. Its primary aim is to enable users to share their location without the need for an internet connection in situations of distress."},
    {
        id:2,
        title:"ok",
        img:"../public/portfolioss.png",
        desc:" tere mote mote nain"
    },
    {
        id:3,
        title:"React Commerce-3",
        img:"https://images.pexels.com/photos/341013/pexels-photo-341013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc:" tere mote mote nain"
    },
    {
        id:4,
        title:"React Commerce-4",
        img:"https://images.pexels.com/photos/1302436/pexels-photo-1302436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2/",
        desc:"tere mote mote nainang "
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
