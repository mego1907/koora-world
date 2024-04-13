"use client";
import Image from "next/image";
import LoadingSpinner from '@/components/LoadingSpinner';
import { useAppContext } from '@/contexts/AppContext';
import { useQuery } from "@tanstack/react-query";
import * as profileApi from "../../APIs/2-Profile-Api";
import { useRouter } from "next/navigation"

const Profile = () => {
  const { userData } = useAppContext();
  const router = useRouter()

  const { data, isLoading } = useQuery({ 
    queryKey: ["fetchProfileData"], 
    queryFn: () => profileApi.fetchProfileInfo(userData.token) 
  })

  if (isLoading) {
    return <LoadingSpinner />
  }


  if(!userData?.token) {
    router.push("/")
  } 


  return (
    <div>
      <div className="container">
        <h3 className="mt-5 text-lg font-semibold text-white md:text-3xl">الملف الشخصي</h3>

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
            <div className="flex flex-col items-center w-full gap-2 text-white md:w-1/2 md:items-start">
              <h3 className="text-base font-semibold text-gray-300 md:text-xl">الاسم</h3>
              <p className='text-sm md:text-2xl'>{data?.data?.name}</p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center w-full gap-2 text-white md:w-1/2 md:items-start">
              <h3 className="text-base font-semibold text-gray-300 md:text-xl">رقم الهاتف</h3>
              <p className='text-sm md:text-2xl'>{data?.data?.phone}</p>
            </div>

            <div className="flex flex-col items-center gap-5 text-white md:flex-row md:gap-10 md:w-1/2 md:mb-5">
              <h3 className="text-base font-semibold text-gray-300 md:text-xl">نوع الحزمة</h3>
              <div className='px-4 py-1 pb-2 text-sm text-white bg-green-700 rounded-full md:text-base'>{data?.data?.package_name}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile