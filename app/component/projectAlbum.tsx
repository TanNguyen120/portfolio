'use client';
import { useEffect, useState } from 'react';
import projects from '@/project.json';
import { motion } from 'framer-motion';
import ProjectCard from './projectCard';
import { MdOutlineNavigateNext } from 'react-icons/md';

export default function ProjectAlbum() {
  const projectsArray = projects.projects;
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeProject, setActiveProject] = useState(projectsArray[0]);

  // handle changing index to prevent index out of bound
  const handleChangeIndex = (index: number) => {
    if (index >= 0 || index <= projectsArray.length) {
      setActiveIndex(index);
      return null;
    }
    console.log(
      'current index: ' + index + ' in array lenght: ' + projectsArray.length
    );
  };

  useEffect(() => {
    setActiveProject(projectsArray[activeIndex]);
  }, [activeIndex, projectsArray]);
  return (
    <div className=' flex flex-col'>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ProjectCard
          imgUrl={activeProject.imgUrl}
          description={activeProject.description}
          projectLink={activeProject.projectLink}
          projectName={activeProject.projectName}
          websiteLink={activeProject.webSiteLink}
        />
      </motion.div>
      <motion.button
        whileTap={{
          scale: 0.7,
          color: 'rgb(105, 105, 105)',
        }}
        transition={{
          duration: 0.5,
        }}
        onClick={(e) => handleChangeIndex(activeIndex + 1)}
      >
        <MdOutlineNavigateNext className=' w-20 h-20' />
      </motion.button>
    </div>
  );
}
