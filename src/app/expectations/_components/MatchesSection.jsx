import React from 'react'
import MatchExpectation from './MatchExpectation'

const MatchesSection = () => {


  return (
    <div>
      <div className="container m-auto">
        <div className="flex flex-col gap-5 py-5 lg:flex-row">
          <div className="w-1/3">
            <MatchExpectation />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MatchesSection