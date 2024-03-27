import React from 'react'

const NotAuth = () => {


  const handleClick = () => {

  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <p>يحب عليك تسجيل الدخول أولاً</p>

      <button type="button" onClick={handleClick}>تسجيل الدخول</button>
    </div>
  )
}

export default NotAuth