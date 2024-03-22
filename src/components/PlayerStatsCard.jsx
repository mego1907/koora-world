import React from 'react';
import Image from "next/image"

const PlayerStatsCard = () => {
  return (
    <div className='flex items-center justify-between p-5 px-8 bg-white'>
      <div className="flex flex-col items-center justify-between text-2xl text-center">
        <Image 
          src="/assets/5bc4a932861d1c625156db71b514edba.jpg" 
          alt="player" 
          width={64} 
          height={64} 
          className='rounded-full' 
        />
        <span>اسلام بركة</span>
      </div>
      <div className="flex flex-col items-center justify-between text-2xl text-center">
        <h4 className="text-[#912681] text-2xl">هدف</h4>

        <div className="flex items-center gap-2">
          {/* Left Team */}
          <div className="flex text-[32px] font-medium gap-2 items-center">
            <Image width={48} height={48} src="/assets/man-city.png" alt="man-city" />
            <span>24</span>
          </div>
          <span> - </span>
          {/* Right Team */}
          <div className="flex text-[32px] font-medium items-center gap-2">
            <span>03</span>
            <Image width={48} height={48} src="/assets/barcelona.png" alt="barcelona" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between text-2xl text-center">
        <Image src="/assets/5bc4a932861d1c625156db71b514edba.jpg" width={64} height={64} alt="player" className='rounded-full' />
        <span>اسلام بركة</span>
      </div>
    </div>
  )
}

export default PlayerStatsCard