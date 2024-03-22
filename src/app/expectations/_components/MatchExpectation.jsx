import React from 'react';
import Image from "next/image";

const MatchExpectation = () => {

  const teams = [
    {
      name: "مانشستر يونيتد",
      logo: "/assets/man-city.png"
    },
    {
      name: "مانشستر يونيتد",
      logo: "/assets/barcelona.png"
    }
  ]

  return (
    <div className='w-full h-full p-5 bg-[#024054]'>
      <div className="flex flex-col items-center gap-5">
        <h3 className="text-center text-white ">الدوري الأسباني</h3>
        <p className='flex items-center justify-center gap-2 text-center text-white'>
          <span>الثلاثاء ، 7 فبراير</span>
          <span className="text-[#f8e500] leading-5">21 : 00</span>
        </p>

        {/* Teams */}
        <div className="w-full">
          <div className="relative flex justify-between">
            {
              teams?.map((team, i) => (
                <div key={i} className="flex flex-col items-center justify-center text-base text-white">
                  <Image width={45} height={45} src={team.logo} alt={team.name} />
                  <h6>{team.name}</h6>
                </div>
              ))
            }
            <p className="absolute text-2xl text-center text-white -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">لم تبدء</p>
          </div>
        </div>

        <button type="button" className="flex items-center justify-center h-8 w-[194px] leading-5 text-white bg-transparent border border-white rounded-full">
          <span className='mb-1'>توقع النتيجة</span>
        </button>
      </div>
    </div>
  )
}

export default MatchExpectation