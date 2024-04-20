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
  const { userData, setOpenLogin } = useAppContext();

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

        {
          !userData?.token && (
            <div className="flex flex-col items-center justify-center gap-2 text-white">
              <p className="text-base font-medium">يجب عليك تسجيل الدخول الي حسابك أولاً</p>
              <button
                type="submit"
                className='flex items-center justify-center gap-2 px-5 py-2 font-medium bg-green-500 border border-green-500 rounded-md'
                onClick={() => setOpenLogin(true)}
              >
                تسجيل الدخول
              </button>
            </div>
          )
        }

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