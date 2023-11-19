'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const uniAnimated = {
  initial: {
    y: 20,
    scale: 0,
  },
  animate: (i: number) => ({
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeInOut', delay: i * 0.1 },
  }),
  // later animate will be animate after the first paragraph
  laterAnimate: (i: number) => ({
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeInOut', delay: i * 0.1 + 3 },
  }),
};

const genericAnimated = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeInOut', delay: 1 },
  },
};

export default function UniversityAbout() {
  // reference to the div below
  const ref = useRef(null);
  // a listener fof when the div have ref is in view
  const isInView = useInView(ref);

  const paragraph1 =
    `VNUHCM-US was re-founded in March 1996 following a split from Ho Chi
        Minh City University. The school has since been a member university of
        Vietnam National University, Ho Chi Minh City.`.match(/\b(\w+)\b/g); // slice word from string

  const paragraph2 =
    `The two joint bachelor programs include Bachelor of Computer &
        Information Sciences with a major in IT Service Science collaborated
        with Auckland University of Technology, New Zealand; Bachelor of Science
        in Management collaborated with a major in International Business
        collaborated with Keuka College, USA[1]`.match(/\b(\w+)\b/g);
  return (
    <div ref={ref}>
      <motion.div
        variants={genericAnimated}
        initial='initial'
        animate={isInView ? 'animate' : 'initial'}
        className=' flex flex-row mb-3'
      >
        <div className=' flex flex-col'>
          <div className=' text-slate-200 text-xl'>
            VNUHCM University of Science{' '}
          </div>
          <div className=' text-slate-400'>
            Bachelor of Science in Information Technology
          </div>
        </div>
        <div className=' text-slate-200 float-right ml-auto'>
          Sept 2016 - Sept 2022
        </div>
      </motion.div>
      <div className='flex flex-col'>
        <div className=' text-white text-left flex flex-row gap-2 flex-wrap'>
          {paragraph1?.map((e, i) => (
            <motion.div
              className=' hover:cursor-pointer opacity-50'
              variants={uniAnimated}
              initial='initial'
              animate={isInView ? 'animate' : 'initial'}
              custom={i}
              key={i}
            >
              {e}
            </motion.div>
          ))}
        </div>
        <div className=' mt-5 text-white flex flex-row gap-2 flex-wrap'>
          {paragraph2?.map((e, i) => (
            <motion.div
              variants={uniAnimated}
              initial='initial'
              animate={isInView ? 'laterAnimate' : 'initial'}
              custom={i}
              key={i}
            >
              {e}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
