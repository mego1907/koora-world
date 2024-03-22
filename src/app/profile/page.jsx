"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import { instance } from "@/services/axios";
import LoadingSpinner from '@/components/LoadingSpinner';

const Profile = () => {
  const [profileData, setProfileData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const userData = localStorage.getItem("user");


  useEffect(() => {

    const getData = async () => {
      try {
        setLoading(true);
        setError(null);
        setProfileData([]);

        // const res = await instance.get("/match/");
        const res = await fetch("https://kooora-world.com/api/Client/profile/current_info", {
          method: "GET",
          headers: {
            "Authorization": "Bearer " + userData.token,
            "Accept": "*/*",
            "Access-Control-Allow-Origin": "*",
            "currency": "kwd",
            "Accept": "application/json"
          }
        })
        setLoading(false);

        console.log("Profile :", res.data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    getData();
  }, []);

  if (loading) {
    return <LoadingSpinner />
  }


  return (
    <div className='min-h-[60vh]'>
      <div className="container">
        <h3 className="text-white text-3xl font-semibold mt-5">الملف الشخصي</h3>

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
            <div className="flex flex-col text-white gap-2 md:w-1/2">
              <h3 className="text-xl font-semibold text-gray-300">الاسم</h3>
              <p className='text-2xl'>السيد محمد فتحي</p>
            </div>

            {/* Phone */}
            <div className="flex flex-col text-white gap-2 md:w-1/2">
              <h3 className="text-xl font-semibold text-gray-300">رقم الهاتف</h3>
              <p className='text-2xl'>01020304050</p>
            </div>

            <div className="flex text-white items-center md:gap-10 md:w-1/2">
              <h3 className="text-xl font-semibold text-gray-300">نوع الحزمة</h3>
              <div className='text-base text-white px-4 py-1 pb-2 bg-green-700 rounded-full'>حزمة مجانية</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile