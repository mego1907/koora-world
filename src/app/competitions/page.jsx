"use client";
import React, { useEffect, useState } from 'react'
import ChampionshipCard from './_components/ChampionshipCard';
import { instance } from '@/services/axios';
import { useAppContext } from '@/contexts/AppContext';
import LoadingSpinner from '@/components/LoadingSpinner';
import Link from "next/link";
import * as apiClient from "../../api-client";
import { useQuery } from "@tanstack/react-query";


const Competitions = () => {
  const { userData } = useAppContext();

  const { data: competitions, isLoading } = useQuery({
    queryKey: ["fetchCompetitionsData"],
    queryFn: () => apiClient.fetchCompetitionsData(userData?.token)
  })

  if(isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div>
      <div className="container m-auto">
        <h3 className='pb-5 text-4xl font-medium text-white pt-9'>المسابقات</h3>

        <div>
          <div className="flex flex-wrap mb-5">
            {competitions?.data?.items?.map((item, i) => (
              <Link href={`/competitions/${item.id}`} key={i} className="w-full px-2 md:w-1/3">
                <div>
                  <ChampionshipCard {...item} />
                </div>
              </Link>
            ))
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Competitions