import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className='absolute top-0 flex items-center justify-center w-full h-screen bg-secondary'>
      {/* <div className="w-20 h-20 bg-transparent relative rounded-full after:w-4/5 after:h-[2px] after:bg-white after:rounded-full after:absolute"></div> */}
      <h3 className="text-xl text-red-400">...Loading</h3>
    </div>
  )
}

export default LoadingSpinner