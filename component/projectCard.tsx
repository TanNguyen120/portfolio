import Link from 'next/link';

export default function ProjectCard({
  imgUrl,
  description,
  projectLink,
  projectName,
}: {
  imgUrl: string;
  description: string;
  projectLink: string;
  projectName: string;
}) {
  return (
    <div className=' w-3/5 bg-slate-700 shadow-sm shadow-slate-300 grid grid-cols-3 '>
      <img src={imgUrl} alt='project poster' className=' w-max h-max' />

      <div className=' col-span-2 flex flex-col items-center m-5'>
        <div className=' text-white'>{projectName}</div>
        <div className=' text-slate-400 m-5'>{description}</div>
        <Link
          target='_blank'
          href={projectLink}
          className=' text-slate-300 hover:text-slate-500 hover:underline mt-auto'
        >
          To Project
        </Link>
      </div>
    </div>
  );
}
