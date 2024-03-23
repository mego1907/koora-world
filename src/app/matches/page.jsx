"use client";
import React, { useState } from 'react';
import Image from "next/image"
import DefaultCard from '@/components/DefaultCard';
import Banner from '@/components/Banner';
import PlayerStatsCard from '@/components/PlayerStatsCard';
import PrevMatchesCard from '@/components/PrevMatchesCard';
import MatchEventsSec from './_components/MatchEventsSec/MatchEventsSec';
import PlayerStats from './_components/PlayerStats';

const afterMatchData = [
  {

  }, 
  {

  }
]

const AfterMatchSec = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex md:flex-row flex-col gap-5">
        {
          afterMatchData.map((_, i) => (
            <div className="md:w-1/2 w-full" key={i}>
              <DefaultCard />
            </div>
          ))
        }
      </div>

      {/* Banner */}
      <Banner />

    </div>
  )
}

const OverviewSec = () => {
  return (
    <div>
      <PlayerStats />
      {/* Banner */}
      <Banner />

      {/* Perv Matches */}
      <div className="flex flex-col gap-3 mb-8">
        <h3 className="py-5 font-medium text-white md:text-[32px] text-lg">اللقاءات السابقة بين الفريقين</h3>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <PrevMatchesCard />
          <PrevMatchesCard />
          <PrevMatchesCard />
        </div>
      </div>  
    </div>
  )
}


const Matches = () => {
  const [selectedTab, setSelectedTab] = useState("after match");

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
          <div className="flex flex-col items-center justify-center md:w-1/2 w-full md:gap-3 gap-2 m-auto">
            <h3 className="text-center text-white md:text-[32px] text-lg">{matchData.league}</h3>
            <p className='flex items-center justify-center gap-2 mb-8 md:text-2xl text-base text-center text-white'>
              <span>الثلاثاء ، 7 فبراير</span>
              <span className="text-[#f8e500] leading-5">21 : 00</span>
            </p>

            {/* Teams */}
            <div className="w-full mb-5">
              <div className="relative flex justify-between">
                {
                  matchData?.teams?.map((team, i) => (
                    <div key={i} className="flex flex-col items-center justify-center md:text-base text-sm text-white">
                      <Image width={45} height={45} src={team.logo} alt={team.name} />
                      <h6 className='md:text-2xl text-base'>{team.name}</h6>
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
          <img src="/assets/ball-left.png" className="absolute left-0 -translate-y-1/2 top-1/2" alt="ball left" />
          <img src="/assets/ball-right.png" className="absolute right-0 -translate-y-1/2 top-1/2" alt="ball left" />
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
          {selectedTab === "overview" && <OverviewSec />}
        </div>

      </div>
    </div>
  )
}

export default Matches