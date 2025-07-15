import React from "react";
import Slider from "react-slick";
import { NavLink, Outlet } from "react-router-dom";
import style from "../Excellence/Excellence.module.css";
// import img from "../../assets/image.png";
import img1 from "../../assets/star.png";
import mg1 from "../../assets/mg1.png";
import mg2 from "../../assets/mg2.png";
import mg3 from "../../assets/mg3.jpg";
import mg4 from "../../assets/mg4.png";
import mg5 from "../../assets/mg5.jpeg";
import mg6 from "../../assets/mg6.webp";

export default function Excellence() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    rtl: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 768, // لو الشاشة أصغر من 768px
            settings: {
                
                slidesToShow: 2, // يعرض صورتين بدل 3
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480, // لو الشاشة أصغر من 480px
            settings: {
                slidesToShow: 1, // يعرض صورة واحدة فقط
                slidesToScroll: 1,
            }
        }
    ]
  };

  let data = [
    {img:mg1 , title: "مستشفي57357"},
    {img:mg2 , title: "الجمهورية الجديدة"},
    {img:mg3 , title: "وحدة الروبوتات"},
    {img:mg4 , title: "منصة دالتا للحاسبات"},
    {img:mg5 , title: "مستشفي 900900"},
    {img:mg6 , title: "جامعتنا في 2020"},
  ]
  

  return (
    <>
      <div className="w-full pt-4">
        {/* ✅ الهيدر */}
        <div className="header flex items-center px-8 xl:px-32 ">
          <div className="flex items-center gap-2">
            <img className="w-[50px]" src={img1} alt="شعار" />
            <p className="text-lg font-bold text-[--main-color]">تميزنا</p>
          </div>
        </div>

        {/* ✅ القسم الأساسي */}
        <div className="w-full flex flex-col lg:grid grid-cols-3 gap-6 pt-6  px-8 xl:px-32">
          {/* 🔹 النص التعريفي */}
          <div className="shadow-md col-span-1 h-[50vh] bg-gradient-to-r from-[#177899] via-[#12939B] to-[#0CAF9E] rounded-md flex items-center">
            <p className="text-white p-6 leading-relaxed text-sm md:text-base">
              حرصت جامعة طنطا على مواكبة استراتيجية الدولة وتحقيق رؤية مصر
              2030 في جميع المجالات، ففي مجال التحول الرقمي حرصت جامعة طنطا على
              أن تكون في مصاف جامعات "الجيل الرابع الذكية" من خلال تحديث تقنيات
              التعليم وإدارة الجامعة باستخدام التقنيات الحديثة والذكية، كما
              انطلقت الجامعة في تقديم خدماتها للمجتمع الخارجي من خلال إنشاء
              المراكز والوحدات والمستشفيات، وكذلك المشاركة في المبادرات
              الرئاسية الداعمة للمجتمع.
            </p>
          </div>

          {/* 🔹 السلايدر والمحتوى */}
          <div className="flex flex-col col-span-2">
            {/* ✅ السلايدر */}
            <div className="h-[60vh] flex justify-center overflow-hidden min-w-0">
                <Slider {...settings} className="w-full max-w-3xl xl:mt-10 ">
                    {data.map((item, index) => (
                    <div key={index} className="relative overflow-hidden group px-2 cursor-pointer shadows">
                        <div className="relative w-full h-full overflow-hidden rounded-lg"> {/* إضافة overflow-hidden هنا */}
                        {/* 🔹 الصورة مع تأثير الزوم */}
                        <img
                            className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
                            src={item.img}
                            alt="خبر الجامعة"
                        />
                        {/* 🔹 الجردينت الأسود فوق الصورة فقط */}
                        <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-70"></div>

                        {/* 🔹 النص فوق الصورة */}
                        <p className="relative text-white text-center font-semibold px-3 py-2 rounded-md text-sm w-full">
                            <span className="absolute inset-0 bg-[--main-color] opacity-60 rounded-md"></span>
                            <span className="relative">{item.title}</span>
                        </p>

                    </div>
                    </div>
                    ))}
                </Slider>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
