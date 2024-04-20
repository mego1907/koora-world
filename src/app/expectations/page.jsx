"use client";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "@/components/LoadingSpinner";
import ChampionshipCard from "./_components/ChampionshipCard";

import { useState, useEffect } from "react";
import { getItemFromLocalStorage } from "@/utils";
import { useAppContext } from "@/contexts/AppContext";

import * as apiClient from "../../api-client";

const Expectaions = () => {
  const { userData, setOpenLogin } = useAppContext();

  const { data, isLoading, error, status } = useQuery({ 
    queryKey: ["fetchExpectationsData"], 
    queryFn: () => apiClient.fetchExpectationsData(userData?.token),
  })

  const expectaions = [
    {
      id: 1,
      fromDay: "2023-11-13",
      toDay: "2023-11-17",
      championship: "بطوية الأبطال"
    },
    {
      id: 2,
      fromDay: "2023-11-13",
      toDay: "2023-11-17",
      championship: "دوري الأبطال"
    },
    {
      id: 3,
      fromDay: "2023-11-13",
      toDay: "2023-11-17",
      championship: "بطوية الأبطال"
    },
    {
      id: 4,
      fromDay: "2023-11-13",
      toDay: "2023-11-17",
      championship: "دوري الأبطال"
    },
    {
      id: 5,
      fromDay: "2023-11-13",
      toDay: "2023-11-17",
      championship: "بطوية الأبطال"
    },
    {
      id: 6,
      fromDay: "2023-11-13",
      toDay: "2023-11-17",
      championship: "دوري الأبطال"
    },
    {
      id: 7,
      fromDay: "2023-11-13",
      toDay: "2023-11-17",
      championship: "بطوية الأبطال"
    },
    {
      id: 8,
      fromDay: "2023-11-13",
      toDay: "2023-11-17",
      championship: "دوري الأبطال"
    },
    {
      id: 9,
      fromDay: "2023-11-13",
      toDay: "2023-11-17",
      championship: "دوري الأبطال"
    },
  ]


  if (isLoading) return <LoadingSpinner />


  return (
    <div>
      <div className="container m-auto">
        <h3 className='pt-5 pb-5 text-2xl font-medium text-white md:text-4xl md:pt-9'>التوقعات</h3>

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
            {data?.data?.items.map((item, i) => (
              <div className="w-full px-2 md:w-1/3" key={i}>
                <Link href={`/expectations/${item.id}`}>
                  <ChampionshipCard {...item} />
                </Link>
              </div>
            ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expectaions