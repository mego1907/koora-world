import React from 'react'
import Modal from './Modal'

const Register = ({ openRegister, setOpenRegister }) => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0];
    const phone = e.target[1];
    const password = e.target[2];
    const confirmPassword = e.target[3];

    const formData = new FormData();
    formData.append("name", name.value);
    formData.append("phone", phone.value);
    formData.append("password", password.value);
    formData.append("password_confirmation", confirmPassword.value);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/register`, {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    
    localStorage && localStorage.setItem("user", JSON.stringify(data.data))
  }

  return (
    <Modal open={openRegister} setOpen={setOpenRegister}>

      <h3 className="mb-5 text-2xl font-bold text-center">تسجيل جديد</h3>

      <div className="flex flex-col justify-center w-8/12 gap-3 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">الإسم</label>
            <input
              placeholder='ادخل الإسم'
              type="text"
              className='p-2 px-2 bg-transparent border border-white rounded-md outline-none'
              id="name"
            />
          </div>


          <div className="flex flex-col gap-2">
            <label htmlFor="phone">رقم الهاتف</label>
            <input
              placeholder='ادخل رقم هاتفك'
              type="text"
              className='p-2 px-2 bg-transparent border border-white rounded-md outline-none'
              id="phone"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone">كلمة المرور</label>
            <input
              placeholder='***********'
              type="text"
              className='p-2 px-2 bg-transparent border border-white rounded-md outline-none'
              id="phone"
            />
          </div>


          <div className="flex flex-col gap-2">
            <label htmlFor="phone">تأكيد كلمة المرور</label>
            <input
              placeholder='************'
              type="text"
              className='p-2 px-2 bg-transparent border border-white rounded-md outline-none'
              id="phone"
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
              onClick={() => setOpenRegister(false)}
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

export default Register