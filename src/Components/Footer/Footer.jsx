import React from "react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white px-4 py-10 text-sm" dir="rtl">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-700 pb-8">

        {/* روابط هامة */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[var(--main-color)]">روابط هامة</h3>
          <ul className="space-y-2">
            {[
              ["https://tdb2.tanta.edu.eg/university_statistics/", "إحصائيات جامعة طنطا"],
              ["https://admission.study-in-egypt.gov.eg/", "ادرس في مصر"],
              ["https://mohesr.gov.eg/ar-eg/Pages/Home.aspx", "وزارة التعليم العالي"],
              ["https://www.egypt.gov.eg/arabic/home.aspx", "بوابة الحكومة المصرية"],
              ["http://tdb2.tanta.edu.eg/paymentgateway/e_payment/", "نظام التحصيل الإلكتروني"],
              ["https://tanta.edu.eg/bid.aspx", "المناقصات"],
              ["https://tanta.edu.eg/health.aspx", "الرعاية الصحية الشاملة"],
              ["https://tanta.edu.eg/questions.aspx", "أسئلة شائعه"],
              ["https://tanta.edu.eg/360.aspx", "الجولات الافتراضية"],
              ["https://tanta.edu.eg/files/Professional-Conduct.pdf", "مدونة السلوك الوظيفي"],
            ].map(([href, label], i) => (
              <li key={i}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--main-color)] hover:underline transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* خدمات أخرى */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[var(--main-color)]">خدمات أخرى</h3>
          <ul className="space-y-2">
            {[
              ["https://militaryedu.tanta.edu.eg/", "التربية العسكرية"],
              ["https://tanta.edu.eg/conferences.aspx", "المؤتمرات"],
              ["https://sdgs.tanta.edu.eg/", "التنمية المستدامة"],
              ["https://alumni.tanta.edu.eg/", "وحدة الخريجين"],
              ["https://tanta.edu.eg/digitaltransformation.aspx", "التحول الرقمي"],
              ["https://tanta.edu.eg/hostels.aspx", "المدن الجامعية"],
              ["https://tanta.edu.eg/post/library.aspx", "المكتبات"],
              ["https://tanta.edu.eg/e-services.aspx", "إفادات إلكترونية"],
              ["https://shc.tanta.edu.eg/", "الإدارة الطبية"],
              ["https://tanta.edu.eg/meals-reservation.aspx", "حجز الوجبات"],
            ].map(([href, label], i) => (
              <li key={i}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--main-color)] hover:underline transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* القائمة البريدية */}
        <div className="sm:col-span-2 flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-4 text-[var(--main-color)]">القائمة البريدية</h3>
          <p className="mb-4">اشترك ليصلك كل جديد من أخبار وخدمات الجامعة.</p>

          <div className="flex flex-col sm:flex-row items-center gap-2 mb-2 w-full sm:justify-center">
            <input
              type="email"
              placeholder="your.address@email.com"
              className="p-2 rounded-md text-black w-full sm:w-64 focus:outline-none"
            />
            <button className="bg-[var(--main-color)] hover:bg-[var(--main-color)]/80 text-white px-4 py-2 rounded-md transition">
              اشترك الآن
            </button>
          </div>

          <p className="text-xs text-gray-400">لا نرسل رسائل مزعجة</p>

          <div className="mt-4 text-sm">📍 الدليل الجغرافي للجامعة</div>

          <button className="mt-3 border border-[var(--main-color)] text-[var(--main-color)] hover:bg-[var(--main-color)] hover:text-black px-4 py-1 rounded transition">
            رأيك يهمنا
          </button>
        </div>
      </div>

      {/* الروابط السفلية */}
      <div className="max-w-screen-xl mx-auto mt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-center text-xs text-gray-400 px-4">
        <div className="flex flex-wrap gap-4 justify-center">
          {["سياسة الخصوصية", "شروط الاستخدام", "ميثاق المتعاملين", "سياسة المحتوى"].map((link, i) => (
            <a href="#" key={i} className="hover:text-white hover:underline transition">
              {link}
            </a>
          ))}
        </div>
        <p>تصميم وتطوير البوابة الإلكترونية - جامعة طنطا © جميع الحقوق محفوظة 2024</p>
      </div>
    </footer>
  );
}
