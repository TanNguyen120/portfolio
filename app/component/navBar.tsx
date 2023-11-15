'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NavBar() {
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
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ ease: 'easeOut', duration: 0.7 }}
      className=' grid grid-cols-4 bg-slate-800 text-neutral-300 rounded-b-lg w-1/3 mx-auto  py-3 mb-6'
    >
      {[
        ['About Me', '#aboutMe'],
        ['Education', '#education'],
        ['Projects', '#projects'],
        ['Skills', '#skills'],
        // ['animationTest', '/animationTest'],
      ].map(([title, url]) => (
        <motion.div
          whileHover={{ scale: 1.6 }}
          whileTap={{ scale: 0.9, rotate: [-20, 20, 0] }}
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
      {/* <Link
        href={'/animationTest'}
        className='hover:bg-slate-600 rounded-lg px-2 py-4 text-center hover:text-white font-bold text-lg'
      >
        animationTest
      </Link> */}
    </motion.div>
  );
}
