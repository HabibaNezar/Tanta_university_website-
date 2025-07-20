import React from 'react'

export default function UserProfile() {
  return (
   <div className='w-screen h-screen bg-gray-100 flex flex-col justify-center items-center p-4'>
        <p className='text-xl text-[--main-color] font-semibold p-8'> بيانات المستخدم</p>
        <div className='w-full max-w-2xl bg-white rounded-lg shadow-md p-6 sm:p-8 flex flex-col gap-2 border-2 border-gray-300'>
            
            <div className='grid grid-cols-1 gap-y-1 '>
            <p className='text-gray-500 text-base'>الاسم:</p>
            <p className='text-[--main-color] font-semibold'>حبيبة نزار عبدالمحسن</p>

            <p className='text-gray-500 text-base'>الرقم القومي:</p>
            <p className='text-[--main-color] font-semibold'>1234567891011</p>

            <p className='text-gray-500 text-base'>الكلية:</p>
            <p className='text-[--main-color] font-semibold'>كلية الهندسة</p>

            <p className='text-gray-500 text-base'>القسم:</p>
            <p className='text-[--main-color] font-semibold'>حاسبات وتحكم الي</p>
            </div>

        </div>
    </div>


  )
}
