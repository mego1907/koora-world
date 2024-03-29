"use client";
import Banner from '@/components/Banner'
import DefaultCard from '@/components/DefaultCard'
import ExpectationsCard from '@/components/ExpectationsCard'
import Header from '@/components/Header'
import LoadingSpinner from '@/components/LoadingSpinner';
import SectionTitle from '@/components/SectionTitle'

import { useQuery } from "@tanstack/react-query";
import * as apiClient from "../api-client";

export default function Home() {
  const { data: homeData, isLoading } = useQuery({ 
    queryKey: ["fetchHomeData"], 
    queryFn: apiClient.fetchHomeData
  });

  const allExpectations = [
    {
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
    },
    {
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
    },
    {
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
  ];


  const allMatchesData = [
    {
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
    },
    {
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
    },
    {
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
  ]


  if(isLoading) {
    return <LoadingSpinner />
  }

  return (
    <main className="">
      <Header sliderData={homeData?.data?.slider} />

      {/* Result expectations */}
      <div className="container flex flex-col">
        <SectionTitle title="توقعات النتائج" path="/expections" />

        <div className="flex flex-col gap-5 lg:flex-row">
          {allExpectations.map((item, i) => (
              <div className="w-full lg:w-1/3" key={i}>
                <ExpectationsCard {...item}  />
              </div>
            ))
          }
        </div>
      </div>


      {/* News */}
      <div className="container flex flex-col pb-8">
        <SectionTitle title="آهم الاخبار" path="/news" />

        <div className="flex flex-col gap-5 lg:flex-row">
          {
            homeData?.data?.news?.slice(0, 3)?.map((item, i) => (
              <div className="w-full lg:w-1/3" key={i} >
                <DefaultCard {...item}/>
              </div>
            ))
          }
        </div>
      </div>

      {/* Banner */}
      <Banner />

      {/* Matches */}
      <div className="container flex flex-col">
        <SectionTitle title="احدث  المباريات" path="/matches" />

        <div className="flex flex-col gap-5 lg:flex-row">
          {
            allMatchesData.map((item, i) => (
              <div className="w-full lg:w-1/3" key={i}>
                <ExpectationsCard {...item} key={i} />
              </div>
            ))
          }
        </div>
      </div>

      {/* Videos */}
      <div className="container flex flex-col">
        <SectionTitle title="آهم الفديوهات" path="/matches" />

        <div className="flex flex-col gap-5 lg:flex-row">
          {
            homeData?.data?.video?.slice(0, 3)?.map((item, i) => (
              <div className="w-full lg:w-1/3" key={i}>
                <DefaultCard {...item} />
              </div>
            ))
          }
        </div>
      </div>

      {/* Images */}
      <div className="container flex flex-col pb-8">
        <SectionTitle title="آهم الصور" path="/matches" />

        <div className="flex flex-col gap-5 lg:flex-row">
          {
            homeData?.data?.image?.slice(0, 3).map((item, i) => (
              <div className="w-full lg:w-1/3" key={i}>
                <DefaultCard {...item} />
              </div>
            ))
          }
        </div>
      </div>
    </main>
  )
}
