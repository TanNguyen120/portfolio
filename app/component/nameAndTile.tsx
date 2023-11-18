'use client';
import {
  Variants,
  inView,
  motion,
  useAnimationControls,
  useInView,
} from 'framer-motion';
import React, { useEffect, useRef } from 'react';

// Variation Object
const wordAnimated = {
  initial: {
    x: '100vh',
  },
  animate: (i: number) => ({
    x: 0,
    transition: { duration: 0.5 * (i + 1), ease: 'easeInOut' },
  }),
};

const jobTileAnimated = {
  initial: {
    y: 100,
    opacity: 0,
  },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 * (i + 1), ease: 'easeInOut' },
  }),
};

const NameAndTile = () => {
  // reference to the div below
  const ref = useRef(null);
  // a listener fof when the div have ref is in view
  const isInView = useInView(ref);

  const nameWords = 'Nguyen Viet Tan'.match(/\b(\w+)\b/g); // slice word from string
  const jobTile = 'Full Stack Developer'.match(/\b(\w+)\b/g);

  return (
    <div ref={ref} className=' mx-auto'>
      <div className=' text-white font-semibold text-6xl flex flex-row gap-4 text-center items-center'>
        {nameWords?.map((e, i) => (
          // Custom is to pass the index to variation
          <motion.div
            variants={wordAnimated}
            initial='initial'
            animate={isInView ? 'animate' : 'initial'}
            custom={i}
            key={i}
          >
            {e + ' '}
          </motion.div>
        ))}
      </div>
      <div className=' text-slate-300 font-semibold text-4xl mt-10 flex flex-row gap-3 text-center'>
        {jobTile?.map((e, i) => (
          <motion.div
            variants={jobTileAnimated}
            initial='initial'
            animate={isInView ? 'show' : 'initial'}
            key={i + ' work'}
            custom={i}
          >
            {e + ' '}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NameAndTile;
