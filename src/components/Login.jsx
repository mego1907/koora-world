"use client";
import React, { useCallback, useEffect, useRef } from 'react'
import Modal from './Modal'
import { useAppContext } from '@/contexts/AppContext';
import { setItemInLocalStorage } from '@/utils';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import * as authApi from "../APIs/1-auth-Api";
import { LiaSpinnerSolid } from "react-icons/lia";


const Login = () => {
  const formRef = useRef(undefined);
  const {
    userData,
    setUserData,
    showToast,
    setOpenLogin,
    openLogin
  } = useAppContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    clearErrors
  } = useForm();

  const mutation = useMutation({
    mutationFn: authApi.login,
    onSuccess: (val) => {
      if (val.success) {
        showToast({ type: "SUCCESS", message: `أهلا بك ${val.data.name}` })
        setUserData(val?.data);
        setItemInLocalStorage("user", JSON.stringify(val?.data))
        setOpenLogin(false);
      } else {
        showToast({ type: "ERROR", message: val.message })
      }
    },
    onError: (err) => {
      console.log(err);
      showToast({ type: "ERROR", message: `ERROR` })
    }
  })


  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("phone", data.phone);
    formData.append("password", data.password);

    mutation.mutate(formData);
  }

  const closeModal = () => {
    setOpenLogin(false);
    clearErrors();
  }


  return (
    <Modal
      open={openLogin}
      setOpen={setOpenLogin}
      onClose={closeModal}
    >
      <h3 className="mb-5 text-xl font-bold text-center md:text-2xl">تسجيل الدخول</h3>

      <div className="flex flex-col justify-center w-full gap-3 mx-auto md:w-8/12">
        <form onSubmit={handleSubmit(onSubmit)} ref={formRef} className="flex flex-col gap-2">

          <label className="flex flex-col gap-2 mb-3">
            رقم الهاتف
            <input
              placeholder='ادخل رقم هاتفك'
              type="text"
              className='p-2 px-2 bg-transparent border border-white rounded-md outline-none'
              id="phone"
              name="phone"
              {...register("phone", { required: "رقم الهاتف مطلوب" })}
            />
            {errors?.phone && <p className='text-sm font-semibold text-red-400'>{errors.phone.message}</p>}
          </label>
          <label className="flex flex-col gap-2">
            كلمة المرور
            <input
              placeholder='*********'
              type="password"
              className='p-2 px-2 tracking-wider bg-transparent border border-white rounded-md outline-none'
              id="password"
              name="password"
              {...register("password", { required: "كلمة المرور مطلوبة" })}
            />
            {errors?.password && <p className='text-sm font-semibold text-red-400'>{errors.password?.message}</p>}
          </label>

          {mutation?.data && <p className={`text-sm text-center font-semibold ${mutation.data.success ? "text-green-400" : "text-red-300"}`}>{mutation?.data?.message}</p>}

          <div className="flex justify-center gap-2 mt-3">
            <button
              type="submit"
              className='flex items-center justify-center gap-2 px-5 py-2 font-medium bg-green-500 border border-green-500 rounded-md'
            >
              تسجيل الدخول
              {mutation?.isPending && <LiaSpinnerSolid className='animate-spin' />}
            </button>
          </div>

        </form>
      </div>
    </Modal>
  )
}

export default Login