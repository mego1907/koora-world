"use client";
import React, { useState, useEffect } from 'react';
import Tabs from './_components/Tabs';
import MatchCard from '@/components/MatchCard';
import { useQuery } from '@tanstack/react-query';
import { CiFilter } from "react-icons/ci";

import * as matchesApi from "../../APIs/5-matches-Api.js"
import Filter from './_components/Filter';
import moment from 'moment';
import 'moment/locale/ar';
import Link from 'next/link';



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
  const [selectedTab, setSelectedTab] = useState();
  // const [selectedTab, setSelectedTab] = useState(moment().locale("en").format('YYYY-MM-DD'))

  const { 
    data, 
    isLoading, 
    isError, 
    isSuccess,  
    error, 
    refetch
  } = useQuery({
    queryKey: ["matches"],
    queryFn: () => matchesApi.fetchMatchesData(selectedTab, selectedTab)
  });

  useEffect(() => {
    refetch()
  }, [selectedTab, refetch])

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

        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

        <Filter openFilter={openFilter} setOpenFilter={setOpenFilter} />

        {
          data?.data?.items?.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-3">
              {
                data?.data?.items?.map((match, i) => (
                  <Link href={`/matches/${match.id}`} key={i}>
                    <MatchCard match={match} />
                  </Link>
                ))
              }
            </div>
          ) : (
            <div className="w-full py-10 text-xl text-center text-gray-200">
              <p>لا يوجد مباريات</p>
            </div>
          )
        }


      </div>
    </div>
  )
}

export default Matches