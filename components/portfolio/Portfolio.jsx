import './portfolio.scss'
import { motion , useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from 'react';


const items =[
    {
        id:1,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/1066176/pexels-photo-1066176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc:"bhaang bhosde wali tere mote mote nain"
    },
    {
        id:2,
        title:"React Commerce-2",
        img:"https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc:"bhaang bhosde wali tere mote mote nain"
    },
    {
        id:3,
        title:"React Commerce-3",
        img:"https://images.pexels.com/photos/341013/pexels-photo-341013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc:"bhaang bhosde wali tere mote mote nain"
    },
    {
        id:4,
        title:"React Commerce-4",
        img:"https://images.pexels.com/photos/1302436/pexels-photo-1302436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2/",
        desc:"bhaang bhosde wali tere mote mote nain"
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
                    <button>See Demo</button>
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
                <h1>Featured Works</h1>
                <motion.div style={{scaleX}} className='progressBar'></motion.div>
            </div>
            {items.map(item=>(
                <Single item={item} key={item.id}/>
            ))}  
    </div>
  );
};

export default Portfolio
