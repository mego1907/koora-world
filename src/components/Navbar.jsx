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




const Navbar = () => {
  const path = usePathname();
  const [openNavbarLinks, setOpenNavbarLinks] = useState(false);

  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const { userData, setUserData } = useAppContext();

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
  ];

  const handleOpenNavbarLinks = () => {
    setOpenNavbarLinks(!openNavbarLinks);
  }


  const logout = () => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/logout`, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + userData.token
      }
    })

    setUserData({});

    // localStorage && localStorage.clear();
    clearLocalStorage();
  }


  return (
    <nav className='md:h-[112px] h-16 sticky top-0  text-white bg-secondary z-10 flex items-center ' >
      <div className="container flex justify-between">
        <div className="relative z-50 flex items-center w-full gap-7">
          <img src="/assets/Logo.png" alt="Logo" className='md:w-44 w-36' />
          
          {/* <Image src="/assets/Logo.png" alt="Logo" fill width={176}  height={64}  /> */}

          {/* Toggle */}
          <button 
            type="button" 
            className="absolute flex w-10 h-10 text-5xl leading-4 text-white left-2 top-3 lg:hidden"
            onClick={handleOpenNavbarLinks}
          >
            {openNavbarLinks ? '×' : <ToggleMenuIcon fill="#fff" />}
          </button>
          
          <ul className="lg:flex hidden items-center gap-3.5 lg:h-auto z-10">
            {
              allLinks.map(({ id, name, path, active }) => (
                <li key={id} className={`p-1 ${active ? "text-primary border-b border-b-primary font-bold " : ""} text-lg `}>
                  <Link href={path}>{name}</Link>
                </li>
              ))
            }
          </ul>
        </div>

        <div className={`fixed lg:static top-0 z-10 flex flex-col lg:justify-end items-center justify-center w-full h-screen gap-3 lg:flex-row lg:h-auto bg-secondary ${openNavbarLinks ? "left-0" : "-left-full"} transition-all duration-300`}>
          
          {/* Links in Mobile */}
          <ul className="flex lg:hidden mt-8 lg:flex-row flex-col items-center md:gap-3.5 gap-2 lg:h-auto ">
            {
              allLinks.map(({ id, name, path, active }) => (
                <li key={id} className={`p-1 ${active ? "text-primary border-b border-b-primary font-bold " : ""} md:text-lg text-base`}>
                  <Link href={path}>{name}</Link>
                </li>
              ))
            }
          </ul>

          {
            userData ? (
              <>
                {/* Login */}
                <Link href="/profile" className="flex gap-2 mt-8 text-base cursor-pointer lg:mt-0">
                  <UserIcon className="" />
                  <span>الملف الشخصي</span>
                </Link>
                <span className='lg:h-5 lg:w-[1px] bg-primary'></span>
                {/* Rgister */}
                <button type='button' onClick={logout}>
                  <span>تسجيل الخروج</span>
                </button>
              </>
            ) : (
              <>
                {/* Login */}
                <button type='button' className="flex gap-2 mt-8 text-base cursor-pointer lg:mt-0" onClick={() => setOpenLogin(true)}>
                  <UserIcon className="" />
                  <span>تسجيل دخول</span>
                </button>
                <span className='lg:h-5 lg:w-[1px] bg-primary'></span>
                {/* Rgister */}
                <button type='button' onClick={() => setOpenRegister(true)}>
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