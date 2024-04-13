"use client";
import React, { useState, useEffect } from 'react'
import Image from "next/image";
import Link from "next/link"
import { UserIcon, ToggleMenuIcon } from '@/icons';
import { usePathname } from 'next/navigation'
import Modal from './Modal';
import Login from './Login';
import Register from './Register';
import { useAppContext } from '@/contexts/AppContext';
import { clearLocalStorage } from '@/utils';
import { RiCloseLine } from 'react-icons/ri';




const Navbar = () => {
  const path = usePathname();
  const [openNavbarLinks, setOpenNavbarLinks] = useState(false);

  const { 
    userData, 
    setUserData, 
    showToast, 
    setOpenLogin, 
    openLogin, 
    openRegister, 
    setOpenRegister 
  } = useAppContext();

  const allLinks = [
    {
      id: 1,
      name: "الرئيسية",
      path: "/",
      active: path === "/"
    },
    {
      id: 2,
      name: "التوقعات",
      path: "/expectations",
      active: path.includes("/expectations")
    },
    {
      id: 3,
      name: "مباريات",
      path: "/matches",
      active: path.includes("/matches")
    },
    {
      id: 4,
      name: "المسابقات",
      path: "/competitions",
      active: path.includes("/competitions")
    },
    {
      id: 5,
      name: "الاخبار",
      path: "/news",
      active: path.includes("/news")
    },
    {
      id: 6,
      name: "الفيديوهات",
      path: "/videos",
      active: path.includes("/videos")
    },
    {
      id: 7,
      name: "الصور",
      path: "/images",
      active: path.includes("/images")
    },
    // {
    //   id: 8,
    //   name: "الحزم",
    //   path: "/packages",
    //   active: path.includes("/packages")
    // }
  ];

  const handleOpenNavbarLinks = () => {
    setOpenNavbarLinks(!openNavbarLinks);
  }

  const userLogout = () => {
    setUserData({});
    clearLocalStorage();
    showToast({ type: "SUCCESS", message: "تم تسجيل الخروج من الحساب" })
  }



  return (
    <nav className='md:h-[112px] h-16 sticky top-0  text-white bg-secondary z-20 flex items-center ' >
      <div className="container flex justify-between">
        <div className="relative z-20 flex items-center w-full gap-6">
          <img src="/assets/Logo.png" alt="Logo" className='md:w-44 w-36' />
          
          {/* <Image src="/assets/Logo.png" alt="Logo" fill width={176}  height={64}  /> */}

          {/* Toggle */}
          <button 
            type="button" 
            className="absolute flex w-10 h-10 text-5xl leading-4 text-white left-2 top-3 lg:hidden"
            onClick={handleOpenNavbarLinks}
          >
            {openNavbarLinks ? <RiCloseLine fontSize={28} fill='#fff' /> : <ToggleMenuIcon fill="#fff" />}
          </button>
          
          <ul className="z-10 items-center hidden gap-2 lg:flex lg:h-auto">
            {
              allLinks.map(({ id, name, path, active }) => (
                <li 
                  key={id} 
                  className={`p-1 ${active ? "text-primary border-b border-b-primary font-bold " : ""} text-[17px] `}
                >
                  <Link href={path} >{name}</Link>
                </li>
              ))
            }
          </ul>

          {
            userData?.token && (
              <button type="button">
                <Link href="/packages" className='px-5 py-1 font-medium text-gray-100 bg-green-500 rounded-full'>الباقات</Link>
              </button>
            )
          }
        </div>

        <div className={`fixed lg:static top-0 z-10 flex flex-col lg:justify-end items-center justify-center w-full h-screen gap-3 lg:flex-row lg:h-auto bg-secondary ${openNavbarLinks ? "left-0" : "-left-full"} transition-all duration-300`}>
          
          {/* Links in Mobile */}
          <ul className="flex lg:hidden mt-8 lg:flex-row flex-col items-center md:gap-3.5 gap-2 lg:h-auto ">
            {
              allLinks.map(({ id, name, path, active }) => (
                <li 
                  key={id} 
                  onClick={handleOpenNavbarLinks}
                  className={`p-1 ${active ? "text-primary border-b border-b-primary font-bold " : ""} md:text-lg text-base`}>
                  <Link href={path}>
                    {name}
                  </Link>
                </li>
              ))
            }
          </ul>

          {
            userData?.token ? (
              <>
                {/* Login */}
                <Link 
                  href="/profile" 
                  className="flex gap-2 mt-8 text-base cursor-pointer lg:mt-0"
                  onClick={handleOpenNavbarLinks}
                >
                  <UserIcon className="" />
                  <span>الملف الشخصي</span>
                </Link>
                <span className='lg:h-5 lg:w-[1px] bg-primary'></span>
                {/* Rgister */}
                <button 
                  type='button' 
                  onClick={() => {
                    userLogout(); 
                    handleOpenNavbarLinks(); 
                  }}>
                  <span>تسجيل الخروج</span>
                </button>
              </>
            ) : (
              <>
                {/* Login */}
                <button 
                  type='button' 
                  className="flex gap-2 mt-8 text-base cursor-pointer lg:mt-0" 
                  onClick={() => {
                    setOpenLogin(true);
                    handleOpenNavbarLinks();
                  }}
                >
                  {/* <UserIcon className="" /> */}
                  <span>تسجيل دخول</span>
                </button>
                <span className='lg:h-5 lg:w-[1px] bg-primary'></span>
                {/* Rgister */}
                <button 
                  type='button' 
                  onClick={() => {
                    setOpenRegister(true);
                    handleOpenNavbarLinks();
                  }}
                >
                  <span>تسجيل جديد</span>
                </button>
              </>
            )
          }
        </div>
      </div>

      <Login openLogin={openLogin} setOpenLogin={setOpenLogin} />
      <Register openRegister={openRegister} setOpenRegister={setOpenRegister} />
    </nav>
  )
}

export default Navbar