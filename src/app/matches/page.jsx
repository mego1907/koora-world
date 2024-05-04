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
import { Pagination } from 'antd';

const Matches = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [selectedTab, setSelectedTab] = useState(undefined);
  // const [selectedTab, setSelectedTab] = useState(moment().locale("en").format('YYYY-MM-DD'));
  const [selectedLeague, setSelectedLeague] = useState(undefined);
  const [selectedTeam, setSelectedTeam] = useState(undefined);

  const [pageNumber, setPageNumber] = useState(1)

  const { 
    data, 
    isLoading, 
    isError, 
    isSuccess,  
    error, 
    refetch
  } = useQuery({
    queryKey: ["matches"],
    queryFn: () => matchesApi.fetchMatchesData(
      selectedTab, 
      selectedTab, 
      pageNumber, 
      selectedLeague, 
      selectedTeam
    )
  });

  useEffect(() => {
    refetch()
  }, [selectedTab, refetch]);


  return (
    <div>
      <div className="container mx-auto">
      <div className="flex items-center justify-between">
          <h3 className='pt-2 pb-5 text-xl font-medium text-white md:text-4xl'>المباريات</h3>
          <button 
            type='button' 
            className="flex items-center justify-center gap-2 p-2 px-4 text-sm text-white border border-white rounded-md md:text-xs"
            onClick={() => setOpenFilter(true)}
          >
            فلاتر البحث
            <CiFilter fontSize={20} />
          </button>
      </div>

        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

        <Filter 
          openFilter={openFilter} 
          setOpenFilter={setOpenFilter} 
          selectedLeague={selectedLeague}
          setSelectedLeague={setSelectedLeague}
          selectedTeam={selectedTeam}
          setSelectedTeam={setSelectedTeam}
          refetch={refetch}
        />

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


        {
          data?.data?.items?.length > 0 && (
            <div className="flex justify-center py-10">
              <Pagination 
                locale={"ar_EG"}
                defaultCurrent={pageNumber}
                total={data?.data?.total}
                pageSize={data?.data?.per_page}
                style={{ color: "text-white"}}
                onChange={(pageNumber) => setPageNumber(pageNumber)}
                showSizeChanger={false}
              />
            </div>
          )
        }

      </div>
    </div>
  )
}

export default Matches