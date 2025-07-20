import React, { useState, useEffect } from 'react';
import img from '../../assets/man.png';
import doc1Img from '../../assets/doc1.png';
import doc2Img from '../../assets/doc2.png';
import doc3Img from '../../assets/doc3.png';
import doc4Img from '../../assets/doc4.jpeg';
import style from '../Scientists/Scientists.module.css'
import { NavLink } from 'react-router-dom';

export default function Scientists() {
    const [selectedDoc, setSelectedDoc] = useState("doc1");
    const [fade, setFade] = useState(false);
    const [initial, setInitial] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFade(true);      // نفعل الترانزشن
            setInitial(false);  // نعتبر إن الصفحة دخلت خلاص
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const handleDocChange = (doc) => {
        setFade(false);
        setTimeout(() => {
            setSelectedDoc(doc);
            setFade(true);
        }, 100);
    };

    const scientists = {
        doc1: {
            img: doc1Img,
            name: "أ.د / محمد حسن عبدالوهاب النويهى - علوم",
            desc: [
                "أستاذ بقسـم الكيمياء بكلية العلوم بجامعة طنطا.",
                "من علماء جامعة طنطا ضمن أفضل 2% حول العالم بقائمة جامعة استانفورد الأمريكية."
            ]
        },
        doc2: {
            img: doc2Img,
            name: "أ.د / شريف محمد عبد السلام عبد الباقي - طب",
            desc: [
                "الأستاذ بقسم طب المناطق الحارة والحميات بكلية الطب بجامعة طنطا",
                "من علماء جامعة طنطا ضمن أفضل 2% حول العالم بقائمة جامعة استانفورد الأمريكية."
            ]
        },
        doc3: {
            img: doc3Img,
            name: "أ.د / جمال محمد محمود المغربي-صيدلة",
            desc: [
                "الأستاذ بقسم التكنولوجيا الصيدلية بكلية الصيدلية بجامعة طنطا",
                "من علماء جامعة طنطا ضمن أفضل 2% حول العالم بقائمة جامعة استانفورد الأمريكية."
            ]
        },
        doc4: {
            img: doc4Img,
            name: "أ.د / عبدالنبى البيومى المتولى قابيل -هندسة",
            desc: [
                "الأستاذ بقسـم هندسـة القوى الميكانيكية بكلية الهندسة بجامعة طنطا.",
                "حصل على جائزة أفضل أستاذ متميز فى البحث العلمى على مستوى الوطن العربى لعام 2018"
            ]
        }
    };

    return (
        <div className='bg-gray-100 py-16'>
  <div className="px-4 sm:px-8 xl:px-32 mt-20 lg:mt-0">
    {/* Header */}
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 justify-between">
      <div className="flex items-center gap-2">
        <img className="w-[40px] sm:w-[50px]" src={img} alt="Logo" />
        <p className="text-sm sm:text-base font-bold text-[--main-color]">من علماء جامعة طنطا</p>
      </div>

      <div className="flex items-center flex-1 hidden lg:flex mr-16">
        <i className="fa-solid fa-circle text-[--main-color] text-[7px]"></i>
        <hr className="flex-1 border border-[--hover-color]" />
      </div>

      <div>
        <NavLink
          to={`/MoreScientists`}
          target='_blank'
          className="text-xs sm:text-sm font-medium rounded-md px-4 py-1 bg-[--main-color] text-white hover:bg-white hover:text-[--main-color] border border-[--main-color] cursor-pointer"
        >
          علماء الجامعة
          <span className='px-2 text-[--hover-color]'>
            <i className="fa-solid fa-chevron-left"></i>
          </span>
        </NavLink>
      </div>
    </div>

    {/* Main Layout */}
    <div className="w-full flex flex-col lg:grid grid-cols-5 gap-6 pt-10">
      {/* Right Side - Avatars */}
      <div className="col-span-1">
        <div className="flex lg:flex-col flex-row gap-4 overflow-x-auto lg:overflow-visible justify-center lg:justify-start">
          {Object.keys(scientists).map((docKey) => (
            <div
              key={docKey}
              onClick={() => handleDocChange(docKey)}
              className={`cursor-pointer min-w-[70px] w-[70px] h-[70px] rounded-full overflow-hidden border-2 transition-all ${
                selectedDoc === docKey ? "border-[--main-color] shadow-xl" : "border-transparent shadow-md"
              }`}
            >
              <img
                className="w-full h-full object-cover rounded-full"
                src={scientists[docKey].img}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      {/* Left Side - Info Card */}
      <div className="col-span-4 w-full">
        <div
          className={`w-full flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row ${style.fadeInCard} ${fade || initial ? style.fadeInCardActive : ''}`}
        >
          <img
            className="object-cover w-full rounded-t-lg h-64 sm:h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={scientists[selectedDoc].img}
            alt="Scientist"
          />
          <div className="flex flex-col justify-between p-4 leading-normal text-center md:text-left">
            <h5 className="mb-2 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-900">{scientists[selectedDoc].name}</h5>
            <p className="mb-3 font-normal text-gray-700 flex flex-col gap-1">
              {scientists[selectedDoc].desc.map((line, index) => (
                <span key={index}>{line}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
}
