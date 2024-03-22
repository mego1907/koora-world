import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from '@/icons';

const DefaultCard = ({ image, video, title, id, type_string = "videos", type }) => {

  type_string = type === 1 ? "news" : type === 2 ? "images" : type === 3 ? "videos" : "news"

  return (
    <div className="flex flex-col gap-3 overflow-hidden">
      <div className="w-full h-[283px] bg-slate-600">
        <img
          src={image}
          alt={title}
          fill
          className='object-cover w-full h-full'
        />
      </div>
      <div className="flex flex-col gap-2">
        <h4 className='text-white'>{title}</h4>

        <Link href={`/${type_string.toLowerCase()}/${id}`}>
          <button type="button" className='flex items-center justify-end w-full gap-3 ml-2 text-primary'>
            <span>اقرء المزيد</span>
            <ArrowLeft />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default DefaultCard