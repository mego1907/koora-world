import React from 'react'

const Modal = ({ children, open, setOpen, title = "تسجيل الدخول" }) => {

  return (
    <div className='relative'>
      {/* Overlay */}
      <div 
        className={`fixed top-0 ${open ? "block" : "hidden"} left-0 z-20 w-full h-screen bg-overlay`}
        onClick={() => setOpen(false)}
      ></div>



      <div className={`fixed z-30 w-5/12 p-2 -translate-x-1/2 ${open ? "-translate-y-1/2 top-1/2 opacity-100" : "-top-[200%] opacity-0 -translate-y-screen"}  bg-[#306ba5] rounded-md shadow-md  left-1/2 transition-all`}>

        <div className="p-4">
          {children}
        </div>

      </div>

    </div>
  )
}

export default Modal