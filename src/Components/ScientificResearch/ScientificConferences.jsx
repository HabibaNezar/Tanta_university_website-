import React, { useState } from 'react';
import img from '../../assets/atom.png'; // شعار القسم
import img0 from '../../assets/11.png'; // شعار مؤتمر 2025
import img1 from '../../assets/22.jpg';
import img2 from '../../assets/33.jpg';
import img3 from '../../assets/44.jpeg';
import img4 from '../../assets/55.jpg';
import img5 from '../../assets/66.png';

export default function ScientificConferences() {
  const [selectedCollege, setSelectedCollege] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  return (
    <>
      {/* 🟦 العنوان الرئيسي */}
      <div className="header flex items-center mt-36 lg:mx-32 ml-4">
        <div className="flex items-center mr-8 lg:mr-0">
          <img className="w-[50px]" src={img} alt="Logo" />
          <p className="text-sm font-bold text-[--main-color] pr-2">مؤتمرات الجامعة</p>
        </div>
        <div className="flex items-center flex-1 mr-16 0">
          <i className="fa-solid fa-circle text-[--main-color] text-[7px]"></i>
          <hr className="flex-1 border border-[--hover-color]" />
        </div>
        <div>
          <a href='https://tanta.edu.eg/conferences-old.aspx' target='_blank' className="text-xs font-medium rounded-md px-4 py-1 bg-[--main-color] text-white hover:bg-white hover:text-[--main-color] border border-[--main-color] cursor-pointer">
            أرشيف المؤتمرات
            <span className='px-2 text-[--hover-color]'><i className="fa-solid fa-chevron-left"></i></span>
          </a>
        </div>
      </div>

    
        {/* 🟦 Page Content */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        {/* 🔹 Conferences Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 space-y-8">
            {/* 2025 Conferences */}
            <section className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 border-gray-100">
                مؤتمرات عام 2025
            </h2>
            <div className="grid gap-6">
                <ConferenceItem
                title='المؤتمر العلمي الدولي التاسع لكلية التجارة "التغيرات الجيوسياسية وأثرها على بيئة الأعمال (التهديدات والفرص)"'
                link="#"
                date='5 مايو 2025'
                location='فندق تريومف – التجمع الخامس - القاهرة'
                image={img0}
                />
            </div>
            </section>

            {/* 2024 Conferences */}
            <section className="space-y-6">
                <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 border-gray-100">
                    مؤتمرات عام 2024
                </h2>
                <div className="grid gap-6">
                    <ConferenceItem
                    title='مؤتمر الدراسات العليا حول "حوكمة مخرجات أبحاث العلوم الأساسية والتطبيقية الداعمة لأهداف التنمية المستدامة"'
                    link="#"
                    date='18 سبتمبر 2024'
                    location='كلية العلوم – جامعة طنطا'
                    image={img1}
                    />
                    <ConferenceItem
                    title="المؤتمر العلمي الثامن لكلية التجارة الابتكارات في الأعمال وتحديات التنمية المستدامة"
                    link="#"
                    date="24 إبريل 2024"
                    location="فندق تريومف – التجمع الخامس – القاهرة"
                    image={img2}
                    />
                    <ConferenceItem
                    title='المؤتمر الدولي الثالث لكلية الآداب "مستقبل العلوم الإنسانية في ظل الجمهورية الجديدة"'
                    link="#"
                    date="7-5 مارس 2024"
                    location="مدينة شرم الشيخ"
                    image={img3}
                    />
                    <ConferenceItem
                    title="المؤتمر الدولي الثاني عشر والافتراضي الخامس لكلية التمريض"
                    link="#"
                    date="3-4 مارس 2024"
                    location="قاعة المؤتمرات بمجمع الكليات الطبية"
                    image={img4}
                    />
                    <ConferenceItem
                    title="المؤتمر الدولي الأول لشعبي الهندسة المعمارية والتخطيط العمراني لكلية الهندسة"
                    link="#"
                    date="2-4 مارس 2024"
                    location="مدينة شرم الشيخ"
                    image={img5}
                    />
                </div>
            </section>
        </div>
        </div>
    </>
  );
}

// 🔹 مكون عرض مؤتمر مفرد
function ConferenceItem({ title, date, location, image, link }) {
  return (
    <div className="flex items-start gap-4">
      <img src={image} alt="صورة المؤتمر" className="w-28 h-20 object-contain rounded-md" />
      <div>
        <a
          href={link}
          className="font-bold text-[--main-color] hover:text-[--hover-color] transition-colors duration-200"
        >
          {title}
        </a>
        <p className="text-sm text-[--hover-color] mt-1">تاريخ الانعقاد: <strong className='text-gray-400 font-normal'>{date}</strong></p>
        <p className="text-sm text-[--hover-color]">مكان الانعقاد: <strong className='text-gray-400 font-normal'>{location}</strong></p>
      </div>
    </div>
  );
}
