'use client';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
const skillList = [
  'javaScript',
  'c++',
  'c#',
  'python',
  'php',
  'java',
  'react',
  'unity',
  'phaser',
  'nextjs',
  'nestjs',
  'node',
  'react-native',
  'expressjs',
  'tailwind',
  'jquery',
  'sqlSever',
  'Database Design',
  'mySql',
  'MongoDB',
  'numpy',
  'Tablelau',
  'Git',
  'GitHub',
  'Phaser 3',
  'Post Man',
  'Ajax',
];

const btnAnimate = {
  initial: { y: 1500 },
  show: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.6,
      type: 'spring',
      delay: Math.random() * 4,
    },
  }),
};

export default function SkillBtn() {
  // reference to the div below
  const ref = useRef(null);
  // a listener fof when the div have ref is in view
  const isInView = useInView(ref);

  return (
    <div
      className=' flex flex-row py-5 gap-4 m-auto items-center lg:w-1/2 md:w-3/4 w-full  flex-wrap'
      ref={ref}
    >
      {skillList.map((e, i) => (
        <motion.div
          className=' px-4 py-2 bg-slate-400 text-white mx-auto'
          variants={btnAnimate}
          initial={{ rotate: 0 }}
          whileHover={{
            scale: 1.3,
            rotate: [15, -15, 0],
          }}
          animate={isInView ? 'show' : 'initial'}
          custom={i}
          key={i}
        >
          {e}
        </motion.div>
      ))}
    </div>
  );
}
