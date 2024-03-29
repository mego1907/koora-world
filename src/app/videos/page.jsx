"use client";
import DefaultCard from '@/components/DefaultCard'
import LoadingSpinner from '@/components/LoadingSpinner';
import { useState, useEffect } from 'react';
import { useQuery } from "@tanstack/react-query";
import * as apiClient from "../../api-client.js";

const Videos = () => {
  const { data, isLoading } = useQuery({ queryKey: ["fetchVideosData"], queryFn: apiClient.fetchVideosData })

  if (isLoading) {
    return <LoadingSpinner />
  }


  return (
    <div>
      <div className="container">
        <h3 className='pb-5 md:text-4xl text-2xl font-medium text-white pt-9'>الفيديوهات</h3>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-5 py-5'>
          {
            data?.data?.items.map((item) => (
              <DefaultCard {...item} key={item.id} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Videos