import React from 'react'
import Image from "next/image"

const ChampionshipCard = ({ championshipName, fromDay, toDay }) => {
  return (
    <div 
      className='flex flex-col items-center justify-center w-full h-32 bg-cover' style={{ backgroundImage: "url('/assets/championship.png')" }}>
      <h3 className='text-center text-white'>بطولة الأبطال</h3>

      <div className="flex items-center justify-between w-full px-8 mt-3 text-white">
        <p>
          <span>من يوم :</span>
          <span className="mr-1 text-sm font-semibold">1-10-2023</span>
        </p>
        <p>
          <span>الي يوم :</span>
          <span className="mr-1 text-sm font-semibold">29-11-2023</span>
        </p>
      </div>
    </div>
  )
}

export default ChampionshipCard