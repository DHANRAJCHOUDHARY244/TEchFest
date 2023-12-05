import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import I1 from './img/hacking.jpeg'
import I2 from './img/blockchain.webp'
import I3 from './img/coding.webp'
import I4 from './img/ml.webp'
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Hacking Event",
    img: I1,
    desc: "🏆 Engage in real-world scenarios, solve challenging puzzles, and demonstrate your ability to secure digital landscapes. The contest is open to participants of all levels, from beginners to seasoned professionals, fostering a diverse and inclusive atmosphere.",
  },
  {
    id: 2,
    title: "Block Chain Event",
    img: I2,
    desc: "🌐 Compete with fellow enthusiasts, solving real-world challenges and pushing the boundaries of decentralized innovation. Whether you're a blockchain novice or an expert, this contest is designed for everyone eager to explore the potential of this transformative technology.",
  },
  {
    id: 3,
    title: "Coding Challenge Event",
    img: I3,
    desc: " 🚀 Get ready for a coding adventure! Join our Coding Challenges Event Contest and showcase your programming prowess in an exhilarating competition designed for coding enthusiasts of all levels.",
  },
  {
    id: 4,
    title: "Machine Learning Event",
    img: I4,
    desc: "🤖 Dive into the world of machine learning at our ML Event Contest! Join us for an exciting competition that challenges participants to harness the power of AI algorithms and showcase their innovative solutions.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><Link to={'/register'}>Register Now</Link></button>
          </motion.div>
        </div>
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
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Event Info</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
