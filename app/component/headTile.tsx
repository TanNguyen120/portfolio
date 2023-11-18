'use client';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const headAnimate = {
  initial: { scale: 0.5, x: 200 },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 2, type: 'spring', delay: 0.4 },
  },
};

export default function HeadTile({ tile }: { tile: string }) {
  // reference to the div below
  const ref = useRef(null);
  // a listener fof when the div have ref is in view
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      className=' flex flex-col  lg:w-1/3 items-center mb-5'
      variants={headAnimate}
      initial={{ opacity: 0, x: 100, scale: 0.5 }}
      animate={isInView ? 'show' : 'initial'}
    >
      <div className=' text-white font-semibold lg:text-3xl md:text-xl text-lg text-center'>
        {tile}
      </div>
      <div className=' border-t w-14 border-slate-600'></div>
    </motion.div>
  );
}
