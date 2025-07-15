import React, { useState } from 'react';
// If you are using i18n for translations, uncomment the following line:
// import { useTranslation } from 'react-i18next';

// Import your images
import newsIcon from '../../assets/NEWS.png';
import calendarIcon from '../../assets/cal.png';
import apartmentIcon from '../../assets/apartment.png';

// Import former presidents' images
import presidentA from '../../assets/a.jpg';
import presidentB from '../../assets/b.jpg';
import presidentC from '../../assets/c.jpg';
import presidentD from '../../assets/d.jpg';
import presidentE from '../../assets/e.jpg';
import presidentF from '../../assets/f.jpg';
import presidentG from '../../assets/g.jpg';
import presidentH from '../../assets/h.jpg';
import presidentI from '../../assets/i.jpg';
import presidentJ from '../../assets/j.jpg';
import presidentK from '../../assets/k.jpg';
import presidentL from '../../assets/l.jpg';
import presidentM from '../../assets/m.jpg';
import num from '../../assets/num.png';
import { FaBook, FaGlobe, FaUniversity } from "react-icons/fa";


export default function About() {

  // Data for "الجامعة في سنوات" timeline
  const universityHistory = [
    { year: '1962', text: 'صدر قرار رئيس الجمهورية العربية المتحدة رقم 1647 بإنشاء كلية طب بجامعة الإسكندرية يكون مقرها مدينة طنطا.' },
    { year: '1963', text: 'أنشأت كلية الطب عام 1963 بالقرار الجمهوري رقم 1468. وتقع بمحافظة الغربية.' },
    { year: '1969', text: 'صدر قرار رئيس الجمهورية العربية المتحدة رقم 1088 بإنشاء بعض الكليات الجديدة في بعض الجامعات وهي " كلية التجارة بطنطا - كلية العلوم بطنطا - كلية التربية (المعلمين) بطنطا - كلية الزراعة بكفر الشيخ ".' },
    { year: '1970', text: 'صدر قرار رئيس الجمهورية رقم 1578 بإنشاء فرع لجامعة الإسكندرية في طنطا يضم كليات الطب والتجارة والعلوم والمعلمين والزراعة.' },
    { year: '1972', text: 'صدر قرار رئيس الجمهورية بالقانون رقم 49 لتنظيم الجامعات، ونص على إنشاء جامعة وسط الدلتا ومقرها طنطا.' },
    { year: '1973', text: 'تعديل اسم الجامعة لتصبح جامعة طنطا، وإنشاء كلية التجارة، وكليات أخرى، وانفصلت جامعة المنوفية عن جامعة طنطا.' },
    { year: '1974', text: 'إنشاء كلية التربية بشبين الكوم، وبدء الدراسة بكلية الصيدلة وكلية طب الأسنان كأقسام تابعة لكلية الطب.' },
    { year: '1975', text: 'إضافة كليتي الهندسة والتكنولوجيا بشبين الكوم والهندسة الإلكترونية بمنوف، وإنشاء كليتي الآداب والزراعة بطنطا.' },
    { year: '1976', text: 'أُضيفت كليات متعددة منها طب الأسنان والصيدلة والهندسة والزراعة، وإنشاء كلية الهندسة رسمياً، واستقلال جامعة المنوفية.' },
    { year: '1977', text: 'إنشاء الكلية الفنية فرع كفر الشيخ، وفصل كلية طب الأسنان بجامعة طنطا عن كلية الطب.' },
    { year: '1981', text: 'إنشاء فرع لجامعة طنطا بكفر الشيخ يضم كليتي الزراعة والتربية، وانتقال كلية الصيدلة للمبنى الدائم.' },
    { year: '1982', text: 'بدأت كلية التمريض عملها كمعهد عالي للتمريض في العام الجامعي 1982 / 1983.' },
    { year: '1984', text: 'إنشاء كلية الهندسة بجامعة طنطا رسمياً بالقرار الجمهوري رقم 1142 لسنة 1976.' },
    { year: '1989', text: 'إنشاء كلية التربية النوعية والتي كانت تابعة لوزارة التربية والتعليم.' },
    { year: '2000', text: 'تحويل المعهد العالي للتمريض إلى كلية التمريض بطنطا طبقاً لقرار رئيس الجمهورية رقم 200.' },
    { year: '2006', text: 'إنشاء جامعة كفر الشيخ كجامعة مستقلة، بعد إلغاء فرع جامعة طنطا بكفر الشيخ.' },
    { year: '2014', text: 'اعتماد كلية الطب من الهيئة القومية لضمان الجودة والاعتماد في فبراير 2014.' },
    { year: '2015', text: 'اعتماد كلية الهندسة في أغسطس 2015.' },
    { year: '2016', text: 'اعتماد كلية العلوم في مارس 2016، وكلية الصيدلة في يوليو 2016.' },
    { year: '2018', text: 'إنشاء كليتي الحاسبات والمعلومات، والفنون التطبيقية، واعتماد كلية التربية الرياضية.' },
    { year: '2019', text: 'حصول كليتي طب الأسنان والتمريض على الاعتماد في 2019.' },
  ];

  // Data for "الرؤساء السابقين"
  const docInfo = [
    {
      img: presidentA,
      name: "أ.د/ محمود احمد ذكي محمد",
      date: `من 30-11-2020 حتى 31-07-2024`,
    },
    {
      img: presidentB,
      name: "أ.د/ مجدي عبد الرؤوف سبع",
      date: `من 18-01-2018 حتى 15-09-2020`,
    },
    {
      img: presidentC,
      name: "أ.د/ عبد الحكيم عبد الخالق خليل",
      date: `من 27-12-2011 حتى 31-07-2016`,
    },
    {
      img: presidentD,
      name: "أ.د/ هالة أحمد فؤاد اسماعيل",
      date: `من 10-08-2010 حتى 26-12-2011`,
    },
    {
      img: presidentE,
      name: "أ.د/ عبد الفتاح عبد المنجي صدقة",
      date: `من 01-08-2000 حتى 31-07-2010`,
    },
    {
      img: presidentF,
      name: "أ.د/ فؤاد خليفة هراس",
      date: `من 01-08-2000 حتى 31-07-2006`,
    },
    {
      img: presidentG,
      name: "أ.د/ محمد مختار البديوي",
      date: `من 28-01-1997 حتى 31-07-2000`,
    },
    {
      img: presidentH,
      name: "أ.د/ شوقي السيد خاطر",
      date: `من 14-08-1993 حتى 21-01-1997`,
    },
    {
      img: presidentI,
      name: "أ.د/ العشري حسين درويش",
      date: `من 06-11-1991 حتى 31-07-1993`,
    },
    {
      img: presidentJ,
      name: "أ.د/ رأفت مصطفى عيسي",
      date: `من 01-09-1985 حتى 05-11-1991`,
    },
    {
      img: presidentK,
      name: "أ.د/ محمد كمال العقاد",
      date: `من 01-08-1983 حتى 31-07-1985`,
    },
    {
      img: presidentL,
      name: "أ.د/ عبد الحي احمد مشهور",
      date: `من 18-09-1978 حتى 31-07-1983`,
    },
    {
      img: presidentM,
      name: "أ.د/ هاشم مصطفي نصار",
      date: `من 20-10-1973 حتى 31-08-1978`,
    },
  ];

  // Data for "الجامعة في أرقام" stats cards
  const stats = [
    { number: '121369', description: 'عدد طلاب المرحلة الجامعية' },
    { number: '1546', description: 'عدد الطلاب الوافدين' },
    { number: '4316', description: 'عدد طلاب المدن الجامعية' },
    { number: '15759', description: 'عدد طلاب الدراسات العليا' },
  ];

  // Data for "الجامعة في أرقام" document links
  const documentLinks = [
    { text: 'التقرير السنوي', icon: '📄', link:'https://tanta.edu.eg/files/Annual-Report2019-2020.pdf' },
    { text: 'الميثاق الأخلاقي للجامعة', icon: '📜' , link:`https://tanta.edu.eg/files/Annual-Report2019-2020.pdf` },
  ];

  // Data for the timeline navigation (the teal background component)
 const infoCards = [
  {
    icon: <FaBook size={50} />,
    text: "دليل البرامج الأكاديمية",
    link: `http://tdb2.tanta.edu.eg/acad_catalog/`
  },
  {
    icon: <FaGlobe size={50} />,
    text: "إدارة الوافدين",
    link:`https://international-students.tanta.edu.eg/`
  },
  {
    icon: <FaUniversity size={50} />,
    text: "مؤتمرات الجامعة",
    link: `https://tanta.edu.eg/conferences.aspx`
  },
];




  const [visibleCount, setVisibleCount] = useState(3);
  const showMoreHistory = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <>
      {/* About University Section */}
      <div className="container mx-auto lg:mx-0 lg:mr-32 px-4 lg:my-16 my-8 rtl">
        <div className="flex items-center ">
          <img src={newsIcon} className="w-[30px] ml-2" alt="News Icon" />
          <p className="text-xl font-bold text-[--main-color]">عن الجامعة</p>
        </div>
        <div className="py-4 text-gray-700 leading-relaxed">
          <p>
            جامعة طنطا هي جامعة مصرية مقرها مدينة طنطا بمحافظة الغربية ، استقلت كجامعة عام 1972، بعد أن كانت فرعًا لجامعة الإسكندرية منذ إنشائها بموجب القرار الجمهوري رقم 1468 لسنة 1962، وهو القرار الذي نص على إنشاء كلية الطب بطنطا. ويبلغ عدد كليات الجامعة حالياً 16 كلية ومعهداً فنياً و هى كليات الطب البشري- العلوم - التربية - التجارة – الصيدلة - طب الأسنان - الآداب - الحقوق –التمريض - الهندسة - الزراعـة - التربية الرياضية – التربية النوعية - كلية الحاسبات و المعلومات - كلية الفنون التطبيقية ، بالإضافة الى المعهد الفني للتمريض و37 وحدة ذات طابع خاص.
          </p>
        </div>
      </div>

      {/* University History Timeline Section */}
      <div className="container mx-auto px-4 lg:my-16 my-8 rtl">
        <div className="flex items-center">
          <img src={calendarIcon} className="w-[30px] ml-2" alt="Calendar Icon" />
          <p className="text-xl font-bold text-[--main-color]">الجامعة في سنوات</p>
        </div>
        <div className='py-4'>
          <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-4">
            {universityHistory.slice(0, visibleCount).map((item, index) => (
              <li key={index} className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="text-lg font-semibold text-gray-900 dark:text-white">{item.year}</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{item.text}</p>
              </li>
            ))}
          </ol>

          {visibleCount < universityHistory.length && (
            <div className="">
              <button
                onClick={showMoreHistory}
                className="px-6 py-2 bg-[--main-color] text-white rounded-md hover:bg-[--hover-color] transition"
              >
                عرض المزيد
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Former Presidents Section */}
      <div className="container lg:mr-32 max-w-4xl lg:my-16 my-8 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 rtl">
        <div className="flex items-center mb-4">
          <img className="w-[30px] ml-2" src={apartmentIcon} alt="Apartment Icon" />
          <p className="text-xl font-bold text-[--main-color]">الرؤساء السابقين</p>
          <div className="flex items-center flex-1 mr-4"> {/* Adjusted margin-right */}
            <i className="fa-solid fa-circle text-[--main-color] text-[7px]"></i>
            <hr className="flex-1 border border-[--hover-color]" />
          </div>
          <button
            onClick={openModal}
            className="text-xs font-medium rounded-md px-4 py-1 bg-[--main-color] text-white hover:bg-white hover:text-[--main-color] border border-[--main-color] cursor-pointer whitespace-nowrap"
          >
            عرض المزيد
          </button>
        </div>

        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {/* Displaying only first 3 presidents */}
            {docInfo.slice(0, 3).map((doc, index) => (
              <li key={index} className="py-3 sm:py-4"> {/* Using index as key for now, better to use unique ID if available */}
                <div className="flex items-center">
                  <div className="shrink-0">
                    <img
                      className="w-24 h-24 rounded-full object-cover"
                      src={doc.img}
                      alt={doc.name}
                    />
                  </div>
                  <div className="flex-1 min-w-0 mr-4"> {/* Adjusted ms-4 to mr-4 for RTL */}
                    <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                      {doc.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {doc.date}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base text-gray-900 dark:text-white">
                    <a
                      href="#" // Consider a proper link or handler for "السيرة الذاتية"
                      className="text-[--main-color] hover:text-[--hover-color] cursor-pointer text-base"
                    >
                      السيرة الذاتية
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Modal for all former presidents */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 rtl">
          <div className="bg-white dark:bg-gray-800 max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-lg relative">
            {/* Modal Header: Close button and title */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 z-20 p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                جميع الرؤساء السابقين
              </h2>
              <button
                onClick={closeModal}
                className="text-3xl text-gray-600 hover:text-red-600 font-bold"
              >
                ×
              </button>
            </div>

            <div className="p-6 pt-0"> {/* pt-0 to prevent double padding from sticky header */}
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                {docInfo.map((doc, index) => ( // Using index as key for now, better to use unique ID if available
                  <li key={index} className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="shrink-0">
                        <img
                          className="w-24 h-24 rounded-full object-cover"
                          src={doc.img}
                          alt={doc.name}
                        />
                      </div>
                      <div className="flex-1 min-w-0 mr-4"> {/* Adjusted ms-4 to mr-4 for RTL */}
                        <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                          {doc.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {doc.date}
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base text-gray-900 dark:text-white">
                        <a
                          href="#"
                          className="text-[--main-color] hover:text-[--hover-color] cursor-pointer text-base"
                        >
                          السيرة الذاتية
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* University Stats Section */}
      <div className="container mx-auto px-4 py-8 rtl">
        {/* Title Section */}
        <div className="flex items-center mb-4">
          <img className="w-[30px] ml-2" src={num} alt="Apartment Icon" />
          <p className="text-xl font-bold text-[--main-color]">الجامعة فى أرقام</p>
          <div className="flex items-center flex-1 mr-4"> {/* Adjusted margin-right */}
            <i className="fa-solid fa-circle text-[--main-color] text-[7px]"></i>
            <hr className="flex-1 border border-[--hover-color]" />
          </div>
          <a
            target='_blank' 
            href="http://tdb2.tanta.edu.eg/university_statistics/">
            <button
              className="text-xs font-medium rounded-md px-4 py-1 bg-[--main-color] text-white hover:bg-white hover:text-[--main-color] border border-[--main-color] cursor-pointer whitespace-nowrap"
            >
              عرض المزيد
            </button>
          </a>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
              <p className="text-4xl font-bold text-teal-500 mb-2">{stat.number}</p>
              <p className="text-lg text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Document Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documentLinks.map((link, index) => (
          <a
            key={index}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-lg shadow-md border-2 border-teal-500 flex flex-col items-center justify-center h-36 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
          >
            <span className="text-5xl text-teal-500 mb-2">{link.icon}</span>
            <p className="text-lg font-semibold text-gray-700">{link.text}</p>
          </a>


          ))}
        </div>
      </div>

      {/* Timeline Navigation Section (teal background) */}
      <div className="bg-teal-500 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 md:gap-4 text-center text-white">
          {infoCards.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <a 
              className='flex flex-col justify-center items-center'
              href={item.link}
              target="_blank"
              rel="noopener noreferrer">
                <div className="mb-4 ">{item.icon}</div>
                <div className="w-full border-b border-dotted border-white mb-4"></div>
                <p className="text-lg font-bold">{item.text}</p>
              </a>
            </div>
          ))}
        </div>
    </div>
    </>
  );
}