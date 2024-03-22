"use client";
import { useParams } from 'next/navigation'
import React from 'react'

const CompetitionDetails = () => {

  const { id } = useParams();

  return (
    <div className='flex'>
      <div className="container">
        {/* {id} */}
        <p>No Data</p>
      </div>
    </div>
  )
}

export default CompetitionDetails