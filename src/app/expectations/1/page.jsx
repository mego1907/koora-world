"use client";
import React, { useState } from 'react'
import MatchesSection from '../_components/MatchesSection';
import DescriptionSection from '../_components/DescriptionSection';

const SingleExpectation = () => {
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

  return (
    <div>
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
  )
}

export default SingleExpectation