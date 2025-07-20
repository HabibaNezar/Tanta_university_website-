import React, { useState } from 'react';
import style from './Style.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export default function ServicesList() {
  const [activeCategory, setActiveCategory] = useState('Students');
  const [fade, setFade] = useState(false);

  const handleCategoryChange = (key) => {
    setFade(true);
    setTimeout(() => {
      setActiveCategory(key);
      setFade(false);
    }, 300);
  };

  const services = {
    Students: [
      { Image: img1, title: 'منصة الكتاب الالكتروني', link:'https://tanta.edu.eg/stu/elc_book.aspx' },
      { Image: img2, title: 'منصة التحصيل الالكتروني', link:'http://tdb2.tanta.edu.eg/paymentgateway/e_payment/' },
      { Image: img3, title: 'التربية العسكرية', link:'http://militaryedu.tanta.edu.eg/' },
      { Image: img4, title: 'نتائج الامتحانات', link:'https://tanta.edu.eg/stu/stu-exams-results.aspx' },
      { Image: img5, title: 'الجداول الدراسية', link:'https://tanta.edu.eg/stu/stu_study_tables.aspx' },
      { Image: img6, title: 'جداول الامتحانات', link:'https://tanta.edu.eg/stu/stu-exam-tables.aspx' },
      { Image: img7, title: 'أرقام الجلوس وأماكن اللجان', link:'https://tanta.edu.eg/stu/stu-sitting-num.aspx' },
      { Image: img8, title: 'نماذج الكترونية واستمارات', link:'https://tanta.edu.eg/stu/FORMS-student.aspx' },
      { Image: img9, title: 'البرامج العلمية المتخصصه', link:'https://tanta.edu.eg/Default.aspx#Specialized-Programs' },
    ],
    Postgraduate: [
      { Image: img2, title: 'منصة التحصيل الالكتروني', link:'http://tdb2.tanta.edu.eg/paymentgateway/e_payment/' },
      { Image: img8, title: "التسجيل في الدراسات العليا", link:'http://tdb.tanta.edu.eg/pg_stud_registration/' },
      { Image: img4, title: 'تسجيل دورة التحول الرقمي', link:'http://forms.tanta.edu.eg/poststudentsdigitaltransformation' },
      { Image: img6, title: 'نتائج امتحانات الدراسات العليا', link:'' },
      { Image: img5, title: 'جداول دراسية', link:'https://tanta.edu.eg/post/post_study_tables.aspx' },
      { Image: img8, title: "نماذج امتحانات", link:'https://tanta.edu.eg/post/post-exam-forms.aspx' },
      { Image: img5, title: 'جداول الامتحانات', link:'https://tanta.edu.eg/post/post-exam-tables.aspx' },
    ],
    Faculty: [
      { Image: img10, title: "صفحات أعضاء هيئة التدريس", link:'http://tdb2.tanta.edu.eg/staff/' },
      { Image: img11, title: "الخدمات الطبية", link:'http://tdb2.tanta.edu.eg/medicalservices/' },
      { Image: img6, title: "نظام الاخطار بالمستحقات", link:'https://tdb.tanta.edu.eg/epay_alert/' },
      { Image: img8, title: "التسجيل لدورة التحول الرقمي", link:'http://forms.tanta.edu.eg/staffdigitaltransformation' },
      { Image: img8, title: "افادات الكترونية", link:'http://tdb.tanta.edu.eg/staff_data/Default_ar.aspx' },
      { Image: img2, title: "نظام التحصيل الالكتروني", link:'http://tdb2.tanta.edu.eg/paymentgateway/e_payment/' },
    ],
    Staff: [
      { Image: img12, title: "بريد الاداريين", link:'http://tdb.tanta.edu.eg/live_services/emp_mail_search.aspx' },
      { Image: img12, title: "الدخول للبريد الالكتروني", link:'https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000002-0000-0ff1-ce00-000000000000&redirect_uri=https%3a%2f%2foutlook.office.com%2fowa%2f&resource=00000002-0000-0ff1-ce00-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid&msafed=0&client-request-id=e04db3f0-769e-46f5-ae0b-0157df0b90e4&protectedtoken=true&nonce=636732040390921433.5c974b7e-ead5-4901-8c10-42c0d8d566e7&state=DcvBDYAgDEBR0CGcAim0UDkYd3ADhCZ6MjEY15fD-7evlVJjN3QaehRHjIweCDBB8o4Q51AS08FiJNdgKIEzS3FgyBeoSw0xCuv-Tvb-st3y285d6vVIaWt7XvkB' },
      { Image: img8, title: "افادات الكترونية للعاملين", link:'http://hr.mans.edu.eg/AlFarouk/system/HR.htm' },
      { Image: img11, title: "الرعاية الصحية الشاملة", link:'https://tanta.edu.eg/health.aspx' },
    ]
  };

  return (
    <div>
      <div className="flex flex-col col-span-1 mt-32 mx-2 sm:mx-8 lg:mx-32">
        <div className="h-[15vh] xl:h-[8vh] navbar flex flex-col lg:flex-row items-center justify-between">
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
                    className={`px-2 lg:px-3 py-1  transition-all duration-300 relative text-xs md:text-sm font-medium border-b-2
                      ${
                        activeCategory === item.key
                          ? style.drawActivee
                          : 'text-[--hover-color] border-transparent hover:border-[--hover-color]'
                      }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-[60vh] flex justify-center">
          <div className="h-[50vh] w-full p-8">
            <div className="cursor-pointer grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-[--main-color]">
              {services[activeCategory].map((service, index) => (
                <a href={service.link} target='_blank' key={index}><div
                  
                  className={`p-5 flex flex-col justify-between items-center border border-[--main-color] relative ${style.student} overflow-hidden rounded-xl
                    ${style.cardTransition} ${fade === false ? style.cardTransitionActive : ''}
                    hover:shadow-lg hover:border-[--hover-color] transition-all duration-300
                  `}
                >
                  <img className="mb-4 w-1/4 mx-auto object-contain" src={service.Image} alt={service.title} />
                  <p className="text-center text-sm font-medium text-[--main-color] mb-4">
                    {service.title}
                  </p>
                </div></a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
