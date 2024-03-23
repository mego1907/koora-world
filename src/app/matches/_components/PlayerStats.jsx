import PlayerStatsCard from '@/components/PlayerStatsCard'
import React from 'react'

const PlayerStats = () => {
  return (
    <div>      
      <h3 className="py-5 font-medium text-white text-[32px]">احصائيات الاعبين</h3>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <PlayerStatsCard />
        <PlayerStatsCard />
        <PlayerStatsCard />
        <PlayerStatsCard />
      </div>
    </div>
  )
}

export default PlayerStats