import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between  bg-slate-200'>
      <div className=' grid grid-cols-1 bg-violetSpace bg-cover w-screen '>
        <div className=' min-h-screen flex flex-col p-12 items-center bg-slate-800 bg-opacity-75'>
          <div className=' text-white font-semibold text-6xl '>
            Nguyễn Việt Tân
          </div>
          <div className=' text-slate-300 font-semibold text-4xl mt-10  '>
            Software Engineer
          </div>
          <div className=' rounded-full w-1/5 h-1/5 m-6'>
            <img
              src='https://cdn.icon-icons.com/icons2/1919/PNG/512/avatarinsideacircle_122011.png'
              alt='avatar'
            />
          </div>
        </div>
      </div>
      <div className=' flex flex-row items-center min-w-full bg-slate-800'>
        <div className=' text-white font-semibold text-2xl w-1/3 text-center'>
          About Me
        </div>
        <div></div>
      </div>
    </main>
  );
}
