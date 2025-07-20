import React from 'react'
import img from '../../assets/mic.png'
import Slider from "react-slick";
import img1 from '../../assets/news.jpeg'
import style from '../News/News.module.css'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import { NavLink } from 'react-router-dom';

export default function News() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // الافتراضي 4 صور
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // لو الشاشة أصغر من 1024px
                settings: {
                    slidesToShow: 2, // يعرض 3 صور بدل 4
                }
            },
            {
                breakpoint: 768, // لو الشاشة أصغر من 768px
                settings: {
                    slidesToShow: 1, // يعرض صورتين بدل 3
                }
            },
            {
                breakpoint: 480, // لو الشاشة أصغر من 480px
                settings: {
                    slidesToShow: 1, // يعرض صورة واحدة فقط
                }
            }
        ]
    };
    

    function getData(){
        return axios.get(`https://api-login.tanta.edu.eg/api/UniversityNews/`)
    }
    
    let {data} = useQuery({
        queryKey: [`recentProduct`],
        queryFn: getData
    })

    console.log(data?.data)

  return (
    <>
        <div className={`mx-8 xl:mx-32 block mt-56 lg:mt-0`}>  
            <div className="header flex items-center">
                {/* الديف الأول: الأيقونة + النص */}
                <div className="flex items-center">
                    <img className="w-[50px]" src={img} alt="" />
                    <p className="text-sm font-bold text-[--main-color]">اخر اخبار الجامعة</p>
                </div>

                {/* الديف الثاني: النقطة + الخط */}
                <div className="flex items-center flex-1 mr-16">
                    <i className="fa-solid fa-circle text-[--main-color] text-[7px]"></i>
                    <hr className="flex-1 border border-[--hover-color]" />
                </div>

                {/* الديف الثالث: الزر */}
                <div>
                    <NavLink to={`NewsArchieve`}><p className="text-xs font-medium rounded-md px-4 py-1 bg-[--main-color] text-white hover:bg-white hover:text-[--main-color] border border-[--main-color] cursor-pointer">
                    أرشيف الأخبار
                    <span className='px-2 text-[--hover-color]'><i className="fa-solid fa-chevron-left"></i></span>
                    </p></NavLink>
                </div>
            </div>
            <div className="slider pt-10 mx-16 xl:mx-0">
                <Slider {...settings} className={ `news min-h-[300px]`}>
                    {data?.data?.map((data) => (
                        <NavLink to={`/NewsDetails/${data.id}`} key={data.id}>
                            <div  className="relative overflow-hidden group px-2 cursor-pointer" > 
                        {/* 🔹 تغليف الصورة والجردينت داخل div جديد لإبقاء الجردينت على الصورة فقط */}
                            <div className="relative w-full h-full">
                                {/* 🔹 الصورة مع تأثير الزوم */}
                                <img
                                className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
                                src={data.mainImageUrl}
                                alt="خبر الجامعة"
                                />


                                {/* 🔹 الجردينت الأسود فوق الصورة فقط */}
                                <div className="absolute inset-0 bg-black/40 transition-transform duration-500 group-hover:scale-110"></div>
                            </div>

                            {/* 🔹 النص فوق الصورة */}
                            <p className="text-white text-right font-semibold absolute bottom-5 right-5 px-3 py-1 rounded-md">
                                <span className="inline-block">{data.breifAr?.split(" ").slice(0, 10).join(" ")}</span>
                                <span className={`${style.m} " inline-block ltr"`}>...</span>
                            </p>
                        </div></NavLink>
                    ))}
                </Slider>
            </div>

        </div>
    </>
)
}
