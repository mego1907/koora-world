import { Banner, DefaultCard } from '@/components'
import React from 'react'

const AfterMatchSec = () => {

  const afterMatchData = [
    {},
    {}
  ]


  return (
    <div className="flex flex-col gap-8">
      <div className="flex md:flex-row flex-col gap-5">
        {
          afterMatchData.map((_, i) => (
            <div className="md:w-1/2 w-full" key={i}>
              <DefaultCard />
            </div>
          ))
        }
      </div>

      {/* Banner */}
      <Banner />

    </div>
  )
}
export default AfterMatchSec