"use client";
import moment from 'moment';
import { useState } from 'react'

const Tabs = ({ selectedTab, setSelectedTab }) => {
  const tabsData = [
    {
      id: 1,
      nameAr: "أمس",
      nameEn: "yesterday",
      value: moment().locale('en').subtract(1, "days").startOf('day').format('YYYY-MM-DD')
    },
    {
      id: 2,
      nameAr: "اليوم",
      nameEn: "today",
      value: moment().locale('en').format('YYYY-MM-DD')
    },
    {
      id: 3,
      nameAr: moment().locale('ar').add(1, "days").format("dddd , DD MMMM"),
      nameEn: "test 1",
      value: moment().locale('en').add(1, "days").format('YYYY-MM-DD')
    },
    {
      id: 4,
      nameAr: moment().locale('ar').add(2, "days").format("dddd , DD MMMM"),
      nameEn: "test 2",
      value: moment().locale('en').add(2, "days").format('YYYY-MM-DD')
    }
  ]

  return (
    <div>
      <div className="flex gap-5 text-xl text-white">
        {
          tabsData.map((tab) => (
            <button 
              type="button" 
              key={tab.id} 
              onClick={() => {
                setSelectedTab(tab.value)
              }} 
              className={`${tab.value === selectedTab ? "text-green-400 border-b border-green-400" : "text-gary-100"} py-2`}
            >
              {tab.nameAr}
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default Tabs