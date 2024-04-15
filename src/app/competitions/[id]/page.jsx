"use client";
import { useParams } from 'next/navigation'
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from '@/components/LoadingSpinner';
import * as contestApi from "../../../APIs/6-Contest-Api";
import { useAppContext } from '@/contexts/AppContext';

const ContstDetails = () => {
  const { id } = useParams();
  const { userData } = useAppContext();

  const { data, isLoading } = useQuery({ 
    queryKey: ["fetchContestDetails"], 
    queryFn: () => contestApi.fetchContestDetails(userData?.token, id)
  })

  if(isLoading) return <LoadingSpinner />

  return (
    <div className='flex'>
      <div className="container">
        {/* {id} */}
        <p>No Data</p>
      </div>
    </div>
  )
}

export default ContstDetails