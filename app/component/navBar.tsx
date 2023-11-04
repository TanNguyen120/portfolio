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
    <div className=' grid grid-cols-5 bg-neutral-800 text-neutral-300 rounded-b-lg w-1/3 mx-auto px-3 py-2 mb-6'>
      {/* <Link
        className=' hover:bg-slate-600 rounded-lg px-2 py-4 text-center'
        href='#aboutMe'
        onClick={handleScroll}
      >
        About Me
      </Link> */}
      {[
        ['About Me', '#aboutMe'],
        ['Education', '#education'],
        ['Projects', '#projects'],
        ['Skills', '#skills'],
        ['Contact', '#contact'],
        // ['animationTest', '/animationTest'],
      ].map(([title, url]) => (
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          key={title}
        >
          <Link
            href={url}
            className='hover:bg-slate-600 rounded-lg px-2 py-4 text-center hover:text-white font-bold text-lg'
            key={title}
            onClick={handleScroll}
          >
            {title}
          </Link>
        </motion.div>
      ))}
      {/* <Link
        href={'/animationTest'}
        className='hover:bg-slate-600 rounded-lg px-2 py-4 text-center hover:text-white font-bold text-lg'
      >
        animationTest
      </Link> */}
    </div>
  );
}
