"use client";
import Banner from '@/components/Banner'
import DefaultCard from '@/components/DefaultCard'
import ExpectationsCard from '@/components/ExpectationsCard'
import Header from '@/components/Header'
import LoadingSpinner from '@/components/LoadingSpinner';
import SectionTitle from '@/components/SectionTitle'
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';



export default function Home() {
  const path = usePathname();
  const [homeData, setHomeData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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

  const allImagesData = [
    {

    }
  ]

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

  useEffect(() => {
    const fetchData = async () => {
      try{
        setLoading(true);
        const res = await fetch(`https://kooora-world.com/api/Home/`);
        const data = await res.json();
        setHomeData(data.data);
        setLoading(false);
      } catch(err) {
        setLoading(false);
        setError(err.message);
      }
    };

    fetchData()
  }, [])


  if(loading) {
    return <LoadingSpinner />
  }

  return (
    <main className="">
      <Header sliderData={homeData?.slider} />

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
            homeData.news?.slice(0, 3)?.map((item, i) => (
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
            homeData.video?.slice(0, 3)?.map((item, i) => (
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
            homeData?.image?.slice(0, 3).map((item, i) => (
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
