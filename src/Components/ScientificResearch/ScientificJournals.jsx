import React from 'react';
import img from '../../assets/atom.png';
import img1 from '../../assets/journal.jpg';

export default function ScientificJournals() {
  const journals = [
    { title: "المجلة العلمية لكلية طب", url: "https://med.tanta.edu.eg/mag_since.aspx" },
    { title: "المجلة العلمية لكلية صيدلة", url: "https://journals.lww.com/TDOJ/Pages/default.aspx" },
    { title: "المجلة العلمية لكلية طب الاسنان", url: "https://journals.lww.com/TDOJ/Pages/default.aspx" },
    { title: "المجلة العلمية لكلية تمريض", url: "https://nur.tanta.edu.eg/magazine.aspx" },
    { title: "المجلة العلمية لكلية هندسة", url: "https://erjeng.journals.ekb.eg/" },
    { title: "المجلة العلمية لكلية علوم", url: "https://erjeng.journals.ekb.eg/" },
    { title: "المجلة العلمية لكلية زراعة", url: "https://erjeng.journals.ekb.eg/" },
    { title: "المجلة العلمية لكلية حقوق", url: "https://las.journals.ekb.eg/" },
    { title: "المجلة العلمية لكلية تربية رياضية", url: "https://amps.journals.ekb.eg/" },
    { title: "المجلة العلمية لكلية تجارة", url: "https://com.tanta.edu.eg/journals.aspx" },
    { title: "المجلة العلمية لكلية تربية", url: "https://ijahr.journals.ekb.eg/" },
    { title: "المجلة العلمية لكلية الاداب", url: "https://jartf.journals.ekb.eg/" },
  ];

  return (
    <>
      {/* 🟦 العنوان الرئيسي */}
      <div className="header flex items-center mt-28 md:mt-36 lg:mx-32">
        <div className="flex items-center  mr-8 lg:mr-0">
          <img className="w-[50px]" src={img} alt="Logo" />
          <p className="text-sm font-bold text-[--main-color] pr-2"> المجلات العلمية بجامعة طنطا</p>
        </div>
        <div className="flex items-center flex-1 mr-16 ml-8 lg:ml-0">
          <i className="fa-solid fa-circle text-[--main-color] text-[7px]"></i>
          <hr className="flex-1 border border-[--hover-color]" />
        </div>
      </div>

      {/* 🟦 محتوى الصفحة */}
      <div className="w-full flex flex-col lg:grid grid-cols-3 gap-6 pt-2 px-8 xl:px-32 mb-6">
        <div className="shadow-md col-span-1 rounded-md flex items-center">
          <img src={img1} alt="research" className='w-full' />
        </div>

        {/* 🔹 روابط المجلات */}
        <div className="flex flex-col col-span-2">
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg w-full max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 text-right">
            {journals.map((journal, index) => (
              <div
                key={index}
                onClick={() => {
                  const newTab = window.open(journal.url, '_blank');
                  newTab?.focus();
                }}
                className="text-gray-800 hover:text-[--main-color] relative pr-5 transition-colors duration-200 cursor-pointer"
              >
                <span className="absolute right-0 text-[--main-color]">•</span>
                {journal.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
