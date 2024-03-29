"use client";
import Image from "next/image";
import LoadingSpinner from '@/components/LoadingSpinner';
import { useAppContext } from '@/contexts/AppContext';
import { useQuery } from "@tanstack/react-query";
import * as apiClient from "../../api-client";

const Profile = () => {
  const { userData } = useAppContext();

  const { data, isLoading } = useQuery({ queryKey: ["fetchProfileData"], queryFn: () => apiClient.fetchProfileData(userData.token) })

  if (isLoading) {
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
            <div className="flex flex-col text-white gap-2 md:w-1/2 w-full items-center md:items-start">
              <h3 className="md:text-xl text-base font-semibold text-gray-300">الاسم</h3>
              <p className='md:text-2xl text-sm'>{data?.data?.name}</p>
            </div>

            {/* Phone */}
            <div className="flex flex-col text-white gap-2 md:w-1/2 w-full items-center md:items-start">
              <h3 className="md:text-xl text-base font-semibold text-gray-300">رقم الهاتف</h3>
              <p className='md:text-2xl text-sm'>{data?.data?.phone}</p>
            </div>

            <div className="flex text-white md:flex-row flex-col items-center md:gap-10 gap-5 md:w-1/2 md:mb-5">
              <h3 className="md:text-xl text-base font-semibold text-gray-300">نوع الحزمة</h3>
              <div className='md:text-base text-sm text-white px-4 py-1 pb-2 bg-green-700 rounded-full'>{data?.data?.package_name}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile