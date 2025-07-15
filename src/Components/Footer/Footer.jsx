import React from "react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white px-6 py-10 text-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">

        {/* روابط هامة */}
        <div>
          <h3 className="text-xl font-bold mb-4">روابط هامة</h3>
          <ul className="space-y-2 text-right">
            <li>إحصائيات جامعة طنطا</li>
            <li>ادرس في مصر</li>
            <li>وزارة التعليم العالي</li>
            <li>بوابة الحكومة المصرية</li>
            <li>نظام التحصيل الإلكتروني</li>
            <li>... المزيد</li>
          </ul>
        </div>

        {/* القائمة البريدية */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">القائمة البريدية</h3>
          <p className="mb-4">إشترك في قائمتنا البريدية ليصلك كل أخبار وخدمات الجامعة الجديدة.</p>

          <div className="flex flex-col items-center sm:flex-row justify-center gap-2 mb-2">
            <input
              type="email"
              placeholder="your.address@email.com"
              className="p-2 rounded-md text-black w-64"
            />
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md">
              إشترك الآن
            </button>
          </div>

          <p className="text-xs">لا نرسل رسائل سبام نهائيًا</p>
          <div className="mt-3">
            📍 الدليل الجغرافي للجامعة
          </div>

          <button className="mt-2 border border-white rounded px-4 py-1 hover:bg-white hover:text-black transition">
            رأيك يهمنا
          </button>
        </div>

        {/* تواصل معنا */}
        <div className="text-right">
          <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
          <ul className="space-y-2">
            <li>📞 رقم التليفون: +2 040 3317928</li>
            <li>📧 الإيميل: <a href="mailto:tanta_unv@unv.tanta.edu.eg" className="underline">tanta_unv@unv.tanta.edu.eg</a></li>
            <li>📍 العنوان: طنطا - شارع الجيش - جمهورية مصر العربية</li>
            <li>📌 المكان الجغرافي</li>
            <li>🗺️ خريطة الموقع</li>
            <li>❓ استبيانات</li>
          </ul>
        </div>
      </div>

      {/* الروابط السفلية */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-2 text-center">
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#" className="hover:underline">سياسة الخصوصية</a>
          <a href="#" className="hover:underline">شروط الاستخدام</a>
          <a href="#" className="hover:underline">ميثاق المتعاملين</a>
          <a href="#" className="hover:underline">سياسة المحتوى</a>
        </div>

        <p className="text-gray-400 text-xs">
          تصميم وتطوير البوابة الإلكترونية جامعة طنطا © جميع الحقوق محفوظة 2024
        </p>
      </div>
    </footer>
  );
}
