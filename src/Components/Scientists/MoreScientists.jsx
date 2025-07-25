import React from 'react';
import img1 from '../../assets/doc/img1.jpg';
import img2 from '../../assets/doc/img2.jpg';
import img3 from '../../assets/doc/img3.jpg';
import img4 from '../../assets/doc/img4.jpg';
import img5 from '../../assets/doc/img5.jpg';
import img6 from '../../assets/doc/img6.jpg';
import img7 from '../../assets/doc/img7.jpg';
import img8 from '../../assets/doc/img8.jpg';
import img9 from '../../assets/doc/img9.jpg';
import img10 from '../../assets/doc/img10.jpg';
import img11 from '../../assets/doc/img11.jpg';
import img12 from '../../assets/doc/img12.jpg';
import img13 from '../../assets/doc/img13.jpg';
import img14 from '../../assets/doc/img14.jpg';
import img15 from '../../assets/doc/img15.jpg';
import img16 from '../../assets/doc/img16.jpeg';
import img17 from '../../assets/doc/img17.jpeg';
import img18 from '../../assets/doc/img18.jpeg';
import img19 from '../../assets/doc/img19.jpeg';
import img20 from '../../assets/doc/img20.jpeg';
import img21 from '../../assets/doc/img21.jpeg';

export default function MoreScientists() {
  const scientists = {
    doc1: {
      img: img1,
      name: "د/ مصطفى فهمي عباس حسنين",
      desc: [
        "الأستاذ بقسم هندسة الإنشاءات بكلية الهندسة جامعة طنطا",
        "والمدرج بقائمة أفضل 2% من علماء العالم طبقاً لتصنيف جامعة ستانفورد العريقة"
      ]
    },
    doc2: {
      img: img2,
      name: "د/ ناجي لبيب كمال طراد",
      desc: [
        "الأستاذ المساعد بقسم الكيمياء بكلية العلوم جامعة طنطا",
        "والمدرج بقائمة أفضل 2% من علماء العالم طبقاً لتصنيف جامعة ستانفورد العريقة"
      ]
    },
    doc3: {
      img: img3,
      name: "د/ الدكتور صالح محمد صالح شلبي",
      desc: [
        "الأستاذ المساعد بقسم الفيزياء والرياضيات الهندسية بكلية الهندسة جامعة طنطا",
        "والمدرج بقائمة أفضل 2% من علماء العالم طبقاً لتصنيف جامعة ستانفورد العريقة"
      ]
    },
    doc4: {
      img: img4,
      name: "د/ أميرة صلاح أحمد عاشور",
      desc: [
        "الأستاذ المساعد بقسم هندسة الإلكترونيات والاتصالات الكهربية بكلية الهندسة جامعة طنطا",
        "والمدرج بقائمة أفضل 2% من علماء العالم طبقاً لتصنيف جامعة ستانفورد العريقة"
      ]
    },
    doc5: {
      img: img5,
      name: "د/ عمار حامد عبد السلام الشيخ",
      desc: [
        "المدرس بقسم هندسة الإنتاج والتصميم الميكانيكي بكلية الهندسة جامعة طنطا",
        "والمدرج بقائمة أفضل 2% من علماء العالم طبقاً لتصنيف جامعة ستانفورد العريقة"
      ]
    },
    doc6: {
      img: img6,
      name: "د/ محمد يوسف عباد",
      desc: [
        "الأستاذ المتفرغ بقسم الكيمياء بكلية العلوم جامعة طنطا",
        "والمدرج بقائمة أفضل 2% من علماء العالم طبقاً لتصنيف جامعة ستانفورد العريقة"
      ]
    },
    doc7: {
      img: img7,
      name: "د/ مصطفى محمد مصطفى الشيخ",
      desc: [
        "الأستاذ المتفرغ بقسم النبات بكلية العلوم جامعة طنطا",
        "والمدرج بقائمة أفضل 2% من علماء العالم طبقاً لتصنيف جامعة ستانفورد العريقة"
      ]
    },
    doc8: {
      img: img8,
      name: "د/ أحمد محمد عبدالعظيم السباعي",
      desc: [
        "الأستاذ بقسم الطبيعة بكلية العلوم جامعة طنطا",
        "والمدرج بقائمة أفضل 2% من علماء العالم طبقاً لتصنيف جامعة ستانفورد العريقة"
      ]
    },
    doc9: {
      img: img9,
      name: "د/ أسامة محمد محمود حميدة",
      desc: [
        "الأستاذ بقسم الطبيعة بكلية العلوم جامعة طنطا",
        "والمدرج بقائمة أفضل 2% من علماء العالم طبقاً لتصنيف جامعة ستانفورد العريقة"
      ]
    },
    doc10: {
      img: img10,
      name: "د/ الرفاعي صبحي بسيوني قناوي",
      desc: [
        "الأستاذ بقسم الكيمياء بكلية العلوم جامعة طنطا",
        "والمدرج بقائمة أفضل 2% من علماء العالم طبقاً لتصنيف جامعة ستانفورد العريقة"
      ]
    },
    doc11: {
      img: img11,
      name: "د/ السيد عبد العظيم يوسف محمد العجوز",
      desc: [
        "الأستاذ بقسم هندسة القوى الميكانيكية بكلية الهندسة جامعة طنطا",
        "والمدرج بقائمة أفضل 2% من علماء العالم طبقاً لتصنيف جامعة ستانفورد العريقة"
      ]
    },
    doc12: {
      img: img12,
      name: "د/ إيهاب مصطفى حسن طوسون",
      desc: [
        "الأستاذ بقسم علم الحيوان بكلية العلوم جامعة طنطا",
        "والمدرج بقائمة أفضل 2% من علماء العالم طبقاً لتصنيف جامعة ستانفورد العريقة"
      ]
    },
    doc13: {
      img: img13,
      name: "د/ جمال محمد محمود المغربي",
      desc: [
        "الأستاذ بقسم التكنولوجيا الصيدلية بكلية الصيدلة جامعة طنطا",
        "والمدرج بقائمة أفضل 2% من علماء العالم طبقاً لتصنيف جامعة ستانفورد العريقة"
      ]
    },
    doc14: {
      img: img14,
      name: "د/ طارق صالح فهمي عامر",
      desc: [
        "الأستاذ بقسم الرياضيات بكلية العلوم جامعة طنطا",
        "والمدرج بقائمة أفضل 2% من علماء العالم طبقاً لتصنيف جامعة ستانفورد العريقة"
      ]
    },
    doc15: {
      img: img15,
      name: "د/ مصطفى عبد اللطيف محمد الصواف",
      desc: [
        "الأستاذ بقسم هندسة الإنشاءات بكلية الهندسة جامعة طنطا",
        "والمدرج بقائمة أفضل 2% من علماء العالم طبقاً لتصنيف جامعة ستانفورد العريقة"
      ]
    },
    doc16: {
      img: img16,
      name: "د/ لبيب راغب سالم",
      desc: [
        "الأستاذ بقسم علم الحيوان بكلية العلوم بجامعة طنطا.",
        "حصل على جائزة الدولة التقديرية في مجال العلوم الأساسية لعام 2018.",
        "قام الرئيس عبد الفتاح السيسي بمنحه وسام العلوم والفنون من الطبقة الأولى."
      ]
    },
    doc17: {
      img: img17,
      name: "د/ عبدالنبى البيومى المتولى قابيل",
      desc: [
        "الأستاذ بقسم هندسة القوى الميكانيكية بكلية الهندسة بجامعة طنطا.",
        "عميد الكلية المتخصصة بالأكاديمية البحث العلمي واستشاري تقييم الأثر البيئي بوزارة البيئة.",
        "حصل على جائزة أفضل أستاذ متميز في البحث العلمي على مستوى الوطن العربي لعام 2018."
      ]
    },
    doc18: {
      img: img18,
      name: "د/ ضياء الدين عبد الستار علي منصور",
      desc: [
        "الأستاذ بقسم هندسة القوى والآلات الكهربية بكلية الهندسة بجامعة طنطا.",
        "حصل على جائزة الدولة التشجيعية في مجال العلوم الهندسية لعام 2018."
      ]
    },
    doc19: {
      img: img19,
      name: "د/ محمود هاشم عبدالقادر",
      desc: [
        "تخرج من كلية العلوم جامعة طنطا.",
        "تقلد منصب رئيس الجامعة الألمانية السابق.",
        "وحالياً هو رئيس الجامعة الأهلية."
      ]
    },
    doc20: {
      img: img20,
      name: "د/ محمد عبد الجيد أحمد إبراهيم",
      desc: [
        "الأستاذ بقسم هندسة القوى الميكانيكية بكلية الهندسة بجامعة طنطا.",
        "حصل على جائزة الدولة التشجيعية في مجال العلوم الهندسية لعام 2018."
      ]
    },
    doc21: {
      img: img21,
      name: "د/ محمد أحمد عبدالفتاح العيسوى",
      desc: [
        "الأستاذ المساعد بقسم علم النبات بكلية العلوم بجامعة طنطا.",
        "حصل على جائزة الدكتوره إكرام عبدالسلام في مجال الوراثة الطبية في مصر عام 2018.",
        "حصل على جائزة الدولة التشجيعية الأولى في مجال العلوم البيولوجية عام 2018."
      ]
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen lg:mx-36 mt-32">
      {/* الهيدر */}
      <div
        className="py-2 text-center text-white text-base font-bold"
        style={{ backgroundColor: 'var(--main-color)' }}
      >
        علماء الجامعة
      </div>

      {/* الكروت */}
      <div className="flex flex-wrap justify-center gap-6 px-4 py-10">
        {Object.values(scientists).map((scientist, index) => (
          <div
            key={index}
            dir="rtl"
            className="w-full sm:w-[45%] lg:w-[30%] bg-white rounded-2xl shadow-md p-5 text-center transition-transform hover:scale-105 duration-300"
          >
            <img
              src={scientist.img}
              alt={scientist.name}
              className="w-36 h-36 mx-auto mb-4 rounded-full border-4"
              style={{ borderColor: 'var(--main-color)' }}
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">{scientist.name}</h3>
            <ul className="text-gray-600 text-sm space-y-1 leading-relaxed">
              {scientist.desc.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
