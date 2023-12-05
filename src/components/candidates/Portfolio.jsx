import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import I1 from './img/hacking.jpeg'
import I2 from './img/blockchain.webp'
import I3 from './img/coding.webp'
import I4 from './img/ml.webp'
import { Link } from "react-router-dom";
import Table from "./table/Table";
import Navbar from "../navbar/Navbar";
const items = [
  {
    id: 1,
    title: "Hacking Event",
    img: I1,
    desc: "hacking_event" ,
  },
  {
    id: 2,
    title: "Block Chain Event",
    img: I2,
    desc: "ml_event",
  },
  {
    id: 3,
    title: "Coding Challenge Event",
    img: I3,
    desc:"coding_event",
  },
  {
    id: 4,
    title: "Machine Learning Event",
    img: I4,
    desc: "blockchain_event",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section style={{width:'100vw',height:'auto'}} >
    <Navbar />
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
          </motion.div>
        </div>
      </div>
      <div className="container" style={{height:'500px'}}>
      <motion.div className="textContainer" style={{y}}>
      <Table event_name={item.desc} />
          </motion.div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <>
      
      <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Event Info</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
    </>
  );
};

export default Portfolio;
