import React, { useState, useRef, useEffect } from "react";
import img from "../../assets/logo.png";
import { useTranslation } from "react-i18next";
import style from "../Navbar/Navbar.module.css";
import { Link, NavLink } from "react-router-dom";


export default function Navbar() {
  const { t } = useTranslation();

  // 🔹 حالات القوائم
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
  const [isDropdownOpen5, setIsDropdownOpen5] = useState(false);
  const [isDropdownOpen6, setIsDropdownOpen6] = useState(false);
  const [isDropdownOpen7, setIsDropdownOpen7] = useState(false); 
  const [isDropdownOpen8, setIsDropdownOpen8] = useState(false); 
  const [isDropdownOpen9, setIsDropdownOpen9] = useState(false); 
  const [isDropdownOpen10, setIsDropdownOpen10] = useState(false); 
  
  const [isDropdownOpen11, setIsDropdownOpen11] = useState(false); 
  const [isDropdownOpen12, setIsDropdownOpen12] = useState(false); 
  const [isDropdownOpen13, setIsDropdownOpen13] = useState(false); 
  const [isDropdownOpen14, setIsDropdownOpen14] = useState(false); 

  const [isMenuOpen , setIsMenuOpen] = useState(false)

  // 🔹 مراجع العناصر
  const dropdownRef1 = useRef(null);
  const buttonRef1 = useRef(null);
  const dropdownRef2 = useRef(null);
  const buttonRef2 = useRef(null);
  const dropdownRef3 = useRef(null);
  const buttonRef3 = useRef(null);
  const dropdownRef4 = useRef(null);
  const buttonRef4 = useRef(null);
  const dropdownRef5 = useRef(null);
  const buttonRef5 = useRef(null);
  const dropdownRef6 = useRef(null);
  const buttonRef6 = useRef(null);
  const dropdownRef7 = useRef(null);
  const buttonRef7 = useRef(null);
  const dropdownRef8 = useRef(null);
  const buttonRef8 = useRef(null);
  const dropdownRef9 = useRef(null);
  const buttonRef9 = useRef(null);
  const dropdownRef10 = useRef(null);
  const buttonRef10 = useRef(null);
  
  const dropdownRef11 = useRef(null);
  const buttonRef11 = useRef(null);
  const dropdownRef12 = useRef(null);
  const buttonRef12 = useRef(null);
  const dropdownRef13 = useRef(null);
  const buttonRef13 = useRef(null);
  const dropdownRef14 = useRef(null);
  const buttonRef14 = useRef(null);

  // 🟢 دالة إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef1.current &&
        !dropdownRef1.current.contains(event.target) &&
        buttonRef1.current &&
        !buttonRef1.current.contains(event.target)
      ) {
        setIsDropdownOpen1(false);
      }
      if (
        dropdownRef2.current &&
        !dropdownRef2.current.contains(event.target) &&
        buttonRef2.current &&
        !buttonRef2.current.contains(event.target)
      ) {
        setIsDropdownOpen2(false);
      }
      if (
        dropdownRef3.current &&
        !dropdownRef3.current.contains(event.target) &&
        buttonRef3.current &&
        !buttonRef3.current.contains(event.target)
      ) {
        setIsDropdownOpen3(false);
      }
      if (
        dropdownRef4.current &&
        !dropdownRef4.current.contains(event.target) &&
        buttonRef4.current &&
        !buttonRef4.current.contains(event.target)
      ) {
        setIsDropdownOpen4(false);
      }
      if (
        dropdownRef5.current &&
        !dropdownRef5.current.contains(event.target) &&
        buttonRef5.current &&
        !buttonRef5.current.contains(event.target)
      ) {
        setIsDropdownOpen5(false);
      }
      if (
        dropdownRef6.current &&
        !dropdownRef6.current.contains(event.target) &&
        buttonRef6.current &&
        !buttonRef6.current.contains(event.target)
      ) {
        setIsDropdownOpen6(false);
      }
      if (
        dropdownRef7.current &&
        !dropdownRef7.current.contains(event.target) &&
        buttonRef7.current &&
        !buttonRef7.current.contains(event.target)
      ) {
        setIsDropdownOpen7(false);
      }
      if (
        dropdownRef8.current &&
        !dropdownRef8.current.contains(event.target) &&
        buttonRef8.current &&
        !buttonRef8.current.contains(event.target)
      ) {
        setIsDropdownOpen8(false);
      }
      if (
        dropdownRef9.current &&
        !dropdownRef9.current.contains(event.target) &&
        buttonRef9.current &&
        !buttonRef9.current.contains(event.target)
      ) {
        setIsDropdownOpen9(false);
      }
      if (
        dropdownRef10.current &&
        !dropdownRef10.current.contains(event.target) &&
        buttonRef10.current &&
        !buttonRef10.current.contains(event.target)
      ) {
        setIsDropdownOpen10(false);
      }
      
      
      if (
        dropdownRef11.current &&
        !dropdownRef11.current.contains(event.target) &&
        buttonRef11.current &&
        !buttonRef11.current.contains(event.target)
      ) {
        setIsDropdownOpen11(false);
      }
      if (
        dropdownRef12.current &&
        !dropdownRef12.current.contains(event.target) &&
        buttonRef12.current &&
        !buttonRef12.current.contains(event.target)
      ) {
        setIsDropdownOpen12(false);
      }
      if (
        dropdownRef13.current &&
        !dropdownRef13.current.contains(event.target) &&
        buttonRef13.current &&
        !buttonRef13.current.contains(event.target)
      ) {
        setIsDropdownOpen13(false);
      }
      if (
        dropdownRef14.current &&
        !dropdownRef14.current.contains(event.target) &&
        buttonRef14.current &&
        !buttonRef14.current.contains(event.target)
      ) {
        setIsDropdownOpen14(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  // 🟡 احذف useEffect الخاص بالـ Scroll وخلي الحالة ثابتة كده
  const [bgColor, setBgColor] = useState("bg-white");
  const [textColor , setTextColor] = useState("text-[--main-color]");

  const closeAllMenus = () => {
  setIsMenuOpen(false);
  setIsDropdownOpen1(false);
  setIsDropdownOpen2(false);
  setIsDropdownOpen3(false);
  setIsDropdownOpen4(false);
  setIsDropdownOpen5(false);
  setIsDropdownOpen6(false);
  setIsDropdownOpen7(false);
  setIsDropdownOpen8(false);
  setIsDropdownOpen9(false);
  setIsDropdownOpen10(false);
  setIsDropdownOpen11(false);
  setIsDropdownOpen12(false);
  setIsDropdownOpen13(false);
  setIsDropdownOpen14(false);
  };


  // useEffect(() => {
  //   let scrollCount = 0;
  //   let lastScrollTop = 0;

  //   const handleScroll = () => {
  //     const currentScroll = window.scrollY;

  //     if (currentScroll > lastScrollTop) {
  //       scrollCount++;
  //     } else {
  //       scrollCount = Math.max(0, scrollCount - 1);
  //     }

  //     lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

  //     if (scrollCount >= 3) {
  //       setBgColor("bg-white shadow-md");
  //       setTextColor("text-[--main-color]")
  //     } else {
  //       setBgColor("bg-transparent");
  //       setTextColor("text-white")
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <nav className={`${bgColor} fixed w-screen top-0 left-0 right-0 z-50 transition-colors duration-300`}>
      <div className=" py-3  max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <NavLink to={''} className="flex items-center rtl:space-x-reverse">
          <div className="flex justify-center items-center">
            <img src={img} className="h-14 px-2" alt="Flowbite Logo" />
          </div>
          <div className="flex flex-col">
            <span className={`text-base font-medium whitespace-nowrap ${textColor}`}>{t("جامعة طنطا")}</span>
            <span className={`text-base font-medium whitespace-nowrap ${textColor}`}>{t("Tanta University")}</span>
          </div>
         
        </NavLink>

        <button
          className="mx-4 lg:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        <ul className={`lg:flex lg:items-center  transition-all duration-300 ease-in-out
          ${isMenuOpen ? "flex flex-col justify-center items-center  absolute top-full left-0 w-full bg-white shadow-md p-4 " : "hidden lg:flex"}`}> 
            
            {/* القائمة الأولى */}
            <div className="relative">
              <button
                  ref={buttonRef1}
                  onClick={() => setIsDropdownOpen1(!isDropdownOpen1)}
                  className={`${textColor} font-medium text-base flex items-center justify-between py-2 px-3 text-[--main-color] rounded-sm `}>
                  {t("عن الجامعة")}   
                  <svg className="w-2 h-2 mx-2 rotate-90 rtl:rotate-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                  </svg>
              </button>

              <div
                  ref={dropdownRef1}
                  className={`${style.dropdownMenu} ${isDropdownOpen1 ? style.show : ""} `}>
                  <ul className="text-xs font-medium">
                    <li onClick={closeAllMenus}><Link to={'vision'}>{t("الرؤية")}</Link></li>
                    <li onClick={closeAllMenus}><Link to={'mission'}>{t("الرسالة")}</Link></li>
                    <li onClick={closeAllMenus}><Link to={'goals'}>{t("الأهداف")}</Link></li>
                    <li onClick={closeAllMenus}><Link to={'quality'}>{t("سياسة الجودة")}</Link></li>
                    <li onClick={closeAllMenus}><a href="https://tanta.edu.eg/files/Strategic-Plan2021-2025.pdf" target="_blank">{t("الخطة الاستراتيجية")}</a></li>
                  </ul>
              </div>
            </div>
            
            {/* القائمة الثانية */}
            <div className="relative">
              <button
                  ref={buttonRef2}
                  onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
                  className={`${textColor} font-medium text-base flex items-center justify-between py-2 px-3 text-[--main-color] rounded-sm`}>
                  {t("الكليات")}   
                  <svg className="w-2 h-2 mx-2 rotate-90 rtl:rotate-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                  </svg>
              </button>

              <div
                  ref={dropdownRef2}
                  className={`${style.dropdownMenu} ${isDropdownOpen2 ? style.show : ""} `}>
                  <ul className="text-xs font-medium">
                    <li>
                      <button
                        ref={buttonRef7}
                        onClick={() => setIsDropdownOpen7(!isDropdownOpen7)}
                        className="w-full font-medium text-sm flex items-center justify-between text-white rounded-sm">
                        <span className="ml-auto">{t("الكليات الطبية")}</span>   
                        <svg className={`${style.arrow} w-2 h-2 rotate-90 `} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                        </svg>
                      </button>
                      <div
                        ref={dropdownRef7}
                        onMouseEnter={() => setIsDropdownOpen7(true)}
                        onMouseLeave={() => setIsDropdownOpen7(false)}
                        className={`z-50 ${style.subdropdownMenu} ${style.dropdownMenu} ${isDropdownOpen7 ? style.show : ""} `}>
                        <ul  className={`text-xs font-medium ${style.mylist}`}>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://med.tanta.edu.eg/">{t("كلية الطب")}</a></li>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://pha.tanta.edu.eg/">{t("كلية الصيدلة")}</a></li>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://dent.tanta.edu.eg/">{t("كلية طب الأسنان")}</a></li>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://nur.tanta.edu.eg/">{t("كلية التمريض")}</a></li>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://tin.tanta.edu.eg/">{t("المعهد الفني للتمريض")}</a></li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <button
                        ref={buttonRef8}
                        onClick={() => setIsDropdownOpen8(!isDropdownOpen8)}
                        className="w-full font-medium text-sm flex items-center justify-between text-white rounded-sm">
                        <span className="ml-auto">{t("الكليات العلمية")}</span>   
                        <svg className={`${style.arrow} w-2 h-2 rotate-90 `} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                        </svg>
                      </button>
                      <div
                        ref={dropdownRef8}
                        onMouseEnter={() => setIsDropdownOpen8(true)}
                        onMouseLeave={() => setIsDropdownOpen8(false)}
                        className={`z-50 ${style.subdropdownMenu} ${style.dropdownMenu} ${isDropdownOpen8 ? style.show : ""} `}>
                        <ul  className={`text-xs font-medium ${style.mylist}`}>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://sci.tanta.edu.eg/">{t("كلية العلوم")}</a></li>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://eng.tanta.edu.eg/">{t("كلية الهندسة")}</a></li>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://agr.tanta.edu.eg/">{t("كلية طب الزراعة")}</a></li>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://ci.tanta.edu.eg/">{t("كلية الحاسبات والمعلومات")}</a></li>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://app-arts.tanta.edu.eg/">{t("المعهد الفنون التطبيقية")}</a></li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <button
                        ref={buttonRef9}
                        onClick={() => setIsDropdownOpen9(!isDropdownOpen9)}
                        className="w-full font-medium text-sm flex items-center justify-between text-white rounded-sm">
                        <span className="ml-auto">{t("الكليات التربوية")}</span>   
                        <svg className={`${style.arrow} w-2 h-2 rotate-90 `} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                        </svg>
                      </button>
                      <div
                        ref={dropdownRef9}
                        onMouseEnter={() => setIsDropdownOpen9(true)}
                        onMouseLeave={() => setIsDropdownOpen9(false)}
                        className={`z-50 ${style.lastfinal} ${style.subdropdownMenu} ${style.dropdownMenu} ${isDropdownOpen9 ? style.show : ""} `}>
                        <ul  className={`text-xs font-medium ${style.mylist}`}>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://edu.tanta.edu.eg/">{t("كلية التربية")}</a></li>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://phy.tanta.edu.eg/">{t("كلية التربية الرياضية")}</a></li>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://spe.tanta.edu.eg/">{t("كلية التربية النوعية")}</a></li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <button
                        ref={buttonRef10}
                        onClick={() => setIsDropdownOpen10(!isDropdownOpen10)}
                        className="w-full font-medium text-sm flex items-center justify-between text-white rounded-sm">
                        <span className="ml-auto text-xs">{t("الكليات الادارية والانسانية")}</span>   
                        <svg className={`${style.arrow} w-2 h-2 rotate-90 `} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                        </svg>
                      </button>
                      <div
                        ref={dropdownRef10}
                        onMouseEnter={() => setIsDropdownOpen10(true)}
                        onMouseLeave={() => setIsDropdownOpen10(false)}
                        className={`z-50 ${style.final} ${style.subdropdownMenu} ${style.dropdownMenu} ${isDropdownOpen10 ? style.show : ""} `}>
                        <ul  className={`text-xs font-medium ${style.mylist}`}>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://com.tanta.edu.eg/">{t("كلية التجارة")}</a></li>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://art.tanta.edu.eg/">{t("كليةالاداب")}</a></li>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://law.tanta.edu.eg/">{t("كلية الحقوق")}</a></li>
                        </ul>
                      </div>
                    </li>
                  </ul>
              </div>
            </div>

            {/* القائمة الثالثه */}
            {/* <div className="relative">
              <button
                  ref={buttonRef3}
                  onClick={() => setIsDropdownOpen3(!isDropdownOpen3)}
                  className={`${textColor} font-medium text-base flex items-center justify-between py-2 px-3 text-[--main-color] rounded-sm`}>
                  {t("الخدمات")}   
                  <svg className="w-2 h-2 mx-2 rotate-90 rtl:rotate-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                  </svg>
              </button>

              <div
                  ref={dropdownRef3}
                  className={`${style.dropdownMenu} ${isDropdownOpen3 ? style.show : ""} `}>
                  <ul className="text-xs font-medium">
                  <li><a href="#">{t("خدمات الطلاب")}</a></li>
                  <li><a href="#">{t("خدمات الوافدين")}</a></li>
                  <li><a href="#">{t("خدمات الدراسات العليا")}</a></li>
                  <li><a href="#">{t("خدمات أعضاء هيئة التدريس")}</a></li>
                  <li><a href="#">{t("خدمات العاملين")}</a></li>
                  </ul>
              </div>
            </div> */}

            {/* القائمة التالتة */}
            <div className="relative">
              <button
                  ref={buttonRef4}
                  onClick={() => setIsDropdownOpen4(!isDropdownOpen4)}
                  className={`${textColor} font-medium text-base flex items-center justify-between py-2 px-3 text-[--main-color] rounded-sm`}>
                  {t("البحث العلمي")}   
                  <svg className="w-2 h-2 mx-2 rotate-90 rtl:rotate-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                  </svg>
              </button>

              <div
                  ref={dropdownRef4}
                  className={`${style.dropdownMenu} ${isDropdownOpen4 ? style.show : ""} `}>
                  <ul className="text-xs font-medium">
                    <li onClick={closeAllMenus}><NavLink to={`/ResearchProjects`}>{t("المراكز البحثيه")}</NavLink></li>
                    <li onClick={closeAllMenus}><NavLink to={`/ScientificJournals`}>{t("المجلات العلمية")}</NavLink></li>
                    <li onClick={closeAllMenus}><NavLink to={`/ScientificConferences`} target="_blank">{t("المؤتمرات العلمية")}</NavLink></li>
                    <li onClick={closeAllMenus}><NavLink to={`ResearchCenters`}>{t("المشروعات البحثيه")}</NavLink></li>
                    <li onClick={closeAllMenus}><a href="https://tuscholar.tanta.edu.eg/" target="_blank">{t("الأبحاث العلمية")}</a></li>
                  </ul>
              </div>
            </div>
            
            {/* القائمة الرابعة */}
            <div className="relative">
              <button
                  ref={buttonRef5}
                  onClick={() => setIsDropdownOpen5(!isDropdownOpen5)}
                  className={`${textColor} font-medium text-base flex items-center justify-between py-2 px-3 text-[--main-color] rounded-sm`}>
                  {t("البرامج العلمية المتخصصة")}   
                  <svg className="w-2 h-2 mx-2 rotate-90 rtl:rotate-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                  </svg>
              </button>

              <div
                  ref={dropdownRef5}
                  className={`${style.dropdownMenu} ${isDropdownOpen5 ? style.show : ""} `}>
                  <ul className="text-xs font-medium">
                    <li>
                      <button
                        ref={buttonRef11}
                        onClick={() => setIsDropdownOpen11(!isDropdownOpen11)}
                        className="w-full font-medium text-sm flex items-center justify-between text-white rounded-sm">
                        <span className="ml-auto">{t("الكليات الطبية")}</span>   
                        <svg className={`${style.arrow} w-2 h-2 rotate-90 `} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                        </svg>
                      </button>
                      <div
                        ref={dropdownRef11}
                        onMouseEnter={() => setIsDropdownOpen11(true)}
                        onMouseLeave={() => setIsDropdownOpen11(false)}
                        className={`z-50 ${style.subdropdownMenu} ${style.dropdownMenu} ${isDropdownOpen11 ? style.show : ""} `}>
                        <ul  className={`text-xs font-medium ${style.mylist}`}>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://med.tanta.edu.eg/newprog.aspx">{t("كلية الطب")}</a></li>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://pha.tanta.edu.eg/newprog.aspx/">{t("كلية الصيدلة")}</a></li>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://dent.tanta.edu.eg/newprog.aspx">{t("كلية طب الأسنان")}</a></li>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://nur.tanta.edu.eg/newprog.aspx">{t("كلية التمريض")}</a></li>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://tin.tanta.edu.eg/newprog.aspx">{t("المعهد الفني للتمريض")}</a></li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <button
                        ref={buttonRef12}
                        onClick={() => setIsDropdownOpen12(!isDropdownOpen12)}
                        className="w-full font-medium text-sm flex items-center justify-between text-white rounded-sm">
                        <span className="ml-auto">{t("الكليات العلمية")}</span>   
                        <svg className={`${style.arrow} w-2 h-2 rotate-90 `} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                        </svg>
                      </button>
                      <div
                        ref={dropdownRef12}
                        onMouseEnter={() => setIsDropdownOpen12(true)}
                        onMouseLeave={() => setIsDropdownOpen12(false)}
                        className={`z-50 ${style.subdropdownMenu} ${style.dropdownMenu} ${isDropdownOpen12 ? style.show : ""} `}>
                        <ul  className={`text-xs font-medium ${style.mylist}`}>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://tin.tanta.edu.eg/newprog.aspx">{t("كلية العلوم")}</a></li>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://eng.tanta.edu.eg/newprog.aspx">{t("كلية الهندسة")}</a></li>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://agr.tanta.edu.eg/">{t("كلية طب الزراعة")}</a></li>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://ci.tanta.edu.eg/">{t("كلية الحاسبات والمعلومات")}</a></li>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://app-arts.tanta.edu.eg/">{t("المعهد الفنون التطبيقية")}</a></li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <button
                        ref={buttonRef13}
                        onClick={() => setIsDropdownOpen13(!isDropdownOpen13)}
                        className="w-full font-medium text-sm flex items-center justify-between text-white rounded-sm">
                        <span className="ml-auto">{t("الكليات التربوية")}</span>   
                        <svg className={`${style.arrow} w-2 h-2 rotate-90 `} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                        </svg>
                      </button>
                      <div
                        ref={dropdownRef13}
                        onMouseEnter={() => setIsDropdownOpen13(true)}
                        onMouseLeave={() => setIsDropdownOpen13(false)}
                        className={`z-50 ${style.lastfinal} ${style.subdropdownMenu} ${style.dropdownMenu} ${isDropdownOpen13 ? style.show : ""} `}>
                        <ul  className={`text-xs font-medium ${style.mylist}`}>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://prog.tanta.edu.eg/ar/prog/eng_edu">{t("كلية التربية")}</a></li>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://phy.tanta.edu.eg/">{t("كلية التربية الرياضية")}</a></li>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://spe.tanta.edu.eg/">{t("كلية التربية النوعية")}</a></li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <button
                        ref={buttonRef14}
                        onClick={() => setIsDropdownOpen14(!isDropdownOpen14)}
                        className="w-full font-medium text-sm flex items-center justify-between text-white rounded-sm">
                        <span className="ml-auto text-xs">{t("الكليات الادارية والانسانية")}</span>   
                        <svg className={`${style.arrow} w-2 h-2 rotate-90 `} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                        </svg>
                      </button>
                      <div
                        ref={dropdownRef14}
                        onMouseEnter={() => setIsDropdownOpen14(true)}
                        onMouseLeave={() => setIsDropdownOpen14(false)}
                        className={`z-50 ${style.final} ${style.subdropdownMenu} ${style.dropdownMenu} ${isDropdownOpen14 ? style.show : ""} `}>
                        <ul  className={`text-xs font-medium ${style.mylist}`}>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://com.tanta.edu.eg/newprog.aspx">{t("كلية التجارة")}</a></li>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://art.tanta.edu.eg/newprog.aspx">{t("كليةالاداب")}</a></li>
                          <li onClick={closeAllMenus}><a target="_blank" href="https://law.tanta.edu.eg/newprog.aspx">{t("كلية الحقوق")}</a></li>
                        </ul>
                      </div>
                    </li>
                  </ul>
              </div>
            </div>

            {/* القائمة الخامسة */}
            <div className="relative">
              <button
                  ref={buttonRef6}
                  onClick={() => setIsDropdownOpen6(!isDropdownOpen6)}
                  className={`${textColor} font-medium text-base flex items-center justify-between py-2 px-3 text-[--main-color] rounded-sm`}>
                  {t("اتصل بنا")}   
                  <svg className="w-2 h-2 mx-2 rotate-90 rtl:rotate-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                  </svg>
              </button>

              <div
                  ref={dropdownRef6}
                  className={`${style.dropdownMenu} ${isDropdownOpen6 ? style.show : ""} `}>
                  <ul className="text-xs font-medium">
                    <li onClick={closeAllMenus}><NavLink to={`/Contact`}>{t("تواصل معنا")}</NavLink></li>
                    <li onClick={closeAllMenus}><NavLink to={`Location`}>{t("الموقع الجغرافي")}</NavLink></li>
                    {/* <li><NavLink to={`/SocialMedia`}>{t("وسائل التواصل الاجتماعي")}</NavLink></li> */}
                  </ul>
              </div>
            </div>

            {/* user */}
              <NavLink to={'user'}>
                <div className="relative md:mr-10 cursor-pointer py-2 px-3">
                  <i className={`fa-regular fa-user ${textColor} text-xl hover:text-[--main-color]`} />
                </div>
              </NavLink>
        </ul>
       
      </div>
    </nav>
  );
}
