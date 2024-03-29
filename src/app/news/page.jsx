"use client";
import DefaultCard from '@/components/DefaultCard'
import LoadingSpinner from '@/components/LoadingSpinner';
import React, { useEffect, useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import * as apiClient from "../../api-client";

const News = () => {
  const { data, isLoading } = useQuery({ queryKey: ["fetchNewsData"], queryFn: apiClient.fetchNewsData });

  if (isLoading) {
    return <LoadingSpinner />
  }


  return (
    <div>
      <div className="container">
        <h3 className='pb-5 md:text-4xl text-2xl font-medium text-white md:pt-9 pt-5'>الأخبار</h3>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-5 py-5'>
          {
            data?.data?.items?.map(({ image, title, id, type_string }) => {
              return (
                <DefaultCard image={image} title={title} id={id} key={id} type_string={type_string} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default News