"use client";
import React, { useRef } from 'react'
import Modal from './Modal'
import { useAppContext } from '@/contexts/AppContext';
import { setItemInLocalStorage } from '@/utils';

const Login = ({ openLogin, setOpenLogin }) => {
  const formRef = useRef(undefined);

  const { userData, setUserData } = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phone = e.target[0];
    const password = e.target[1];

    const formData = new FormData();
    formData.append("phone", phone.value);
    formData.append("password", password.value);

    try{
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/login`, {
        method: "POST",
        body: formData
      });
      

      const data = await res.json();
      setUserData(data.data)
      setItemInLocalStorage("user", JSON.stringify(data.data))
      // localStorage && localStorage.setItem("user", JSON.stringify(data.data));
      setOpenLogin(false);

    } catch(err) {
      console.log(err.message)
    }
    
  }

  const closeModal = () => {
    setOpenLogin(false);

    console.log(formRef.current)
  }

  return (
    <Modal 
      open={openLogin} 
      setOpen={setOpenLogin}
    >

      <h3 className="mb-5 text-2xl font-bold text-center">تسجيل الدخول</h3>

      <div className="flex flex-col justify-center w-8/12 gap-3 mx-auto">
        <form onSubmit={handleSubmit} ref={formRef}>
          <div className="flex flex-col gap-2">
            <label 
              htmlFor="phone"
            >
              رقم الهاتف
            </label>
            <input
              placeholder='ادخل رقم هاتفك'
              type="text"
              className='p-2 px-2 bg-transparent border border-white rounded-md outline-none'
              id="phone"
              name="phone"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label 
              htmlFor="password"
            >
              كلمة المرور
            </label>
            <input
              placeholder='ادخل رقم هاتفك'
              type="text"
              className='p-2 px-2 bg-transparent border border-white rounded-md outline-none'
              id="password"
              name="password"
            />
          </div>

          <div className="flex justify-center gap-2 mt-5">
            <button
              type="submit"
              className='px-5 pt-2 pb-3 font-medium border border-white rounded-md'
            >
              تسجيل الدخول
            </button>
            <button
              type="button"
              onClick={closeModal}
              className='px-5 pt-1 pb-2 text-sm font-medium bg-red-700 rounded-md'
            >
              إغلاق
            </button>
          </div>
          
        </form>
      </div>
    </Modal>
  )
}

export default Login