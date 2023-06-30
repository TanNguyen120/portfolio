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
      <div className=' flex flex-row items-center min-w-full bg-slate-800 p-44 drop-shadow-md'>
        <div className=' text-white font-semibold text-2xl w-1/3 text-center'>
          About Me
        </div>
        <div className=' text-white'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, dicta
          odio. Nisi dicta ratione aspernatur ex distinctio quod exercitationem
          eum ea hic porro minus voluptatem, facilis harum neque architecto
          assumenda.
        </div>
      </div>
      <div className=' flex flex-col items-center min-w-full bg-slate-700 p-44 drop-shadow-md'>
        <div className=' align-middle text-white font-semibold text-2xl'>
          Education
        </div>
        <div className=' flex flex-col border border-slate-500 p-10'>
          <div className=' flex flex-row'>
            <div className=' flex flex-col'>
              <div className=' text-slate-200 text-xl'>
                VNUHCM University of Science{' '}
              </div>
              <div className=' text-slate-400'>
                Bachelor of Science in Information Technology
              </div>
            </div>
            <div className=' text-slate-200 ml-20'>Sept 2016 - Sept 2022</div>
          </div>
          <div>
            Trường Đại học Khoa học Tự nhiên, Đại học Quốc gia Thành phố Hồ Chí
            Minh (University of Science, Viet Nam National University Ho Chi
            Minh City” hoặc “Viet Nam National University Ho Chi Minh City -
            University of Science” hoặc “VNUHCM-University of Science”, viết tắt
            là “VNUHCM-US” hoặc “HCMUS”) là trường đại học đầu ngành của Việt
            Nam về đào tạo, nghiên cứu khoa học cơ bản, khoa học công nghệ và
            ứng dụng. Là một trong những thành viên của Đại học Quốc gia Thành
            phố Hồ Chí Minh, được xếp vào nhóm trường đại học trọng điểm quốc
            gia Việt Nam. (Source: wikipedia)
          </div>
        </div>
      </div>
    </main>
  );
}
