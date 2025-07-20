import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserProfile() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const data = localStorage.getItem('userData');

      if (data) {
        setUserData(JSON.parse(data));
      } else {
        console.warn("لا توجد بيانات مستخدم في التخزين المحلي");
      }
    } catch (error) {
      console.error("حدث خطأ أثناء قراءة بيانات المستخدم:", error);
    }
  }, [navigate]);

  if (!userData) {
    return (
      <div className='w-screen h-screen flex items-center justify-center'>
        <p className='text-gray-500'>جاري تحميل البيانات...</p>
      </div>
    );
  }

  return (
    <div className='w-screen h-screen bg-gray-100 flex flex-col justify-center items-center p-4'>
      <p className='text-xl text-[--main-color] font-semibold p-8'> بيانات المستخدم</p>

      <div className='w-full max-w-2xl bg-white rounded-lg shadow-md p-6 sm:p-8 flex flex-col gap-2 border-2 border-gray-300'>
        <div className='grid grid-cols-1 gap-y-1'>
          <p className='text-gray-500 text-base'>الاسم:</p>
          <p className='text-[--main-color] font-semibold'>{userData.fullName}</p>

          <p className='text-gray-500 text-base'>الرقم القومي:</p>
          <p className='text-[--main-color] font-semibold'>{userData.nationalNumber}</p>

          <p className='text-gray-500 text-base'>الكلية:</p>
          <p className='text-[--main-color] font-semibold'>{userData.facultyName}</p>

          <p className='text-gray-500 text-base'>القسم:</p>
          <p className='text-[--main-color] font-semibold'>{userData.departmentName}</p>
        </div>
      </div>
    </div>
  );
}
