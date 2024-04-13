import React, { useState } from 'react';
import Image from "next/image";
import { useMutation } from '@tanstack/react-query';
import * as expectationsApi from "../../../APIs/7-Expectations-Api"
import { useForm } from 'react-hook-form';
import { useAppContext } from '@/contexts/AppContext';
import { LiaSpinnerSolid } from 'react-icons/lia';

const MatchExpectation = () => {
  const [expectResult, setExpectResult] = useState(false);
  const { userData, showToast } = useAppContext();

  const { register, formState: { errors }, handleSubmit } = useForm()

  const mutation = useMutation({
    mutationFn: expectationsApi.predictTheExpectation,
    onSuccess: (data) => {
      showToast({ type: "SUCCESS", message: data?.message })
    }
  })

  const teams = [
    {
      name: "مانشستر يونيتد",
      logo: "/assets/man-city.png"
    },
    {
      name: "مانشستر يونيتد",
      logo: "/assets/barcelona.png"
    }
  ]

  const expectTheResult = (data) => {

    if (data.input1 && data.input2) {
      const formData = new FormData();
      formData.append("input1", data.input1)
      formData.append("input2", data.input2)
      
      mutation.mutate(userData.token, formData)
    }
  }

  return (
    <div className='w-full h-full p-5 bg-[#024054]'>
      <div className="flex flex-col items-center gap-5">
        <h3 className="text-center text-white ">الدوري الأسباني</h3>
        <p className='flex items-center justify-center gap-2 text-center text-white'>
          <span>الثلاثاء ، 7 فبراير</span>
          <span className="text-[#f8e500] leading-5">21 : 00</span>
        </p>

        {/* Teams */}
        <div className="w-full">
          <div className="relative flex justify-between">
            {
              teams?.map((team, i) => (
                <div key={i} className="flex flex-col items-center justify-center text-base text-white">
                  <Image width={45} height={45} src={team.logo} alt={team.name} />
                  <h6>{team.name}</h6>
                </div>
              ))
            }
            <p className="absolute text-2xl text-center text-white -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">لم تبدء</p>
          </div>
        </div>

        {
          expectResult ? (
            <form onSubmit={handleSubmit(expectTheResult)} className="flex flex-col w-full gap-4">
              <div className="flex justify-between w-full text-white">
                <div>
                  <input
                    type="text"
                    className={`w-20 py-1 text-center bg-transparent border rounded-sm outline-none ${errors.input1 ? "border-red-400" : ""}`}
                    name="input1"
                    {...register("input1", { required: "هذا الحقل مطلوب" })}
                  />
                  {errors.input1 && <p className="mt-1 text-[10px] font-semibold text-red-400">{errors.input1.message}</p>}
                </div>
                <div>
                  <input 
                    type="text" 
                    className={`w-20 py-1 text-center bg-transparent border rounded-sm outline-none ${errors.input2 ? "border-red-400" : ""}`}
                    name="input2"
                    {...register("input2", { required: "هذا الحقل مطلوب" })}
                  />
                  {errors.input2 && <p className="mt-1 text-[10px] font-semibold text-red-400">{errors.input2.message}</p>}
                </div>

              </div>
              <button 
                className='flex items-center justify-center gap-2 px-4 py-1 text-white border rounded-md disabled:opacity-70' 
                onClick={expectTheResult}
                type='submit'
                disabled={errors.input2 && errors.input2}
              >
                تأكيد
                {mutation?.isPending && <LiaSpinnerSolid className='animate-spin' />}
              </button>
            </form>
          ) : (
            <button 
              onClick={() => setExpectResult(true)}
              type="button" 
              className="flex items-center justify-center h-8 w-[194px] leading-5 text-white bg-transparent border border-white rounded-full"
            >
              <span className='mb-1'>توقع النتيجة</span>
            </button>
          )
        }

      </div>
    </div>
  )
}

export default MatchExpectation