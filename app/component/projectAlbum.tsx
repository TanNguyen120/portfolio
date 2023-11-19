'use client';
import { useEffect, useRef, useState } from 'react';
import projects from '@/project.json';
import { motion, useAnimationControls, useInView } from 'framer-motion';
import ProjectCard from './projectCard';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

// variant object
const projectAnimate = {
  initial: { opacity: 0, y: -300 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2.5,
      type: 'spring',
      delay: 1,
      bounce: 0.7,
    },
  },
};

const arrowAnimate = {
  hidden: { opacity: 0, x: -300 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      type: 'spring',
      delay: 1,
      bounce: 0.4,
    },
  },
};

export default function ProjectAlbum() {
  const projectsArray = projects.projects;

  // reference to the div we want to animate while in view
  const ref = useRef(null);
  // a listener fof when the div have ref is in view
  const isInView = useInView(ref);

  /** State use for control projects slider */
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeProject, setActiveProject] = useState(projectsArray[0]);
  const controls = useAnimationControls();
  const counterControl = useAnimationControls();

  // handle changing index to prevent index out of bound
  const handleChangeIndex = (index: number) => {
    if (index >= 0 || index <= projectsArray.length) {
      setActiveIndex(index);
    }
    if (index < 0) {
      setActiveIndex(projectsArray.length - 1);
    }
    if (index >= projectsArray.length) {
      setActiveIndex(0);
    }
  };

  useEffect(() => {
    setActiveProject(projectsArray[activeIndex]);
    controls.start({
      opacity: [0, 1],
      scale: [0, 1],
      transition: {
        duration: 2,
        ease: 'easeInOut',
        type: 'spring',
        bounce: 0.5,
      },
    });

    counterControl.start({
      opacity: [0, 1],
      scale: [0, 1],
      rotate: [90, 50, 0],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    });
  }, [activeIndex, projectsArray, controls, counterControl]);
  return (
    <div className=' flex flex-col' ref={ref}>
      <motion.div
        variants={arrowAnimate}
        animate={isInView ? 'show' : 'hidden'}
        className='w-full flex flex-row justify-center text-slate-200 text-xl mt-3 mb-7 '
      >
        Project:{' '}
        <motion.div animate={counterControl}>{activeIndex + 1}</motion.div>/
        {projectsArray.length}
      </motion.div>
      <motion.div
        className=''
        variants={projectAnimate}
        animate={isInView ? 'show' : 'initial'}
      >
        <motion.div animate={controls} transition={{ duration: 0.5 }}>
          <ProjectCard
            imgUrl={activeProject.imgUrl}
            description={activeProject.description}
            projectLink={activeProject.projectLink}
            projectName={activeProject.projectName}
            websiteLink={activeProject.webSiteLink}
          />
        </motion.div>
      </motion.div>
      <motion.div
        className=' flex flex-row mx-auto  my-4'
        variants={arrowAnimate}
        animate={isInView ? 'show' : 'hidden'}
      >
        {/* back button */}
        <motion.button
          whileTap={{
            scale: 0.7,
            color: 'rgb(105, 105, 105)',
          }}
          transition={{
            duration: 0.5,
          }}
          onClick={(e) => {
            handleChangeIndex(activeIndex - 1);
          }}
          className=' w-20 h-20 text-slate-200 text-6xl mx-3 '
        >
          <IoIosArrowBack />
        </motion.button>
        {/* next button */}
        <motion.button
          whileTap={{
            scale: 0.7,
            color: 'rgb(105, 105, 105)',
          }}
          transition={{
            duration: 0.5,
          }}
          onClick={(e) => {
            handleChangeIndex(activeIndex + 1);
          }}
          className=' w-20 h-20 text-slate-200 text-6xl mx-3'
        >
          <IoIosArrowForward />
        </motion.button>
      </motion.div>
    </div>
  );
}
