'use client';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const picAnimate = {
  initial: { scale: 0, rotate: '180deg' },
  show: {
    scale: 1,
    rotate: '0deg',
    transition: { duration: 1.5, type: 'spring' },
  },
};

export default function ProfilePicture() {
  // reference to the div below
  const ref = useRef(null);
  // a listener fof when the dif have ref is in view
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, rotate: '180deg' }}
      animate={isInView ? 'show' : 'initial'}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.1 }}
      variants={picAnimate}
    >
      <div className=' rounded-full w-96 h-96 my-8 mx-auto'>
        <Link href={'#aboutMe'}>
          <Image
            src={'/portrait-new.png'}
            alt='avatar'
            width={600}
            height={600}
            className=' rounded-lg hover:cursor-crosshair'
          />
        </Link>
      </div>
    </motion.div>
  );
}
