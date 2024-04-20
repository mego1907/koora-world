"use client";
import Image from "next/image";
import LoadingSpinner from '@/components/LoadingSpinner';
import { useAppContext } from '@/contexts/AppContext';
import { useMutation, useQuery } from "@tanstack/react-query";
import * as profileApi from "../../APIs/2-Profile-Api";
import { redirect, useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import DeleteAccount from "./_components/DeleteAccount";
import { useForm } from "react-hook-form";
import { setItemInLocalStorage } from "@/utils";
import { LiaSpinnerSolid } from "react-icons/lia";


const Profile = () => {
  const { userData, showToast, setUserData } = useAppContext();

  // Protected route
  useEffect(() => {
    if (!userData) {
      redirect("/")
    }
  }, [userData])

  const [updateProfile, setUpdateProfile] = useState(false);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["fetchProfileData"],
    queryFn: () => profileApi.fetchProfileInfo(userData.token)
  })

  const { register, formState: { errors }, handleSubmit, clearErrors } = useForm({
    defaultValues: {
      name: userData?.name,
      phone: userData?.phone
    }
  })

  const mutation = useMutation({
    mutationFn: profileApi.updateProfileImage,
    onSuccess: (data) => {
      if (data?.success) {
        showToast({ type: "SUCCESS", message: data.message });
        refetch()
      } else {
        showToast({ type: "ERROR", message: data.message });
      }
    },
    onError: (err) => {
      console.log(err);
      showToast({ type: "ERROR", message: err.message });
    }
  })

  const profileDataMutation = useMutation({
    mutationKey: "updateProileData",
    mutationFn: profileApi.updateProileData,
    onSuccess: (data) => {
      if (data?.success) {
        showToast({ type: "SUCCESS", message: data.message });
        setUserData({ ...userData, name: data.data.name, phone: data.data.phone });
        setItemInLocalStorage("user", JSON.stringify({...userData, name: data.data.name, phone: data.data.phone }));  
      } else {
        showToast({ type: "ERROR", message: data.message });
      }
    },
    onError: (err) => {
      console.log(err);
      showToast({ type: "ERROR", message: err.message });
    }
  })


  const updateProfileImage = (e) => {
    const profileImage = e.target.files[0];



    const formData = new FormData();
    formData.append("image", profileImage);

    mutation.mutate({ token: userData?.token, formData: formData });
  }


  const updateProfileData = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("phone", data.phone);
    formData.append("password", data.password);

    profileDataMutation.mutate({ token: userData?.token, formData: formData });
  }




  if (isLoading) return <LoadingSpinner />

  return (
    <div>
      <div className="container">
        <h3 className="mt-5 text-lg font-semibold text-white md:text-3xl">الملف الشخصي</h3>

        <div className="my-5">
          {/* image */}
          <div className="flex justify-center p-2">
            <label className="relative cursor-pointer">
              {
                data?.data?.image ? (
                  <img
                    src={data?.data?.image}
                    alt="Proile Image"
                    className="object-cover object-center w-32 h-32 rounded-full"
                  />
                ) : (
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    alt="Proile Image"
                    className="w-32 h-32 rounded-full"
                  />
                )
              }


                <div
                  className="absolute left-0 flex items-center justify-center w-8 h-8 text-white bg-gray-500 rounded-full bottom-2"
                >
                  <FaRegEdit />
                </div>



              <input
                type="file"
                name="profileImage"
                className="hidden"
                onChange={updateProfileImage}
                id="profileImage"
              />
            </label>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-12 my-8">
            {/* Name */}
            <div className="grid items-center w-full grid-rows-2 gap-2 text-white md:items-start">
              <h3 className="text-base font-semibold text-gray-300 md:text-xl">الاسم</h3>
              {
                updateProfile ? (
                  <>
                    <input
                      type="text"
                      name="name"
                      className="p-1.5 rounded-md px-4 bg-transparent border border-white"
                      {...register("name")}
                    />
                  </>

                ) : (
                  <p cxlassName='text-sm md:text-2xl'>{data?.data?.name}</p>
                )
              }
            </div>

            {/* Phone */}
            <div className="grid items-center w-full gap-2 text-white grid-row-2 md:items-start">
              <h3 className="text-base font-semibold text-gray-300 md:text-xl">رقم الهاتف</h3>
              {
                updateProfile ? (
                  <>
                    <input
                      type="text"
                      name="phone"
                      className="p-1.5 rounded-md px-4 bg-transparent border border-white"
                      {...register("phone")}
                    />
                  </>
                ) : (
                  <p className='text-sm md:text-2xl'>{data?.data?.phone}</p>
                )
              }
            </div>

            {/* Password */}
            {
              updateProfile && (
                <div className="grid items-center w-full gap-2 text-white grid-row-2 md:items-start">
                  <h3 className="text-base font-semibold text-gray-300 md:text-xl">كلمة المرور</h3>
                  <>
                    <input
                      type="text"
                      name="password"
                      className="p-1.5 rounded-md px-4 bg-transparent border border-white"
                      {...register("password")}
                    />
                  </>
                </div>
              )
            }

            {/* Password */}
            {/* {
              updateProfile && (
                <div className="grid items-center w-full gap-2 text-white grid-row-2 md:items-start">
                  <h3 className="text-base font-semibold text-gray-300 md:text-xl">تأكيد كلمة المرور</h3>
                  <>
                    <input
                      type="text"
                      name="password_confirmation"
                      className="p-1.5 rounded-md px-4 bg-transparent border border-white"
                      {...register("password_confirmation", { required: "هذا الحقل مطلوب" })}
                    />
                    {errors?.password_confirmation && <p className="text-sm text-red-400">{errors?.password_confirmation?.message}</p>}
                  </>
                </div>
              )
            } */}

            <div className="grid items-center grid-rows-2 gap-5 text-white">
              <h3 className="text-base font-semibold text-gray-300 md:text-xl">نوع الباقة</h3>
              <div>
                <span
                  className='px-4 py-1 pb-2 text-sm rounded-full text-gray-50 bg-emerald-400 md:text-base'
                >
                  {data?.data?.package_name}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full gap-5 pt-16">
            {
              updateProfile ? (
                <div className="flex gap-2">
                  <button
                    className="flex items-center gap-2 p-2 px-8 text-white bg-green-600 rounded-full"
                    onClick={handleSubmit(updateProfileData)}
                  >
                    تأكيد
                    {profileDataMutation.isPending && <LiaSpinnerSolid className='animate-spin' />}
                  </button>
                  <button
                    className="p-2 px-8 text-white bg-red-500 rounded-full"
                    onClick={() => {
                      setUpdateProfile(false);
                      clearErrors();
                    }}
                  >
                    إلغاء
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="p-2 px-6 text-white bg-green-600 rounded-full"
                  onClick={() => setUpdateProfile(!updateProfile)}
                >
                  تحديث الملف الشخصي
                </button>
              )
            }
            <DeleteAccount hideDeleteBtn={updateProfile} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile