'use client';
import { Variants, motion, useInView } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { SiUpwork } from 'react-icons/si';

import Link from 'next/link';

const contactAnimate = {
  hidden: { opacity: 0, y: 100 },
  show: (delayTime: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      delay: delayTime * 0.8,
    },
  }),
};

export default function ContactMe() {
  // reference to the div below
  const ref = useRef(null);
  // a listener fof when the div have ref is in view
  const isInView = useInView(ref);
  return (
    <div className=' flex flex-col w-1/2 mx-auto my-3 pl-12 gap-5' ref={ref}>
      <motion.div
        variants={contactAnimate}
        animate={isInView ? 'show' : 'hidden'}
        custom={0}
        className=' flex flex-row text-white text-lg'
      >
        <div className=' mr-4 text-slate-300'>
          Email <MdOutlineAlternateEmail className='inline' />:
        </div>
        <div>tannguyen1220@gmail.com</div>
      </motion.div>
      <motion.div
        variants={contactAnimate}
        animate={isInView ? 'show' : 'hidden'}
        custom={2}
        className=' flex flex-row text-white text-lg'
      >
        <div className=' mr-4 text-slate-300'>
          GitHub <BsGithub className='inline' /> :
        </div>
        <Link
          className='hover:text-blue-300'
          href={'https://github.com/TanNguyen120/'}
        >
          https://github.com/TanNguyen120/
        </Link>
      </motion.div>
      <motion.div
        variants={contactAnimate}
        animate={isInView ? 'show' : 'hidden'}
        custom={4}
        className=' flex flex-row text-white text-lg '
      >
        <div className=' mr-4 text-slate-300'>
          Linkdein <AiFillLinkedin className='inline' />:
        </div>
        <Link
          className=' hover:text-blue-300'
          href={
            ' https://www.linkedin.com/in/t%C3%A2n-nguy%E1%BB%85n-vi%E1%BB%87t-89852b266/'
          }
        >
          https://www.linkedin.com/Tan Nguyen
        </Link>
      </motion.div>
      <motion.div
        variants={contactAnimate}
        animate={isInView ? 'show' : 'hidden'}
        custom={5}
        className=' flex flex-row text-white text-lg '
      >
        <div className=' mr-4 text-slate-300'>
          Upwork <SiUpwork className='inline' />:
        </div>
        <Link
          className=' hover:text-blue-300'
          href={
            ' https://www.linkedin.com/in/t%C3%A2n-nguy%E1%BB%85n-vi%E1%BB%87t-89852b266/'
          }
        >
          n/a
        </Link>
      </motion.div>
    </div>
  );
}
