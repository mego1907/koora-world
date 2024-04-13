"use client";
import React, { useState } from 'react'
import Image from "next/image"
import AfterMatchSec from '../_components/AfterMatchSec';
import MatchEventsSec from '../_components/MatchEventsSec/MatchEventsSec';
import OverViewSec from './_components/OverViewSec';
import * as matchesApi from "../../../APIs/5-matches-Api"
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';



const MatchDetails = () => {
  const { id } = useParams();
  const [selectedTab, setSelectedTab] = useState("after match");

  const { data, isLoading } = useQuery({
    queryFn: () => matchesApi.fetchMatchDetails(id)
  })

  const matchData = {
    league: "الدوري الاسباني",
    date: "الثلاثاء ، 7 فبراير",
    time: "21 : 00",
    teams: [
      {
        name: "مانشستر يونيتد",
        logo: "/assets/man-city.png"
      },
      {
        name: "مانشستر يونيتد",
        logo: "/assets/barcelona.png"
      }
    ]
  }

  const tabs = [
    {
      nameAr: "نظرة عامة",
      name: "overview"
    },
    {
      nameAr: "أحداث المباراة",
      name: "match events"
    },
    {
      nameAr: "بعد المباراة",
      name: "after match"
    }
  ]

  return (
    <div>
      <div className="container">
        {/* Header */}
        <div
          className="flex items-center-justify-center md:h-[256px] relative"
          style={{ backgroundImage: 'linear-gradient(to left, #025005, #588B46)' }}
        >
          <div className="flex flex-col items-center justify-center w-full gap-2 m-auto md:w-1/2 md:gap-3">
            <h3 className="text-center text-white md:text-[32px] text-lg">{matchData.league}</h3>
            <p className='flex items-center justify-center gap-2 mb-8 text-base text-center text-white md:text-2xl'>
              <span>الثلاثاء ، 7 فبراير</span>
              <span className="text-[#f8e500] leading-5">21 : 00</span>
            </p>

            {/* Teams */}
            <div className="w-full mb-5">
              <div className="relative flex justify-between">
                {
                  matchData?.teams?.map((team, i) => (
                    <div key={i} className="flex flex-col items-center justify-center text-sm text-white md:text-base">
                      <Image width={45} height={45} src={team.logo} alt={team.name} />
                      <h6 className='text-base md:text-2xl'>{team.name}</h6>
                    </div>
                  ))
                }
                <div className="absolute flex flex-col gap-4 text-2xl text-center text-white -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                  <p dir='ltr' className="md:text-[32px] mb-2">02 - 01</p>
                  <span className='text-[#f8e500] md:text-2xl bg-white bg-opacity-35 pb-2 text-sm px-4 rounded-full'>مباشر</span>
                </div>
              </div>
            </div>
          </div>
          <img 
            src="/assets/ball-left.png" 
            className="absolute left-0 -translate-y-1/2 top-1/2" alt="ball left" 
          />
          <img 
            src="/assets/ball-right.png" 
            className="absolute right-0 -translate-y-1/2 top-1/2" alt="ball left" 
          />
        </div>

        {/* Tabs */}
        <div className="flex justify-between gap-4 md:text-[32px] text-base text-white md:py-6 py-2">
          {
            tabs.map((tab, i) => (
              <button
                type="button"
                className={`w-1/3 pb-3 ${selectedTab === tab.name ? "border-b border-primary text-primary" : ""}`}
                key={i}
                onClick={() => setSelectedTab(tab.name)}
              >
                {tab.nameAr}
              </button>
            ))
          }
        </div>

        {/* Data accordion to tabs */}
        <div className="mb-5">
          {selectedTab === "after match" && <AfterMatchSec />}
          {selectedTab === "match events" && <MatchEventsSec />}
          {selectedTab === "overview" && <OverViewSec />}
        </div>

      </div>
    </div>
  )
}

export default MatchDetails