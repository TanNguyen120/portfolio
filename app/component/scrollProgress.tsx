'use client';
import { motion, useScroll } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className=' h-3 origin-top-left fixed top-0 left-0 right-0 bg-slate-300 z-20'
      style={{ scaleX: scrollYProgress }}
    />
  );
}
