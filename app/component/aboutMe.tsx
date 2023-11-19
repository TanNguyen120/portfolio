'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const aboutAnimated = {
  initial: {
    opacity: 0,
  },
  show: (i: number) => ({
    opacity: 1,
    transition: { duration: i * 4, ease: 'easeInOut' },
  }),
};

export default function AboutMe() {
  // reference to the div below
  const ref = useRef(null);
  // a listener fof when the div have ref is in view
  const isInView = useInView(ref);

  const paragraphWords =
    `With Bachelor Degree in Information Technology, I have intermediate
      knowledge in math for computer (Discrete Mathematics, Number Theory, Graph
      Theory). Strong knowledge in DataStructure and Algorithm, Devops, Dynamic
      Programming.`.match(/\b(\w+)\b/g); // slice word from string
  return (
    <div className='text-white text-left lg:w-1/2 ml-5 mr-auto flex flex-row gap-2 flex-wrap'>
      {paragraphWords?.map((e, i) => (
        <motion.div
          ref={ref}
          variants={aboutAnimated}
          initial='initial'
          whileHover={{
            scale: 0.6,
            color: '#869dba',
          }}
          animate={isInView ? 'show' : 'initial'}
          custom={Math.random()}
          key={i}
          className='hover:cursor-pointer'
        >
          {e}
        </motion.div>
      ))}
    </div>
  );
}
