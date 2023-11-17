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
    <div className=' bg-slate-700 shadow-sm shadow-slate-300 grid grid-cols-1 border border-slate-200 p-1 w-8/12 mx-auto '>
      <Image
        height={420}
        width={780}
        src={imgUrl}
        alt='project poster'
        object-fit='scale-down'
        className=' object-scale-down mx-auto mt-2'
      />

      <div className='flex flex-col items-center m-5'>
        <div className=' text-white text-lg m-4 font-semibold'>
          {projectName}
        </div>
        <div className=' text-slate-400 mx-auto  w-3/4'>{description}</div>
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
