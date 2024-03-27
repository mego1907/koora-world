import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from '@/icons';

const DefaultCard = ({ image, video, title, id, type_string = "videos", type }) => {

  type_string = type === 1 ? "news" : type === 2 ? "images" : type === 3 ? "videos" : "news"

  return (
    <div className="flex flex-col gap-3 overflow-hidden">
      <Link href={`/${type_string.toLowerCase()}/${id}`}>
        <div className="w-full h-[283px] bg-slate-600">
          <img
            src={image}
            alt={title}
            className='object-cover w-full h-full'
          />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className='text-white'>{title}</h4>
          <button type="button" className='flex items-center justify-end w-full gap-3 ml-2 text-primary'>
            <span>اقرء المزيد</span>
            <ArrowLeft />
          </button>
        </div>
      </Link>
    </div>
  )
}

export default DefaultCard