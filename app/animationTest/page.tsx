'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function AnimationTest() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between  bg-slate-200'>
      <div className=' grid grid-cols-1 bg-violetSpace bg-cover w-screen '>
        <div className=' min-h-screen flex flex-col px-12 items-center bg-slate-800 bg-opacity-75'>
          <motion.div
            className=' w-fit h-fit p-4 bg-red-500 ring ring-blue-500 mx-auto my-10 hover:text-white'
            whileHover={{ scale: 1.9 }}
            whileTap={{ scale: 1.8, color: '#00a400' }}
            drag={true}
            dragConstraints={{ left: 100, right: 100, top: 299, bottom: 400 }}
            dragSnapToOrigin={true}
          >
            see, I am an animation
          </motion.div>
          {/* The toggle div section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className='bg-green-500 text-red-500 ring ring-yellow-500 w-fit h-fit p-5 my-2 hover:cursor-pointer'
            onClick={(e) => setIsVisible((state) => !state)}
            whileHover={{ scale: 1.9 }}
          >
            {isVisible ? 'on' : 'off'}
          </motion.div>
          {/* ----------------------------------------------------- */}
          {isVisible && (
            <AnimatePresence>
              <motion.div
                className=' w-28 h-28 bg-violet-600 my-80'
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ['0%', '0%', '50%', '50%', '0%'],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2,
                  ease: 'easeInOut',
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            </AnimatePresence>
          )}
        </div>
      </div>
    </main>
  );
}
