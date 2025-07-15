import React, { useState } from 'react';
import style from './Style.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img4.png"
import img5 from "../../assets/img5.png"
import img6 from "../../assets/img6.png"
import img7 from "../../assets/img7.png"
import img8 from "../../assets/img8.png"
import img9 from "../../assets/img9.png"
import img10 from "../../assets/img10.png"
import img11 from "../../assets/img11.png"
import img12 from "../../assets/img12.png"

export default function Services() {

  const [activeCategory, setActiveCategory] = useState('Students');
  const [fade, setFade] = useState(false);

  const handleCategoryChange = (key) => {
    setFade(true); // تشغيل الترانزشن للخروج
  
    setTimeout(() => {
      setActiveCategory(key); // تغيير الكاتيجوري بعد الأنيميشن
      setFade(false); // تشغيل ترانزشن الدخول
    }, 300); // 300ms لازم تكون نفس مدة الترانزشن
  };
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    rtl: true
  };

  const services = {
    Students: [
      { Image: img1, title: 'منصة الكتاب الالكتروني' },
      { Image: img2, title: 'منصة التحصيل الالكتروني' },
      { Image: img3, title: 'التربية العسكرية' },
      { Image: img4, title: 'نتائج الامتحانات' },
      { Image: img5, title: 'الجداول الدراسية' },
      { Image: img6, title: 'جداول الامتحانات' },
      { Image: img7, title: 'أرقام الجلوس وأماكن اللجان' },
      { Image: img8, title: 'نماذج الكترونية واستمارات' },
      { Image: img9, title: 'البرامج العلمية المتخصصه' },
    ],
    Postgraduate: [
      { Image: img2, title: 'منصة التحصيل الالكتروني' },
      { Image: img8, title: "التسجيل في الدراسات العليا" },
      { Image: img4, title: 'تسجيل دورة التحول الرقمي' },
      { Image: img6, title: 'نتائج امتحانات الدراسات العليا' },
      { Image: img5, title: 'جداول دراسية' },
      { Image: img8, title: "نماذج امتحانات" },
      { Image: img5, title: 'جداول الامتحانات' },
    ],
    Faculty: [
      { Image: img10, title: "صفحات أعضاء هيئة التدريس" },
      { Image: img11, title: "الخدمات الطبية" },
      { Image: img6, title: "نظام الاخطار بالمستحقات" },
      { Image: img8, title: "التسجيل لدورة التحول الرقمي" },
      { Image: img8, title: "افادات الكترونية" },
      { Image: img2, title: "نظام التحصيل الالكتروني" },
    ],
    Staff: [
      { Image: img12, title: "بريد الاداريين" },
      { Image: img12, title: "الدخول للبريد الالكتروني" },
      { Image: img8, title: "افادات الكترونية للعاملين" },
      { Image: img11, title: "الرعاية الصحية الشاملة" },
    ]
  };

  return (
    <div className="w-screen flex flex-col lg:grid grid-cols-3 gap-6 px-8 pt-2 lg:pt-10 xl:px-32 section-2">
      
      {/* Slider */}
      <div className='border border-[--main-color] col-span-1 h-[50vh]'>
        <p className='bg-[--main-color] text-white p-4 font-bold'>أحدث الخدمات</p>
        <Slider {...settings} className='h-[50vh] service'>
          <div className='text-[--main-color] p-4 text-right '>
            <p className='p-4 text-sm'>خدمات الوافدين</p>
            <hr className='border-1 border-[--main-color] m-4 w-full' />
            <p className='text-left'>Tanta University welcomes the international students...</p>
            <button className='px-6 mt-20 mr-56 py-1 text-white bg-[--main-color] rounded-md hover:bg-white border border-[--main-color] hover:text-[--main-color]'>الدخول للخدمه</button>
          </div>
          <div className='text-[--main-color] p-4 text-right '>
            <p className='p-4 text-sm'>اليوبيل الذهبي</p>
            <hr className='border-1 border-[--main-color] m-4 w-full' />
            <p className='text-right'>تعد جامعة طنطا صرحاً علمياً شامخاً...</p>
            <button className='px-6 mt-20 mr-56 py-1 text-white bg-[--main-color] rounded-md hover:bg-white border border-[--main-color] hover:text-[--main-color]'>الدخول للخدمه</button>
          </div>
        </Slider>
      </div>

      {/* Content Area */}
      <div className="flex flex-col col-span-2">
        {/* Navbar */}
        <div className="h-[15vh] xl:h-[8vh] navbar flex flex-col lg:flex-row items-center justify-between">
          <p className="text-sm font-bold md:text-lg text-[--main-color] p-1 text-center">الخدمات</p>
          <div className="flex xl:gap-4 items-baseline">
            <ul className="flex flex-row-reverse gap-2">
              {[
                { name: "خدمات العاملين", key: "Staff" },
                { name: "خدمات أعضاء هيئة التدريس", key: "Faculty" },
                { name: "خدمات الدراسات العليا", key: "Postgraduate" },
                { name: "خدمات الطلاب", key: "Students" },
              ].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleCategoryChange(item.key)}
                    className={`px-2 lg:px-3 py-1 rounded-lg transition-all duration-500 relative text-xs md:text-sm font-medium text-[--main-color] ${style.draw} ${
                      activeCategory === item.key ? style.drawActive : ""
                    }`}                    
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <p className="py-1 px-4 text-xs md:text-sm text-white bg-[--main-color] rounded cursor-pointer hover:bg-white border border-[--main-color] hover:text-[--main-color]">
            قائمة الخدمات <span className='px-2 text-[--hover-color]'><i className="fa-solid fa-chevron-left"></i></span>
          </p>
        </div>

        {/* Cards Area */}
        <div className="h-[60vh] flex justify-center">
          <div className="h-[50vh] w-full p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-[--main-color]">
              {services[activeCategory].map((service, index) => (
                <div
                key={index}
                className={`p-5 flex flex-col justify-between border border-[--main-color] relative ${style.student} overflow-hidden rounded-xl
                  ${style.cardTransition} ${style.cardTransition} ${(fade === false) ? style.cardTransitionActive : ''}
                `}>
                  <img className="px-8 py-2 mb-5" src={service.Image} alt="" />
                  <p className="absolute bottom-0 left-0 right-0 text-center text-[0.7rem] text-white bg-[--main-color] py-2">
                    {service.title}
                  </p>
                  <div className={`cursor-pointer bg-[--main-color] absolute inset-0 translate-y-40 ${style.layer} flex justify-center items-center`}>
                    <p className={`${style.button} text-center text-[0.7rem] text-[--main-color] bg-white py-2 px-3 rounded-xl`}>
                      {service.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
