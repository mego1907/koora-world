"use client";
import React, { useEffect, useState } from 'react'
import ChampionshipCard from './_components/ChampionshipCard';
import { instance } from '@/services/axios';
import { useAppContext } from '@/contexts/AppContext';
import LoadingSpinner from '@/components/LoadingSpinner';
import Link from "next/link"

// const competitions = [
//   {
//     id: 1,
//     fromDay: "2023-11-13",
//     toDay: "2023-11-17",
//     championship: "بطوية الأبطال"
//   },
//   {
//     id: 2,
//     fromDay: "2023-11-13",
//     toDay: "2023-11-17",
//     championship: "دوري الأبطال"
//   },
//   {
//     id: 3,
//     fromDay: "2023-11-13",
//     toDay: "2023-11-17",
//     championship: "بطوية الأبطال"
//   },
//   {
//     id: 4,
//     fromDay: "2023-11-13",
//     toDay: "2023-11-17",
//     championship: "دوري الأبطال"
//   },
//   {
//     id: 5,
//     fromDay: "2023-11-13",
//     toDay: "2023-11-17",
//     championship: "بطوية الأبطال"
//   },
//   {
//     id: 6,
//     fromDay: "2023-11-13",
//     toDay: "2023-11-17",
//     championship: "دوري الأبطال"
//   },
//   {
//     id: 7,
//     fromDay: "2023-11-13",
//     toDay: "2023-11-17",
//     championship: "بطوية الأبطال"
//   },
//   {
//     id: 8,
//     fromDay: "2023-11-13",
//     toDay: "2023-11-17",
//     championship: "دوري الأبطال"
//   },
//   {
//     id: 9,
//     fromDay: "2023-11-13",
//     toDay: "2023-11-17",
//     championship: "دوري الأبطال"
//   },
// ]



// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/Client/Contest/GetAllContest`, {
//         method: "GET",
//         headers: {
//           "Authorization": "Bearer " + userData.token,
//           "Accept": "*/*",
//           "Access-Control-Allow-Origin": "*",
//           "currency": "kwd",
//           "Accept": "application/json"
//         }
//       });

//       const data = await res.json();

//       setCompetitions(data.data.items);
//       setLoading(false);
//     } catch (err) {
//       setLoading(false);
//       setError(err.message);
//     }
//   };

//   fetchData()
// }, [userData])

const Competitions = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [competitions, setCompetitions] = useState([])

  const { userData, setUserData } = useAppContext();
  
  useEffect(() => {
    const fetchCompetitionsData = async () => {

      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/Client/Contest/GetAllContest`, {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + userData?.token,
          "Accept": "*/*",
          "Access-Control-Allow-Origin": "*",
          "currency": "kwd",
          "Accept": "application/json"
        }
      })

      const resBody = await res.json();

      if(resBody.status === 401) {
        setUserData({})
      }

      setCompetitions(resBody.data.items)

      console.log("resBody:", resBody.data.items )
    };

    fetchCompetitionsData();
  }, [userData, setUserData])

  if(loading) {
    return <LoadingSpinner />
  }

  return (
    <div>
      <div className="container m-auto">
        <h3 className='pb-5 text-4xl font-medium text-white pt-9'>المسابقات</h3>

        <div>
          <div className="flex flex-wrap mb-5">
            {competitions.map((item, i) => (
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