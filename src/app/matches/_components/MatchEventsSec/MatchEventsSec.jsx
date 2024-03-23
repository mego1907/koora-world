import React, { useState } from 'react'
import MatchComposition from './MatchComposition';
import MomentsOfTheGame from './MomentsOfTheGame';
import MinuteByMinute from './MinuteByMinute';

const MatchEventsSec = () => {
  const [selectedTab, setSelectedTab] = useState("the composition");

  const tabs = [
    {
      nameAr: "دقيقة بدقيقة",
      name: "minute by minute"
    },
    {
      nameAr: "أحداث المباراة",
      name: "moment of the match"
    },
    {
      nameAr: "التشكيل",
      name: "the composition"
    }
  ]

  return (
    <div>
      {/* Tabs */}
      <div className="flex justify-between md:gap-6 gap-2 py-2 my-5 md:text-lg text-xs text-white">
        {
          tabs.map((tab, i) => (
            <button
              type="button"
              className={`w-1/3 md:h-10 pb-1 flex items-center justify-center rounded-full border border-white ${selectedTab === tab.name ? "bg-[#4185c5] border border-[#4185c5] text-white" : ""}`}
              key={i}
              onClick={() => setSelectedTab(tab.name)}
            >
              {tab.nameAr}
            </button>
          ))
        }
      </div>

      {/* Composition */}
      {selectedTab === "the composition" && <MatchComposition />}
      {selectedTab === "moment of the match" && <MomentsOfTheGame />}
      {selectedTab === "minute by minute" && <MinuteByMinute />} 
    </div>
  )
}

export default MatchEventsSec