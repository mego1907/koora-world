import React from 'react'
import PlayerStats from '../../_components/PlayerStats'
import { Banner, PrevMatchesCard } from '@/components'

const OverViewSec = () => {
  return (
    <div className='flex flex-col gap-8'>
      <PlayerStats />
      {/* Banner */}
      <Banner />

      {/* Perv Matches */}
      <div className="flex flex-col gap-3 mb-8">
        <h3 className="py-5 font-medium text-white md:text-[32px] text-lg">اللقاءات السابقة بين الفريقين</h3>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <PrevMatchesCard />
          <PrevMatchesCard />
          <PrevMatchesCard />
        </div>
      </div>
    </div>
  )
}
export default OverViewSec