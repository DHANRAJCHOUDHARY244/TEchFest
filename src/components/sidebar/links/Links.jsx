import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Homepage", "Event", "Explore_More", "Contact"];
  return (
    <>
     
    <div style={{height:'100px'}}></div>
    <motion.div className="links" variants={variants}>
    <motion.h1 style={{ y: Text }}>Page Links </motion.h1>
        <motion.a
          href='/'
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}  style={{fontSize:'25px'}}
        >
          Home
        </motion.a>
        <motion.a
          href='/regCan'
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}  style={{fontSize:'25px'}}
        >
          Registered  Candidates
        </motion.a>
        <motion.a
          href='/register'
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}  style={{fontSize:'25px'}}
        >
          Register
        </motion.a>
    <motion.h1 style={{ y: Text }}>Home page internal link </motion.h1>

      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}  style={{fontSize:'25px'}}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
    </>
  );
};

export default Links;
