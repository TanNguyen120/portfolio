import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({
  imgUrl,
  description,
  projectLink,
  projectName,
  websiteLink,
}: {
  imgUrl: string;
  description: string;
  projectLink: string;
  projectName: string;
  websiteLink: any;
}) {
  return (
    <div className=' bg-slate-700 shadow-sm shadow-slate-300 grid grid-cols-2 border border-slate-200 p-1 lg:w-8/12 lg:mx-auto md:mx-10 mx-1  '>
      <Image
        height={1420}
        width={1780}
        src={imgUrl}
        alt='project poster'
        object-fit='scale-down'
        className='w-96 h-96 object-cover'
      />

      <div className='grid grid-col-1 justify-start p-2'>
        <div className=' text-white text-lg m-4 font-semibold text-center'>
          {projectName}
        </div>
        <div className=' text-slate-400 '>{description}</div>
        <Link
          target='_blank'
          href={projectLink}
          className=' text-slate-300 hover:text-slate-500 hover:underline mt-auto'
        >
          To Project
        </Link>
        {/* Some project is not a web */}
        <Link
          href={websiteLink ? websiteLink : ''}
          className={
            websiteLink ? ' text-slate-300 hover:underline mt-2' : 'hidden'
          }
          title={websiteLink}
          target='blank'
        >
          To Web Site
        </Link>
      </div>
    </div>
  );
}
