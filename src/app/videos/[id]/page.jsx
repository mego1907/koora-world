"use client";
import LoadingSpinner from '@/components/LoadingSpinner';
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'

import { useQuery } from "@tanstack/react-query";
import * as apiClient from "../../../api-client";

const SingleVideoDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({ 
    queryKey: ["fetchSingleVideoData"], 
    queryFn: () => apiClient.fetchSingleVideoData(id) 
  });

  if(isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div>
      <div className="container">
        <h3 className="text-white">{data?.data?.title}</h3>

        {/* Video */}
        <a href={data?.data?.link} target="_blank">
          <div>
            <img src={data?.data?.image} alt={data?.data?.title} />
          </div>
        </a>
      </div>
    </div>
  )
}

export default SingleVideoDetails