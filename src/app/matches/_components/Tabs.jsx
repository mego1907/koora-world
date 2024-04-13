import React from 'react'

const Tabs = () => {

  const tabsData = [
    {
      id: 1,
      nameAr: "أمس",
      nameEn: "yesterday"
    },
    {
      id: 2,
      nameAr: "اليوم",
      nameEn: "today"
    },
    {
      id: 3,
      nameAr: "الاربعاء، 23فبراير",
      nameEn: "test 1"
    },
    {
      id: 4,
      nameAr: "الخميس، 24فبراير",
      nameEn: "test 2"
    }
  ]

  return (
    <div>
      <div className="flex gap-5 text-white text-xl">
        {
          tabsData.map((tab) => (
            <button type="button" key={tab.id}>
              {tab.nameAr}
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default Tabs