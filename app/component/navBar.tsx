'use client';
import Link from 'next/link';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { MdMenu } from 'react-icons/md';
import { useState } from 'react';
const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    // The famous regex that i copy and actually don`t known about
    const targetId = href.replace(/.*\#/, '');
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        layout
        transition={{ ease: 'easeOut', duration: 1 }}
        className='  grid-cols-4 bg-slate-800 text-neutral-300 rounded-b-lg lg:w-1/3 mx-auto  py-3 mb-6 hidden md:grid '
        exit={{ scale: 0, opacity: 0 }}
      >
        {[
          ['About Me', '#aboutMe'],
          ['Education', '#education'],
          ['Projects', '#projects'],
          ['Skills', '#skills'],
          // ['animationTest', '/animationTest'],
        ].map(([title, url]) => (
          <motion.div
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9, rotate: -20 }}
            transition={{ duration: 0.3 }}
            key={title}
          >
            <motion.a
              href={url}
              className=' rounded-lg px-2 py-6 text-center hover:text-white font-bold text-lg'
              key={title}
              onClick={handleScroll}
            >
              {title}
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
      <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
          className=' md:hidden text-slate-200 bg-slate-900 rounded-lg w-3/4 mx-auto flex flex-row px-1 py-2'
        >
          Menu
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <MdMenu className='inline ml-2' />
          </motion.div>
        </motion.button>
        <motion.ul
          variants={{
            open: {
              clipPath: 'inset(0% 0% 0% 0% round 10px)',
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: 'inset(10% 50% 90% 50% round 10px)',
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
          className=' text-white rounded-lg bg-slate-800 w-min px-2 md:hidden'
        >
          {[
            ['About Me', '#aboutMe'],
            ['Education', '#education'],
            ['Projects', '#projects'],
            ['Skills', '#skills'],
            // ['animationTest', '/animationTest'],
          ].map(([title, url]) => (
            <motion.li key={title} variants={itemVariants}>
              <motion.a
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
                href={url}
                className=' rounded-lg px-2 py-6 text-center hover:text-white font-bold text-lg'
                key={title}
                onClick={handleScroll}
              >
                {title}
              </motion.a>{' '}
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </AnimatePresence>
  );
}
