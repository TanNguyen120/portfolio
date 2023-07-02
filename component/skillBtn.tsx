export default function SkillBtn({ tile }: { tile: string }) {
  return (
    <div className=' flex flex-col  w-1/3 items-center mb-5'>
      <div className=' text-white font-semibold text-3xl text-center'>
        {tile}
      </div>
      <div className=' border-t w-14 border-slate-600'></div>
    </div>
  );
}
