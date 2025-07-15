import React, { useState } from 'react';
import img from '../../assets/atom.png';
import img1 from '../../assets/research.png';

export default function ResearchProjects() {
  const [selectedCollege, setSelectedCollege] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const colleges = [
    'كلية الطب',
    'كلية الصيدلة',
    'كلية طب الأسنان',
    'كلية التمريض',
    'كلية العلوم',
    'كلية الهندسة',
    'كلية الزراعة',
    'كلية الحاسبات والمعلومات',
    'كلية التربية',
    'كلية التربية الرياضية',
    'كلية التربية النوعية',
    'كلية التجارة',
  ];

  const handleShow = () => {
    setShowMessage(true);
  };

  return (
    <>
      {/* 🟦 العنوان الرئيسي */}
      <div className="header flex items-center mt-36 lg:mx-32">
        <div className="flex items-center mr-8 lg:mr-0">
          <img className="w-[50px]" src={img} alt="Logo" />
          <p className="text-sm font-bold text-[--main-color] pr-2">المراكز البحثية بجامعة طنطا</p>
        </div>
        <div className="flex items-center flex-1 mr-16 ml-8 lg:ml-0">
          <i className="fa-solid fa-circle text-[--main-color] text-[7px]"></i>
          <hr className="flex-1 border border-[--hover-color]" />
        </div>
        {/* <div>
          <p className="text-xs font-medium rounded-md px-4 py-1 bg-[--main-color] text-white hover:bg-white hover:text-[--main-color] border border-[--main-color] cursor-pointer">
            علماء الجامعة
            <span className='px-2 text-[--hover-color]'><i className="fa-solid fa-chevron-left"></i></span>
          </p>
        </div> */}
      </div>

      {/* 🟦 محتوى الصفحة */}
      <div className="w-full flex flex-col lg:grid grid-cols-3 gap-6 pt-2 px-8 xl:px-32 mb-6">
        {/* 🔹 الصورة */}
        <div className="shadow-md col-span-1 rounded-md flex items-center">
          <img src={img1} alt="research" className='w-full' />
        </div>

        {/* 🔹 دروب داون + زر عرض */}
        <div className="flex flex-col col-span-2">
          <div className="p-4">
            <label className="ml-2 text-gray-700 font-medium mb-1 block">اختر الكلية</label>
            <div className="flex items-center space-x-2 mt-2 rtl:space-x-reverse">
              <select
                className="border border-gray-400 rounded px-4 py-2 "
                value={selectedCollege}
                onChange={(e) => {
                  setSelectedCollege(e.target.value);
                  setShowMessage(false);
                }}
              >
                <option value="" disabled>
                  اختر الكلية
                </option>
                {colleges.map((college, idx) => (
                  <option key={idx} value={college}>
                    {college}
                  </option>
                ))}
              </select>
              <button
                onClick={handleShow}
                className="px-4 py-2 bg-[--main-color] rounded border border-[--main-color] text-white hover:bg-white hover:text-[--main-color]"
              >
                عرض
              </button>
            </div>

            {/* 🔹 رسالة عدم وجود بيانات */}
            {showMessage && (
              <p className="mt-4 text-[--main-color] font-medium">لا توجد بيانات موجودة</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
