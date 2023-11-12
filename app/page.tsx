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

export default function Home() {
  const skillList = [
    'javaScript',
    'c++',
    'c#',
    'python',
    'php',
    'java',
    'react',
    'unity',
    'phaser',
    'nextjs',
    'nestjs',
    'node',
    'react-native',
    'expressjs',
    'tailwind',
    'jquery',
    'sqlSever',
    'Database Design',
    'mySql',
    'MongoDB',
    'numpy',
    'Tablelau',
    'Git',
    'GitHub',
    'Phaser 3',
    'Post Man',
    'Ajax',
  ];
  return (
    <main className='flex min-h-screen flex-col items-center justify-between  bg-slate-200'>
      <div className=' grid grid-cols-1 bg-violetSpace bg-cover w-screen '>
        <div className=' min-h-screen flex flex-col px-12 items-center bg-slate-800 bg-opacity-75'>
          <ScrollProgressBar />
          <NavBar />
          <div className=' text-white font-semibold text-6xl '>
            Nguyễn Việt Tân
          </div>
          <div className=' text-slate-300 font-semibold text-4xl mt-10  '>
            Software Engineer
          </div>
          <ProfilePicture />
        </div>
      </div>
      <div
        className=' flex justify-center min-w-full bg-slate-800 p-44 shadow-md shadow-slate-50'
        id='aboutMe'
      >
        <div className='flex flex-row w-1/2 items-center gap-24'>
          <HeadTile tile='About Me' />

          <div className='flex flex-col'>
            <div className=' text-white'>
              VNUHCM-US was re-founded in March 1996 following a split from Đại
              học Tổng hợp (lit. translation: Ho Chi Minh City University). The
              school has since been a member university of Vietnam National
              University, Ho Chi Minh City.
            </div>
            <div className=' mt-5 text-white'>
              The two joint bachelor programs include Bachelor of Computer &
              Information Sciences with a major in IT Service Science
              collaborated with Auckland University of Technology, New Zealand;
              Bachelor of Science in Management collaborated with a major in
              International Business collaborated with Keuka College, USA[1]
            </div>

          <div className=' text-white'>
            With a Bachelor`&apos;`s Degree in Computer Science, I have
            intermediate knowledge in math for computers (Discrete Mathematics,
            Number Theory, Graph Theory) and programming techniques, as well as
            data structures and algorithms. I have strong experience with small
            to mid-size web applications, both in frontend and backend
            development. Additionally, I have worked on indie game projects
            using various engines.
          </div>
        </div>
      </div>
     
      <div
        className='flex flex-col items-center gap-14 justify-center min-w-full bg-slate-800 p-24 shadow-md shadow-slate-50'
        id='projects'
      >
        <HeadTile tile='Projects' />
        {projects.projects.map((e: any, i: number) => (
          <ProjectCard
            key={i}
            projectName={e.projectName}
            description={e.description}
            projectLink={e.projectLink}
            imgUrl={e.imgUrl}
            websiteLink={e.webSiteLink}
          />
        ))}
      </div>
      {/* ============================================================================================================================================================================== */}
      <div
        className=' flex flex-col min-w-full bg-slate-700 p-24 shadow-md shadow-slate-400  items-center'
        id='skills'
      >
        <HeadTile tile='Skills' />
        <div className=' flex flex-row py-5 gap-4 m-auto items-center w-1/2 flex-wrap'>
          {skillList.map((e, i) => (
            <SkillBtn key={i} skillName={e} />
          ))}
        </div>
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
