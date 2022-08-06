import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import Layout from '../../components/layout';

const TEMPLES_DATA = [
  'bajrang-bali.jpeg',
  'krishna-arjun.jpeg',
  'krishna-arjun33.jpeg',
  'maa-durga.jpeg',
  'Martand-sun-temple.jpeg',
  'mumbai.jpeg',
];
const templesVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};
const Temples = () => {
  const TEMPLES = TEMPLES_DATA.map((item) => ({
    slug: item.split('.')[0],
    path: item,
  }));
  return (
    // <Layout>
    <div className="container">
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
      >
        <h4>List</h4>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
          }}
        >
          {TEMPLES.map((item, index) => (
            <motion.div variants={templesVariants} key={`temple_${index}`}>
              <Link href={`/temples/${item.path}`}>
                <motion.img
                  whileHover="hover"
                  variants={{
                    hover: {
                      scale: 0.96,
                    },
                  }}
                  width="120px"
                  height="120px"
                  alt="about"
                  src={item.path}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
    // </Layout>
  );
};

export default Temples;
