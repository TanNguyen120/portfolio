'use client';
import Link from 'next/link';
import { Variants, motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

const picAnimate = {
  initial: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      duration: 3,
      type: 'spring',
    },
  },
};

const DegreePic = () => {
  const [isOpen, setIsOpen] = useState(false);
  // reference to the div below
  const ref = useRef(null);
  // a listener fof when the div have ref is in view
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      onClick={(e) => setIsOpen((preState) => !preState)}
      className=' cursor-crosshair'
      whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}
      variants={picAnimate}
      animate={isInView ? 'show' : 'initial'}
    >
      {/* Using state to determine which version of the image is render */}
      {isOpen && (
        <motion.div
          initial={{ scale: 0, rotate: 90 }}
          animate={{ scale: 1, rotate: -90 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Image
            src={'/btn.jpg'}
            alt='DegreePic'
            width={1000}
            height={1000}
            className={`rounded-lg  object-cover`}
          />
        </motion.div>
      )}
      {!isOpen && (
        <motion.div
          initial={{ scale: 2, rotate: 90 }}
          animate={{ scale: 1, rotate: -90 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Image
            src={'/btn.jpg'}
            alt='DegreePic'
            width={400}
            height={400}
            className={`${isOpen ? 'hidden' : ''} rounded-lg object-cover`}
          />{' '}
        </motion.div>
      )}
    </motion.div>
  );
};

export default DegreePic;
