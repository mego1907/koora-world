'use client';
import { useParams } from 'next/navigation'
import React, { useState, useEffect } from 'react';
import { useQuery } from "@tanstack/react-query";
import * as apiClient from "../../../api-client";
import LoadingSpinner from '@/components/LoadingSpinner';

const SingleNew = () => {
  const { id } = useParams();

  const {data, isLoading} = useQuery({ queryKey: ["fetchSingleNew"], queryFn: () => apiClient.fetchSingleNew(id) });

  if(isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className='my-5'>
      <div className="container">
        <img src={data?.data?.image} alt={data?.data?.title} className='object-cover max-w-full min-h-10' />
        <h3 className='my-5 text-3xl font-bold text-white'>{data?.data?.title}</h3>
        <p className="text-base leading-relaxed tracking-wide text-gray-300" dangerouslySetInnerHTML={{ __html: data?.data?.description }}></p>
      </div>
    </div>
  )
}

export default SingleNew