import React from 'react';
import Image from "next/image"

const PlayerStatsCard = () => {
  return (
    <div className='flex items-center justify-between p-5 md:px-8 px-4 bg-white'>
      <div className="flex flex-col items-center justify-between lg:text-2xl md:text-lg text-center">
        {/* <Image 
          src="/assets/5bc4a932861d1c625156db71b514edba.jpg" 
          alt="player" 
          width={64} 
          height={64} 
          className='rounded-full' 
        /> */}
        <img 
          src="/assets/5bc4a932861d1c625156db71b514edba.jpg"            
          alt="barcelona" 
          className="w-9 lg:w-16 h-9 md:w-12 md:h-12 lg:h-16 rounded-full" 
        />

        <span>اسلام بركة</span>
      </div>
      <div className="flex flex-col items-center justify-between md:text-2xl text-center">
        <h4 className="text-[#912681] lg:text-2xl md:text-lg">هدف</h4>

        <div className="flex items-center gap-2">
          {/* Left Team */}
          <div className="flex lg:text-[32px] md:text-2xl font-medium gap-2 items-center">
            <img 
              src="/assets/man-city.png" 
              alt="barcelona" 
              className="lg:w-12 md:w-9 w-6 lg:h-12 md:h-9 h-6" 
            />
            {/* <Image width={48} height={48} src="/assets/man-city.png" alt="man-city" /> */}
            <span>24</span>
          </div>
          <span> - </span>
          {/* Right Team */}
          <div className="flex lg:text-[32px] md:text-2xl font-medium items-center gap-2">
            <span>03</span>
            <img 
              src="/assets/barcelona.png" 
              alt="barcelona" 
              className="lg:w-12 md:w-9 w-6 lg:h-12 md:h-9 h-6" 
            />
            {/* <Image width={48} height={48} src="/assets/barcelona.png" alt="barcelona" /> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between lg:text-2xl md:text-lg text-center">
        <img 
          src="/assets/5bc4a932861d1c625156db71b514edba.jpg" 
          alt="barcelona" 
          className="w-9 lg:w-16 h-9 md:w-12 md:h-12 lg:h-16 rounded-full" 
        />
        {/* <Image src="/assets/5bc4a932861d1c625156db71b514edba.jpg" width={64} height={64} alt="player" className='rounded-full' /> */}
        <span>اسلام بركة</span>
      </div>
    </div>
  )
}

export default PlayerStatsCard