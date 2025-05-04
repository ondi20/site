import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % abouts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? abouts.length - 1 : prevIndex - 1
    );
  };

  const currentAbout = abouts[currentIndex];

  return (
    <>
      <h3 className="head-text">
        I Know that <span>Good Design</span> <br />means <span>Good Business</span>
      </h3>

      <div className="app__profiles">
        {currentAbout && (
          <motion.div
            key={currentAbout.title}
            className="app__profile-item"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {currentAbout.imgUrl && (
              <img
                src={urlFor(currentAbout.imgUrl)}
                alt={currentAbout.title}
              />
            )}
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {currentAbout.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {currentAbout.description}
            </p>
          </motion.div>
        )}
      </div>

      {abouts.length > 1 && (
        <div className="app__carousel-controls">
          <button className="prev" onClick={handlePrev}>Prev</button>
          <button className="next" onClick={handleNext}>Next</button>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
