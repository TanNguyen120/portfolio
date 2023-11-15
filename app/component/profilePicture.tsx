'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfilePicture() {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9, rotate: ['20deg', '-20deg', '0deg'] }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className=' rounded-full w-96 h-96 my-8 mx-auto'>
        <Link href={'#aboutMe'}>
          <Image
            src={'/portrait.png'}
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
