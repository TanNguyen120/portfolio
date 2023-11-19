'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimationControls, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const projectCardAnimated = {
  hidden: {
    opacity: 0,
  },
  initialBtn: {
    width: '0%',
    height: 'fit-content',
  },
  showRise: {
    opacity: [0, 1],
    y: [100, 0],
    transition: { duration: 1.5, ease: 'easeInOut' },
  },
  clearWidth: (i: number) => ({
    width: 'fit-content',
    transition: { duration: 1, delay: 1 * i },
  }),
};
export default function ProjectCard({
  imgUrl,
  description,
  projectLink,
  projectName,
  websiteLink,
  skills,
}: {
  imgUrl: string;
  description: string;
  projectLink: string;
  projectName: string;
  websiteLink: any;
  skills: any;
}) {
  const projectTileControls = useAnimationControls();
  const descriptionControls = useAnimationControls();
  const btnControl = useAnimationControls();
  useEffect(() => {
    const chainAnimate = async () => {
      descriptionControls.start('hidden');
      projectTileControls.start('hidden');
      btnControl.start('initialBtn');
      await projectTileControls.start('showRise');
      await descriptionControls.start('showRise');
      await btnControl.start('clearWidth');
    };
    chainAnimate();
  }, [imgUrl, projectTileControls, descriptionControls, btnControl]);
  return (
    <div className=' bg-slate-700 shadow-sm shadow-slate-300 grid grid-cols-2 border border-slate-200 p-1 lg:w-8/12 lg:mx-auto md:mx-10 mx-1  '>
      <Image
        height={420}
        width={780}
        src={imgUrl}
        alt='project poster'
        object-fit='scale-down'
        className='object-cover'
      />

      <motion.div className='grid grid-col-1 justify-start p-2'>
        <motion.div
          variants={projectCardAnimated}
          animate={projectTileControls}
          className=' text-white text-lg m-4 font-semibold text-center'
        >
          {projectName}
        </motion.div>
        <motion.div
          variants={projectCardAnimated}
          animate={descriptionControls}
          className=' text-slate-400 py-3 px-5 '
        >
          {description}
        </motion.div>
        <div className=' border-t border-slate-200 pt-5 mt-2 flex flex-row flex-wrap gap-4 px-5  '>
          {skills.map((e: string, i: number) => (
            <motion.div
              key={i}
              className='bg-slate-300 text-slate-700 rounded-md text-center hover:cursor-pointer'
              variants={projectCardAnimated}
              animate={btnControl}
              custom={i}
              whileHover={{
                scale: 1.3,
                rotate: [15, -15, 0],
              }}
            >
              <div className='px-3 py-1'>{e}</div>
            </motion.div>
          ))}
        </div>

        <Link
          target='_blank'
          href={projectLink}
          className=' text-slate-300 hover:text-slate-500 hover:underline mt-auto text-center'
        >
          To Project
        </Link>
        {/* Some project is not a web */}
        <Link
          href={websiteLink ? websiteLink : ''}
          className={
            websiteLink
              ? ' text-slate-300 hover:underline mt-2 text-center'
              : 'hidden'
          }
          title={websiteLink}
          target='blank'
        >
          To Web Site
        </Link>
      </motion.div>
    </div>
  );
}
