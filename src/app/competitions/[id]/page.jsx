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

  console.log("data :", data)

  if(isLoading) return <LoadingSpinner />

  if (!data?.data?.home && !data?.data?.away) {
    return (
      <div className="h-[70vh] w-full text-white text-xl flex items-center justify-center">
        <p>لا يوجد بيانات لعرضها</p>
      </div>
    )
  }

  return (
    <div className='flex'>
      <div className="container ">
        {/* {id} */}
      </div>
    </div>
  )
}

export default ContstDetails