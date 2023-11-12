'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProfilePicture() {
  return (
    <motion.div
      whileHover={{ scale: 1.6 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
    >
      <div className=' rounded-full w-96 h-96 my-8 mx-auto'>
        <Image
          src={'/portrait.png'}
          alt='avatar'
          width={600}
          height={600}
          className=' rounded-lg hover:cursor-crosshair'
        />
      </div>
    </motion.div>
  );
}
