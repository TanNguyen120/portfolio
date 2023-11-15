'use client';
import Link from 'next/link';
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

const DegreePic = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      onClick={(e) => setIsOpen((preState) => !preState)}
      className=' cursor-crosshair'
      whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}
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
