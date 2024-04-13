"use client";
import { useAppContext } from '@/contexts/AppContext'
import { useMutation, useQuery } from '@tanstack/react-query';
import { redirect } from 'next/navigation'
import React, { useEffect } from 'react'
import * as packagesApi from "../../APIs/4-Package-Api";
import { LoadingSpinner } from '@/components';
import { LiaSpinnerSolid } from "react-icons/lia";


const fakePackagesData = [
  {
    id: 2,
    name: "الذهبيه",
    price: "10"
  },
  {
    id: 3,
    name: "الاولى",
    price: "5"
  },
  {
    id: 5,
    name: "test",
    price: "60"
  }
]

const Packages = () => {
  const { userData, showToast } = useAppContext();

  // Protected routes
  useEffect(() => {
    if (!userData) {
      redirect("/")
    }
  }, [userData])

  const { data, isLoading } = useQuery({
    queryFn: () => packagesApi.fetchAllPackages(userData?.token),
    queryKey: ["fetchPackages"],
  })

  const mutation = useMutation({
    mutationFn: packagesApi.subscribeToThePackage,
    onSuccess: (data) => {
      if(data.success) {
        showToast({ type: "SUCCESS", message: data.message });
      } else {
        showToast({ type: "ERROR", message: data.message });
      }
    },
    onError: (err) => {
      showToast({ type: "ERROR", message: err.message });
      console.log("Error :", err)
    },
  })



  const selectPackage = (id) => {
    const formData = new FormData();
    formData.append("package_id", id);

    mutation.mutate({ token: userData?.token, formData: formData })
  }


  if (isLoading) return <LoadingSpinner />

  return (
    <div>
      <div className="container mx-auto">
        <h3 className='pt-8 pb-5 text-4xl font-medium text-center text-white'>الباقات</h3>

        <div className="grid grid-cols-1 gap-8 mt-5 mb-5 md:grid-cols-3">
          {
            fakePackagesData.map(({ id, name, price }) => (
              <div className="flex flex-col items-center justify-center gap-8 py-8 text-center rounded-md bg-emerald-400" key={id}>
                <h2 className="text-4xl font-medium">{name}</h2>
                <div>
                  <h3 className="text-6xl font-bold">{price}</h3>
                  <span>جنية</span>
                </div>

                <div>
                  <button 
                    type="button" 
                    className='flex items-center justify-center w-full gap-2 px-10 py-2 rounded-full bg-emerald-100'
                    onClick={() => selectPackage(id)}
                  >
                    إختيار
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Packages