import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        Bytes of Brilliance, Megabytes of Fun: 
          <br /> TechFest Unleashed!
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Our</motion.b> Better Future.
          </h1>
          <button>Explore Events</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Hacking</h2>
          <p>
          Dive into the world of cybersecurity with the CURAJ School of Engineering as we host a hacking extravaganza, challenging participants to navigate through the virtual realm of code and cryptography
          </p>
          <button><a href='/register'>Register Now</a></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Block Chain</h2>
          <p>
          From Bitcoin to Beyond: Join us at CURAJ School of Engineering for a Blockchain Event that explores the limitless possibilities of this groundbreaking technology. Let's shape the future together!
          </p>
          <button><a href='/register'>Register Now</a></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Coding Challenges</h2>
          <p>
          Crack the code, break the barriers! Participate in the Coding Challenges Event at our Tech Fest, where challenges await and only the most ingenious solutions will claim victory. Brace yourself for a coding adventure like no other!
          </p>
          <button><a href='/register'>Register Now</a></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Machine Learning</h2>
          <p>
          Discover the power of machines that learn! The Machine Learning Event at our Tech Fest invites you to witness breakthroughs, delve into data-driven insights, and explore the forefront of artificial intelligence.
          </p>
          <button><a href='/register'>Register Now</a></button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
