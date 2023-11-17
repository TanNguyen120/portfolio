export default function HeadTile({ tile }: { tile: string }) {
  return (
    <div className=' flex flex-col  lg:w-1/3 items-center mb-5'>
      <div className=' text-white font-semibold lg:text-3xl md:text-xl text-lg text-center'>
        {tile}
      </div>
      <div className=' border-t w-14 border-slate-600'></div>
    </div>
  );
}
