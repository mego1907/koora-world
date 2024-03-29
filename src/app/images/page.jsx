"use client";
import DefaultCard from '@/components/DefaultCard'
import LoadingSpinner from '@/components/LoadingSpinner';
import React, { useEffect, useState } from 'react'
import { useQuery } from "@tanstack/react-query";
import * as apiClient from "../../api-client";

const Images = () => {
  const { data, isLoading } = useQuery({ queryKey: 'fetchImagesData', queryFn: apiClient.fetchImagesData })

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div>
      <div className="container">
        <h3 className='pb-5 md:text-4xl text-2xl font-medium text-white pt-9'>الصور</h3>
        
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

export default Images