'use client';
import { useEffect, useState } from 'react';
import projects from '@/project.json';
import { motion, useAnimationControls } from 'framer-motion';
import ProjectCard from './projectCard';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

export default function ProjectAlbum() {
  const projectsArray = projects.projects;
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
      transition: { duration: 1, ease: 'easeInOut' },
    });

    counterControl.start({
      opacity: [0, 1],
      scale: [0, 1],
      rotate: [90, 50, 0],
      transition: { duration: 1, ease: 'easeInOut' },
    });
  }, [activeIndex, projectsArray, controls, counterControl]);
  return (
    <div className=' flex flex-col'>
      <div className='w-full flex flex-row justify-center text-slate-200 text-xl my-3 '>
        Project:{' '}
        <motion.div animate={counterControl}>{activeIndex + 1}</motion.div>/
        {projectsArray.length}
      </div>
      <div className=''>
        <motion.div animate={controls} transition={{ duration: 0.5 }}>
          <ProjectCard
            imgUrl={activeProject.imgUrl}
            description={activeProject.description}
            projectLink={activeProject.projectLink}
            projectName={activeProject.projectName}
            websiteLink={activeProject.webSiteLink}
          />
        </motion.div>
      </div>
      <div className=' flex flex-row mx-auto'>
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
          className=' w-20 h-20 text-slate-200 text-6xl mx-3 '
        >
          <IoIosArrowForward />
        </motion.button>
      </div>
    </div>
  );
}
