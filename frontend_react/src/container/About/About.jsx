import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import './About.scss'; // images removed for now

const aboutCards = [
  {
    title: 'Security Analyst',
    description: 'Ensuring systems are protected against modern threats.',
  },
  {
    title: 'Integration Developer',
    description: 'Connecting applications seamlessly and securely.',
  },
  {
    title: 'Software Administrator',
    description: 'Maintaining and optimizing software platforms.',
  },
];

const transition = {
  duration: 1,
  ease: 'easeInOut',
};

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? aboutCards.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === aboutCards.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="app__about app__flex">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={transition}
        className="app__about-card"
      >
        <div className="app__about-card-content">
          <h2 className="head-text">{aboutCards[currentIndex].title}</h2>
          <p className="p-text">{aboutCards[currentIndex].description}</p>
        </div>
      </motion.div>

      <div className="app__about-dots">
        {aboutCards.map((_, index) => (
          <div
            key={index}
            className={`app__about-dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

      <div className="app__about-arrows">
        <div className="arrow-left" onClick={handlePrev}>&lt;</div>
        <div className="arrow-right" onClick={handleNext}>&gt;</div>
      </div>
    </div>
  );
};

export default AppWrap(About, 'about');

