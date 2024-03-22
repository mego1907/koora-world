import React from 'react'

const Banner = () => {
  return (
    <div
      className="w-full h-[400px] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/assets/banner.png')" }}
    >
      <div className="flex flex-col items-center justify-center h-full gap-7">
        <h3 className='lg:text-[32px] text-xl font-medium text-white'>يمكنك الحصول علي التطبيق</h3>
        <div className="flex flex-col gap-2 font-medium text-center text-white lg:text-lg">
          <p>قم بتحميل التطبيق الان من خلال البلاي الستور او الاب ستور</p>
          <p>و تابع اهم المباريات لحظه بلحظة</p>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row">
          <button type="button" className="px-16 py-2 bg-white rounded-full">
            <img src="/assets/Play store.png" alt="Play store" />
          </button>
          <button type="button" className="px-16 py-2 rounded-full bg-secondary">
            <img src="/assets/Google play.png" alt="Google play" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner