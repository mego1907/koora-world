import React from 'react'
import Link from "next/link"

const SectionTitle = ({ title, path, btn = "عرض الكل" }) => {
  return (
    <div>
      <div className="flex justify-between py-8">
        <h3 className='text-xl font-medium text-white lg:text-3xl'>{title}</h3>

        <Link href={path} className="text-[#C0C0C0] lg:text-2xl text-base font-medium">{btn}</Link>
      </div>
    </div>
  )
}

export default SectionTitle