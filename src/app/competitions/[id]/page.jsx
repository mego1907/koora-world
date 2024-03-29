"use client";
import { useParams } from 'next/navigation'
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from '@/components/LoadingSpinner';
import * as apiClient from "../../../api-client";

const CompetitionDetails = () => {

  const { id } = useParams();

  const { data, isLoading } = useQuery({ queryKey: ["fetchCompetitionDetails"], queryFn: apiClient.fetchCompetitionDetails })

  if(isLoading) {
    return <LoadingSpinner />
  }

  console.log(data)

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