import React from 'react';
import Link from "next/link";
import Image from "next/image";

const TopImagesCard = ({ title }) => {
  return (
    <div className="flex flex-col ">
      <div className="w-[416px] h-[290px]">
        <Image
          src="/assets/video-bg.png"
          alt={title}
          className='object-cover w-full h-full'
          width={416}
          height={290}
        />
      </div>
      <div className="flex flex-col">
        <h4 className='text-white'>ميسي ينتصر بنهائي كاس العالم و يتوج الأرجنتين ببطولة كاس العالم</h4>

        <Link href="/videos">
          <button type="button" className='flex text-primary'>
            <span>اقرء المزيد</span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default TopImagesCard