import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './About.scss';

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [abouts, setAbouts] = useState([]);
  const [direction, setDirection] = useState(0); // 1 for forward, -1 for backward

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const newIndex =
        newDirection === 1
          ? (prevIndex + 1) % abouts.length
          : (prevIndex - 1 + abouts.length) % abouts.length;
      return newIndex;
    });
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <>
      {abouts.length > 0 && (
        <>
          <div className="app__testimonial-item-wrapper app__flex">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                className="app__testimonial-item app__flex"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <img
                  src={urlFor(abouts[currentIndex].imgUrl)}
                  alt={abouts[currentIndex].title}
                />

                <div className="app__testimonial-content">
                  <h2 className="bold-text">{abouts[currentIndex].title}</h2>
                  <div>
                    <p className="p-text">{abouts[currentIndex].description}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => paginate(-1)}>
              <HiChevronLeft />
            </div>
            <div className="app__flex" onClick={() => paginate(1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(About, 'app__testimonial'), 'about', 'app__whitebg');
