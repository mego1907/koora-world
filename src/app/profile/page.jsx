"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import { instance } from "@/services/axios";
import LoadingSpinner from '@/components/LoadingSpinner';
import { useAppContext } from '@/contexts/AppContext';

const Profile = () => {
  const [profileData, setProfileData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { userData, setUserData } = useAppContext();

  useEffect(() => {

    const getData = async () => {
      try {
        setLoading(true);
        setError(null);
        setProfileData([]);

        const res = await fetch("https://kooora-world.com/api/Client/profile/current_info", {
          method: "GET",
          headers: {
            "Authorization": "Bearer " + userData.token,
            "Accept": "*/*",
            "Access-Control-Allow-Origin": "*",
            "currency": "kwd",
            "Accept": "application/json"
          }
        });

        const resBody = await res.json();

        setProfileData(resBody.data)
        setLoading(false);

        console.log("resBody.data :", resBody.data)

      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    getData();
  }, [userData]);

  if (loading) {
    return <LoadingSpinner />
  }


  return (
    <div>
      <div className="container">
        <h3 className="text-white md:text-3xl text-lg font-semibold mt-5">الملف الشخصي</h3>

        <div className="my-10">
          {/* image */}
          <div className="flex justify-center p-5">
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="Proile Image"
                className="w-32 h-32 rounded-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-12 my-16">
            {/* Name */}
            <div className="flex flex-col text-white gap-2 md:w-1/2 w-full items-center">
              <h3 className="md:text-xl text-base font-semibold text-gray-300">الاسم</h3>
              <p className='md:text-2xl text-sm'>{profileData?.name}</p>
            </div>

            {/* Phone */}
            <div className="flex flex-col text-white gap-2 md:w-1/2 w-full items-center">
              <h3 className="md:text-xl text-base font-semibold text-gray-300">رقم الهاتف</h3>
              <p className='md:text-2xl text-sm'>{profileData?.phone}</p>
            </div>

            <div className="flex text-white md:flex-row flex-col items-center md:gap-10 gap-5 md:w-1/2">
              <h3 className="md:text-xl text-base font-semibold text-gray-300">نوع الحزمة</h3>
              <div className='md:text-base text-sm text-white px-4 py-1 pb-2 bg-green-700 rounded-full'>{profileData?.package_name}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile