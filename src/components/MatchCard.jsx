import React from 'react'

const MatchCard = ({ match }) => {

  const bgs = ["bg-card1", "bg-card2", "bg-card3", "bg-card4", "bg-card5"]

  return (
    <div className={`${bgs[Math.floor(Math.random() * 5)]} text-white rounded-[4px] p-4 relative`}>
      <p className='mb-4 text-center'>
        {match?.date}
        <span className='mr-4 text-yellow-500'>{match?.time}</span>
      </p>

      <img src="/assets/left-ball.png" className="absolute left-0 -translate-y-1/2 top-1/2" alt="" />
      <img src="/assets/right-ball.png" className="absolute right-0 -translate-y-1/2 top-1/2" alt="" />


      <div className="relative grid grid-cols-[1fr_2fr_1fr] items-center justify-center">
        {/* First Team */}
        <div className="grid items-center justify-center grid-rows-2 text-center">
          <div>
            {
              match?.away_team_logo ? (
                <img src={match?.away_team_logo} alt={match.away_team} className='w-16 h-16 rounded-full' />
              ) : (
                <div className='flex items-center justify-center w-16 h-16 text-[10px] bg-gray-500 rounded-full'>
                  <span>No logo</span>
                </div>
              )
            }
          </div>
          <h3 className='max-w-[15ch]'>{match?.away_team}</h3>
        </div>

        {/*  */}
        <p className='text-lg font-medium text-center'>لم تبدأ</p>

        {/* Second Team */}
        <div className="grid items-center justify-center grid-rows-2 text-center">
          <div>
            {
              match?.home_team_logo ? (
                <img src={match?.home_team_logo} alt={match.home_team} className='w-16 h-16 rounded-full' />
              ) : (
                <div className='flex items-center justify-center w-16 h-16 text-[10px] bg-gray-500 rounded-full'>
                  <span>No logo</span>
                </div>
              )
            }

          </div>
          <h3 className='max-w-[15ch]'>{match.home_team}</h3>

        </div>

      </div>
    </div>
  )
}

export default MatchCard