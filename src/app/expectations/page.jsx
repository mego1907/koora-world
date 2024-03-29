"use client";
import LoadingSpinner from "@/components/LoadingSpinner";
import ChampionshipCard from "./_components/ChampionshipCard";
import Link from "next/link";

import { useState, useEffect } from "react";
import { getItemFromLocalStorage } from "@/utils";
import { useAppContext } from "@/contexts/AppContext";



const Expectaions = () => {

  const { userData } = useAppContext();

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

  const [expectations, setExpectations] = useState([]);


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const localStorageUserData = localStorage && localStorage.getItem("user");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/Client/Expectations/GetAllExpectations`, {
          method: "GET",
          headers: {
            "Authorization": "Bearer " + userData.token,
          }
        });

        const data = await res.json();

        setExpectations(data.data.items);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };

    fetchData()
  }, [userData])

  // useEffect(() => {

  //   const getExpectaions = async () => {
  //     const res = await fetch("https://kooora-world.com/api/Client/Expectations/GetAllExpectations", {
  //       method: "GET",
  //       headers: {
  //         "Authorization": "Bearer " + userData.token
  //       }
  //     });

  //     const data = await res.json();
  //     console.log(data)
  //   }

  //   getExpectaions();

  // }, [userData])

  if (loading) {
    return <LoadingSpinner />
  }


  return (
    <div>
      <div className="container m-auto">
        <h3 className='pb-5 md:text-4xl text-2xl font-medium text-white md:pt-9 pt-5'>التوقعات</h3>

        <div>
          <div className="flex flex-wrap mb-5">
            {expectaions.map((item, i) => (
              <div className="w-full px-2 md:w-1/3" key={i}>
                <Link href="/expectations/1">
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