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
          <NavBar />
          <div className=' text-white font-semibold text-6xl '>
            Nguyễn Việt Tân
          </div>
          <div className=' text-slate-300 font-semibold text-4xl mt-10  '>
            Software Engineer
          </div>
          <div className=' rounded-full w-1/5 h-1/5 m-6'>
            <Image
              src={'/avatar.jpg'}
              alt='avatar'
              width={1200}
              height={1200}
              className=' rounded-full'
            />
          </div>
        </div>
      </div>
      <div
        className=' flex justify-center min-w-full bg-slate-800 p-44 shadow-md shadow-slate-50'
        id='aboutMe'
      >
        <div className='flex flex-row w-1/2 items-center gap-24'>
          <HeadTile tile='About Me' />
          <div className=' text-white'>
            With Bachelor Degree in Computer Science, I have intermediate
            knowledge in math for computer (Discrete Mathematics, Number Theory,
            Graph Theory) and programming technic as well as data structure and
            algorithms. In my final year of college I also do project that
            involve full stack Software with modern framework, data base design
            and analysis ( see projects below)
          </div>
        </div>
      </div>
      {/* ============================================================================================================================================================================== */}
      <div className='  min-w-full bg-slate-700 p-24 shadow-md shadow-slate-400 flex items-center justify-center'>
        <div className='flex flex-col w-1/2 gap-24 justify-center items-center '>
          <HeadTile tile='Education' />
          <div className=' flex flex-col border border-slate-500 p-10 '>
            <div className=' flex flex-row '>
              <div className=' flex flex-col'>
                <div className=' text-slate-200 text-xl'>
                  VNUHCM University of Science{' '}
                </div>
                <div className=' text-slate-400'>
                  Bachelor of Science in Information Technology
                </div>
              </div>
              <div className=' text-slate-200 float-right ml-auto'>
                Sept 2016 - Sept 2022
              </div>
            </div>
            <div className=' my-5 text-slate-300'>
              Trường Đại học Khoa học Tự nhiên, Đại học Quốc gia Thành phố Hồ
              Chí Minh (University of Science, Viet Nam National University Ho
              Chi Minh City” hoặc “Viet Nam National University Ho Chi Minh City
              - University of Science” hoặc “VNUHCM-University of Science”, viết
              tắt là “VNUHCM-US” hoặc “HCMUS”) là trường đại học đầu ngành của
              Việt Nam về đào tạo, nghiên cứu khoa học cơ bản, khoa học công
              nghệ và ứng dụng. Là một trong những thành viên của Đại học Quốc
              gia Thành phố Hồ Chí Minh, được xếp vào nhóm trường đại học trọng
              điểm quốc gia Việt Nam. (Source: wikipedia)
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================================================================================================================================== */}
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
