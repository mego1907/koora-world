"use client";
import React, { useState } from 'react';
import Tabs from './_components/Tabs';
import MatchCard from '@/components/MatchCard';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { CiFilter } from "react-icons/ci";

import * as matchesApi from "../../APIs/5-matches-Api.js"
import Filter from './_components/Filter';


const matchesData = [
  {
    id: 1,
    date: "الثلاثاء ، 7 فبراير",
    time: "بدءت",
    result: "02 - 02",
    firstTeamName: "مانشستر يونيتد",
    secondTeamName: "برشلونه",
    firstTeamImage: "/assets/man-city.png",
    secondTeamImage: "/assets/barcelona.png"
  },
  {
    id: 2,
    date: "الثلاثاء ، 7 فبراير",
    time: "بدءت",
    result: "02 - 02",
    firstTeamName: "مانشستر يونيتد",
    secondTeamName: "برشلونه",
    firstTeamImage: "/assets/man-city.png",
    secondTeamImage: "/assets/barcelona.png"
  },
  {
    id: 3,
    date: "الثلاثاء ، 7 فبراير",
    time: "بدءت",
    result: "02 - 02",
    firstTeamName: "مانشستر يونيتد",
    secondTeamName: "برشلونه",
    firstTeamImage: "/assets/man-city.png",
    secondTeamImage: "/assets/barcelona.png"
  },
]


const Matches = () => {
  const [openFilter, setOpenFilter] = useState(false);

  const { data, isLoading, isError, error, isSuccess  } = useQuery({
    queryKey: "matches",
    queryFn: matchesApi.fetchMatchesData
  })

  // console.log(data.data.items)

  return (
    <div>
      <div className="container mx-auto">
      <div className="flex items-center justify-between">
          <h3 className='pt-2 pb-5 text-4xl font-medium text-white'>المباريات</h3>
          <button 
            type='button' 
            className="flex items-center justify-center gap-2 p-2 px-4 text-base text-white border border-white rounded-md"
            onClick={() => setOpenFilter(true)}
          >
            فلاتر البحث
            <CiFilter fontSize={20} />
          </button>
      </div>

        <Tabs />

        <Filter openFilter={openFilter} setOpenFilter={setOpenFilter} />

        <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-3">
          {
            data?.data?.items?.map((match, i) => (
              <MatchCard match={match} key={i} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Matches