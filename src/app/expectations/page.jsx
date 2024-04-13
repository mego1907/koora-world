"use client";
import LoadingSpinner from "@/components/LoadingSpinner";
import ChampionshipCard from "./_components/ChampionshipCard";
import Link from "next/link";

import { useState, useEffect } from "react";
import { getItemFromLocalStorage } from "@/utils";
import { useAppContext } from "@/contexts/AppContext";

import { useQuery } from "@tanstack/react-query";
import * as apiClient from "../../api-client";

const Expectaions = () => {
  const { userData } = useAppContext();

  const { data, isLoading } = useQuery({ 
    queryKey: ["fetchExpectationsData"], 
    queryFn: () => apiClient.fetchExpectationsData(userData?.token) 
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
        <h3 className='pb-5 md:text-4xl text-2xl font-medium text-white md:pt-9 pt-5'>التوقعات</h3>

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