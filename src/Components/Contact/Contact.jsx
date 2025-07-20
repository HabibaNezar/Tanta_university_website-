import React from 'react'
import contactBg from '../../assets/contact.jpg'

export default function Contact() {
  return (
    <div className='mb-16'>
      {/* الخلفية */}
      <div className="relative w-full">
        <div
          className="h-[400px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${contactBg})` }}
        >
          {/* <h2 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">تواصل معنا</h2> */}
        </div>

        {/* معلومات التواصل */}
        <div className="w-11/12 sm:w-4/5 md:w-3/4 xl:w-1/2 mx-auto bg-[--main-color] text-white grid grid-cols-1 md:grid-cols-3 gap-6 p-6 text-center -mt-16 rounded-2xl shadow-xl z-10 relative">
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-phone text-3xl mb-2"></i>
            <p className="text-lg">3317928 040 2+</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-at text-3xl mb-2"></i>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJRxrwqNgSszdgNsSgPVlRvfqJZDGsWXhSPpXZkgmbBqXbffPWKQljXcvcnVjHJsHrGB"
              target="_blank"
              className="hover:underline"
            >
              <p className="text-lg">tanta_unv@unv.tanta.edu.eg</p>
            </a>
          </div>
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-location-dot text-3xl mb-2"></i>
            <p className="text-lg text-center">طنطا - شارع الجيش - جمهورية مصر العربية</p>
          </div>
        </div>

        {/* عنوان وسائل التواصل */}
        <h3 className="text-center text-xl font-semibold text-[--main-color] mt-8 mb-4">
          وسائل التواصل الاجتماعي
        </h3>

        {/* روابط التواصل الاجتماعي */}
        <div className="w-fit flex flex-wrap justify-center gap-4 p-4 bg-[--main-color] mt-2 rounded-xl mx-auto shadow-md">
          {[
            { icon: "facebook-f", link: "https://www.facebook.com/TantaUniversity.Official/" },
            { icon: "x-twitter", link: "https://twitter.com/Tanta_Univ" },
            { icon: "instagram", link: "https://www.instagram.com/tanta.university/" },
            { icon: "linkedin-in", link: "https://www.linkedin.com/school/tanta-university/" },
            { icon: "telegram-plane", link: "https://t.me/tantauniversityofficial" },
            { icon: "youtube", link: "https://www.youtube.com/channel/UCAgtJnyWLzSlT0TFcXL4aaA" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[--main-color] text-xl w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform duration-200 shadow-sm"
            >
              <i className={`fab fa-${item.icon}`}></i>
            </a>
          ))}
        </div>

        {/* نموذج الاتصال */}
        <h3 className="text-center text-xl font-semibold text-[--main-color] mt-12 mb-6">
          تواصل معنا 
        </h3>
        <form className="w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 mx-auto border p-6 rounded-md shadow-md space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="اسمك"
              className="border border-teal-300 rounded-md p-2"
            />
            <input
              type="email"
              placeholder="عنوان بريدك الإلكتروني"
              className="border border-teal-300 rounded-md p-2"
            />
            <input
              type="text"
              placeholder="الموضوع"
              className="border border-teal-300 rounded-md p-2"
            />
          </div>

          <div>
            <textarea
              placeholder="الرسالة"
              rows={6}
              className="w-full border border-teal-300 rounded-md p-3"
            ></textarea>
          </div>

          {/* reCAPTCHA */}
          <div className="flex justify-center">
            <div className="border rounded p-4 w-full max-w-md">
              <div className="flex items-center gap-3">
                <input type="checkbox" />
                <label>أنا لست برنامج روبوت</label>
              </div>
              <p className="text-xs mt-2 text-gray-500">reCAPTCHA - الخصوصية - الشروط</p>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-teal-700 text-white py-2 px-10 rounded-md hover:bg-teal-800 transition"
            >
              أرسل
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
