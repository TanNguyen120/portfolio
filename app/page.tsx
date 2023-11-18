import HeadTile from '@/app/component/headTile';
import ProjectCard from '@/app/component/projectCard';
import SkillBtn from '@/app/component/skillBtn';
import Link from 'next/link';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import projects from '@/project.json';
import NavBar from './component/navBar';
import Image from 'next/image';
import ScrollProgressBar from './component/scrollProgress';
import ProfilePicture from './component/profilePicture';
import DegreePic from './component/degreePic';
import ProjectAlbum from './component/projectAlbum';
import NameAndTile from './component/nameAndTile';
import AboutMe from './component/aboutMe';
import UniversityAbout from './component/univercityAbout';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between  bg-slate-200'>
      <div className=' grid grid-cols-1 bg-violetSpace bg-cover w-screen '>
        <div className=' min-h-screen flex flex-col md:px-12 px-3 items-center bg-slate-800 bg-opacity-75'>
          <ScrollProgressBar />
          <NavBar />
          <NameAndTile />
          <ProfilePicture />
        </div>
      </div>
      <div
        className=' flex justify-center min-w-full bg-slate-800 lg:p-44 md:p-10 p-5 shadow-md shadow-slate-50'
        id='aboutMe'
      >
        <div className='flex lg:flex-row flex-col lg:w-1/2 items-center lg:gap-24 gap-10'>
          <HeadTile tile='About Me' />
          <AboutMe />
        </div>
      </div>
      {/* ============================================================================================================================================================================== */}
      <div className='  min-w-full bg-slate-700 lg:p-24 md:p-10 pt-10 p-2 shadow-md shadow-slate-400 flex items-center justify-center'>
        <div
          className='flex flex-col lg:w-1/2 lg:gap-24 gap-5 md:gap-10 justify-center items-center '
          id='education'
        >
          <HeadTile tile='Education' />
          <div className=' flex flex-col border w-full md:w-fit border-slate-500 lg:p-10 md:p-5  p-2  '>
            <UniversityAbout />
          </div>
          <DegreePic />
        </div>
      </div>
      {/* ============================================================================================================================================================================== */}

      <div
        className='flex flex-col items-center gap-14 justify-center min-w-full bg-slate-800 lg:p-24 md:p-5 p-2 shadow-md shadow-slate-50'
        id='projects'
      >
        <HeadTile tile='Projects' />
        <ProjectAlbum />
      </div>
      {/* ============================================================================================================================================================================== */}
      <div
        className=' flex flex-col min-w-full bg-slate-700 p-24 shadow-md shadow-slate-400  items-center'
        id='skills'
      >
        <HeadTile tile='Skills' />
        <SkillBtn />
      </div>
      {/* ============================================================================================================================================================================== */}
      <div
        className='flex flex-col items-center gap-14 justify-center min-w-full bg-slate-800 p-24 shadow-md shadow-slate-50'
        id='contact'
      >
        <HeadTile tile='Contact Me' />
        <div className=' flex flex-col w-1/2 mx-auto my-3 pl-12 gap-5'>
          <div className=' flex flex-row text-white text-lg'>
            <div className=' mr-4 text-slate-300'>
              Email <MdOutlineAlternateEmail className='inline' />:
            </div>
            <div>tannguyen1220@gmail.com</div>
          </div>
          <div className=' flex flex-row text-white text-lg'>
            <div className=' mr-4 text-slate-300'>
              GitHub <BsGithub className='inline' /> :
            </div>
            <Link
              className='hover:text-blue-300'
              href={'https://github.com/TanNguyen120/'}
            >
              https://github.com/TanNguyen120/
            </Link>
          </div>
          <div className=' flex flex-row text-white text-lg '>
            <div className=' mr-4 text-slate-300'>
              Linkdein <AiFillLinkedin className='inline' />:
            </div>
            <Link
              className=' hover:text-blue-300'
              href={
                ' https://www.linkedin.com/in/t%C3%A2n-nguy%E1%BB%85n-vi%E1%BB%87t-89852b266/'
              }
            >
              https://www.linkedin.com/Tan Nguyen
            </Link>
          </div>
        </div>
      </div>
      {/* ============================================================================================================================================================================== */}
      <div className='flex flex-col min-w-full bg-black text-slate-200 p-24 shadow-md shadow-slate-400  items-center'>
        Copyright © {new Date().getFullYear()} Nguyen Viet Tan
      </div>
    </main>
  );
}
