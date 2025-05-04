// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// import { AppWrap, MotionWrap } from '../../wrapper';
// import './About.scss';
// import { urlFor, client } from '../../client';

// const About = () => {
//   const [abouts, setAbouts] = useState([]);

//   useEffect(() => {
//     const query = '*[_type == "abouts"]';

//     client.fetch(query).then((data) => {
//       setAbouts(data);
//     });
//   }, []);

//   return (
//     <>
//       <h3 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h3>

//       <div className="app__profiles">
//         {abouts.map((about, index) => (
//           <motion.div
//             whileInView={{ opacity: 1 }}
//             whileHover={{ scale: 1.1 }}
//             transition={{ duration: 0.5, type: 'tween' }}
//             className="app__profile-item"
//             key={about.title + index}
//           >
//             <img src={urlFor(about.imgUrl)} alt={about.title} />
//             <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
//             <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default AppWrap(
//   MotionWrap(About, 'app__about'),
//   'about',
//   'app__whitebg',
// );

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

  return (
    <>
      <h3 className="head-text">
        I Know that <span>Good Design</span> <br />means <span>Good Business</span>
      </h3>

      <div className="app__profiles">
        <motion.div
          key={abouts[currentIndex]?.title}
          className="app__profile-item"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={urlFor(abouts[currentIndex]?.imgUrl)}
            alt={abouts[currentIndex]?.title}
          />
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            {abouts[currentIndex]?.title}
          </h2>
          <p className="p-text" style={{ marginTop: 10 }}>
            {abouts[currentIndex]?.description}
          </p>
        </motion.div>
      </div>

      <div className="app__carousel-controls">
        <button className="prev" onClick={handlePrev}>Prev</button>
        <button className="next" onClick={handleNext}>Next</button>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
