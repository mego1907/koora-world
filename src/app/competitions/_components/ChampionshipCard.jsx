import React from 'react'
import Image from "next/image"

const ChampionshipCard = ({ name, start_date, end_date }) => {
  return (
    <div 
      className='flex flex-col items-center justify-center w-full h-32 bg-cover' style={{ backgroundImage: "url('/assets/championship.png')" }}>
      <h3 className='text-center text-white'>{name}</h3>

      <div className="flex items-center justify-between w-full px-8 mt-3 text-white">
        <p>
          <span>من يوم :</span>
          <span className="mr-1 text-sm font-semibold">{start_date}</span>
        </p>
        <p>
          <span>الي يوم :</span>
          <span className="mr-1 text-sm font-semibold">{end_date}</span>
        </p>
      </div>
    </div>
  )
}

export default ChampionshipCard