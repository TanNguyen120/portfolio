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
    <div className=' bg-slate-700 shadow-sm shadow-slate-300 grid grid-cols-3 '>
      <Image height={920} width={1280} src={imgUrl} alt='project poster' />
      <div className=' col-span-2 flex flex-col items-center m-5'>
        <div className=' text-white text-lg m-4 font-semibold'>
          {projectName}
        </div>
        <div className=' text-slate-400 m-5'>{description}</div>
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
