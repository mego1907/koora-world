"use client";
import React, { useState } from 'react'
import MatchesSection from '../_components/MatchesSection';
import DescriptionSection from '../_components/DescriptionSection';
import { useQuery } from "@tanstack/react-query";
import * as apiClient from "../../../api-client";
import { useParams } from 'next/navigation';
import { useAppContext } from '@/contexts/AppContext';
import LoadingSpinner from '@/components/LoadingSpinner';

const SingleExpectation = () => {
  const { id } = useParams();
  const { userData } = useAppContext();

  const { data, isLoading } = useQuery({ queryKey: ["fetchSingleExpectationData"], queryFn: () => apiClient.fetchSingleExpectationData(userData.token, id)  })


  console.log("Data :", data);


  const [selectedTab, setSelectedTab] = useState("matches")
  
  const tabs = [
    {
      nameAr: "المباريات",
      name: "matches"
    },
    {
      nameAr: "الوصف",
      name: "description"
    },
    {
      nameAr: "الجوائز",
      name: "prizzes"
    }
  ]


  if(isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div>
      <div className="container m-auto">
        {/* Tabs */}
        <div className="flex justify-between gap-4 md:text-[32px] text-white py-2">
          {
            tabs.map((tab, i) => (
              <button
                type="button"
                className={`w-1/3 pb-2 ${selectedTab === tab.name ? "border-b border-primary text-primary" : ""}`}
                key={i}
                onClick={() => setSelectedTab(tab.name)}
              >
                {tab.nameAr}
              </button>
            ))
          }
        </div>

        {/* Section accordion to tab */}
        {selectedTab === "matches" && <MatchesSection />}
        {selectedTab === "description" && <DescriptionSection />}
      </div>
    </div>
  )
}

export default SingleExpectation