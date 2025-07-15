import React, { useState } from 'react'
import img from '../../assets/quality-policy.jpg'
export default function Quality() {
  const [showImage, setShowImage] = useState(false);
  const [showTextModal, setShowTextModal] = useState(false);
  const [showTextModal2, setShowTextModal2] = useState(false);


    return (
    <div className="h-fit flex items-center bg-[#f6f6f6] py-10 px-4">
      
      <div className="max-w-2xl  lg:mx-32 w-full rounded-xl shadow-lg bg-white p-6 md:p-8 border-r-4 border-[#12939B]">
        <ul className="text-right text-[#12939B] text-base md:text-lg leading-loose font-semibold list-disc pr-4">
          <li className="cursor-pointer hover:underline" onClick={() => setShowImage(true)}>
            سياسة الجودة
          </li>
          <li className="cursor-pointer hover:underline" onClick={() => setShowTextModal(true)}>
            سياسات مكافحة الرشوة والفساد
          </li>
          <li className="cursor-pointer hover:underline" onClick={() => setShowTextModal2(true)}>
            سياسات المساواة والتنوع والشمول
          </li>
        </ul>
      </div>

      {/* مودال عرض الصورة */}
      {showImage && (
        <div dir="ltr" className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center px-4">
          <div className="relative max-w-3xl w-full max-h-[90vh] my-10 overflow-y-auto bg-white rounded-lg shadow-2xl p-4">
            <img
              src={img}
              alt="سياسة الجودة"
              className="w-full h-auto rounded-md"
            />
            <button
              onClick={() => setShowImage(false)}
              className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 p-2 rounded-full text-sm z-10"
            >
              ✕ إغلاق
            </button>
          </div>
        </div>
      )}

      {/* مودال عرض النص */}
      {showTextModal && (
        <div dir="ltr" className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center px-4">
          <div className="relative max-w-3xl w-full max-h-[90vh] my-10 overflow-y-auto bg-white rounded-lg shadow-2xl p-6 text-right leading-relaxed text-[#333] text-sm md:text-base">
            <button
              onClick={() => setShowTextModal(false)}
              className=" absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 p-2 rounded-full text-sm z-10"
            >
              ✕ إغلاق
            </button>

            {/* محتوى النص */}
            <p className='pt-10'>
              انطلاقاً من مسئوليتها الوطنية وحرصاً على حماية المال العام تلتزم جامعة طنطا بنشر المباديء والأخلاقيات وتبني السياسات التي تستهدف مكافحة الرشوة والفساد، واتخاذ كافة السبل والوسائل الإدارية والقانونية في هذا الصدد.
              <br /><br />
              <strong>- المباديء الحاكمة:</strong><br />
              تلتزم جامعة طنطا بتبني ونشر مجموعة من المباديء الحاكمة بين العاملين بها تستهدف نبذ ومواجهة الرشوة والفساد بكافة أشكالهما وصورهما، حيث تتمثل تلك المباديء في النزاهة، والشفافية، والالتزام، والرقابة، والمحاسبة.
              <br />
              <strong>النزاهة والشفافية:</strong> تلتزم جامعة طنطا بإقرار وتطبيق مبدأ النزاهة والشفافية في كافة تعاملاتها المالية...
              <br />
              <strong>الالتزام:</strong> تحرص جامعة طنطا على التأكد من التزام العاملين بها بتبني المباديء...
              <br />
              <strong>الرقابة:</strong> تلتزم جامعة طنطا بإجراء عمليات الرقابة المستمرة...
              <br />
              <strong>المحاسبة:</strong> تلتزم جامعة طنطا بمحاسبة ومعاقبة كل من يثبت تورطه...
              <br /><br />
              <strong>- الإطار القانوني:</strong><br />
              تتبع الجامعة الاستراتيجية الوطنية لمكافحة الفساد وفق الإرادة الحقيقية للشعب المصري...
              <br /><br />
              <strong>- الإجراءات الإدارية والتدابير الاحترازية المتبعة:</strong><br />
              وضع سياسات واضحة - فصل المهام - التناوب الوظيفي - التدريب والتوعية - المراجعة والتدقيق - إلزام الموظفين بإقرارات الذمة...
              <br /><br />
              <strong>- التدابير الاحترازية عند التعاقدات:</strong><br />
              يتم نشر جميع التعاقدات، تشكيل لجان فنية، فتح المظاريف، وجود ممثلين من وزارة المالية ومجلس الدولة...
              <br /><br />
              <strong>- الإجراءات التأديبية والعقابية:</strong><br />
              تلتزم جامعة طنطا بتطبيق الإجراءات التأديبية والعقابية ضد كل من يثبت تورطه...
            </p>
          </div>
        </div>
      )}
      
      {/* مودال عرض النص */}
      {showTextModal2 && (
        <div dir="ltr" className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center px-4">
          <div className="relative max-w-3xl w-full max-h-[90vh] my-10 overflow-y-auto bg-white rounded-lg shadow-2xl p-6 text-right leading-relaxed text-[#333] text-sm md:text-base">
            <button
              onClick={() => setShowTextModal2(false)}
              className=" absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 p-2 rounded-full text-sm z-10"
            >
              ✕ إغلاق
            </button>

            {/* محتوى النص */}
            <div className="pt-10 space-y-4 leading-relaxed text-sm md:text-base text-right">
              <p>
                <strong>إيماناً بدورها الأكاديمي والتربوي وانطلاقاً من مسئوليتها الوطنية والمجتمعية،</strong>
                تلتزم جامعة طنطا بدعم وتطبيق سياسات المساواة والتنوع والشمول داخل وخارج الحرم الجامعي،
                من خلال تفعيل الآليات وتطبيق الممارسات التي تكفل المساواة بين جميع فئات المجتمع،
                وتستهدف القضاء على التمييز على أساس العرق أو الدين أو النوع أو العمر أو الفئة الاجتماعية أو الإعاقة الجسدية أو غيرها من الانتماءات الفئوية لأفراد المجتمع.
              </p>

              <p><strong>آليات تطبيق سياسات المساواة والتنوع والشمول لكافة فئات المجتمع داخل جامعة طنطا:</strong></p>

              <p className="text-[#12939B] font-semibold">سياسات التنوع والقبول • </p>
            <ul className="list-none pr-4 space-y-2 text-right">
  <li>
    <strong>سياسات قبول الطلاب:</strong> تلتزم جامعة طنطا بقبول كافة فئات الطلاب للالتحاق بها بغض النظر عن العرق أو الدين أو النوع أو الفئة الاجتماعية أو الإعاقة الجسدية طالما حققوا الاشتراطات الأخرى.
  </li>
  <li>
    <strong>سياسات قبول الأكاديميين والموظفين:</strong> التعيين والترقية بناءً على الكفاءة فقط، دون تمييز.
  </li>
  <li>
    <strong>سياسات قبول الأفراد من خارج الجامعة:</strong> الجامعة ترحب بجميع المتعاملين معها دون تمييز.
  </li>
</ul>

<p className="text-[#12939B] font-semibold mt-6">سياسات الدمج والشمول •</p>
<ul className="list-none pr-4 space-y-2 text-right">
  <li>
    <strong>دمج الطلاب:</strong> تسهيلات للطالبات والطلاب ذوي الإعاقة، وقبول الوافدين، ودعم الطلاب ذوي الدخل المنخفض.
  </li>
  <li>
    <strong>دمج الأكاديميين والموظفين:</strong> نسبة 5% لذوي الإعاقة، إجازات للأمهات، مرافق حضانة، وورش عمل للتوعية.
  </li>
  <li>
    <strong>دمج الأفراد من خارج الجامعة:</strong> مرافق وخدمات لذوي الإعاقة وكبار السن داخل الحرم الجامعي.
  </li>
</ul>

<p className="text-[#12939B] font-semibold mt-6">سياسات المساواة وعدم التمييز •</p>
<ul className="list-none pr-4 space-y-2 text-right">
  <li>
    <strong>بين الطلاب:</strong> الجامعة توفر بيئة عادلة وداعمة للطلاب كافة، خاصة الفئات الضعيفة، وتمنع التمييز بكل أشكاله.
  </li>
  <li>
    <strong>بين الأكاديميين والموظفين:</strong> ضمان العدالة وتكافؤ الفرص، معالجة الشكاوى المتعلقة بالتمييز، ودورات تدريبية سنوية.
  </li>
  <li>
    <strong>بين الأفراد من خارج الجامعة:</strong> تعامل متساوٍ مع جميع الزائرين والمستفيدين من خدمات الجامعة، ودعم مجتمعي فعّال للفئات الأولى بالرعاية.
  </li>
</ul>

<p className="text-[#12939B] font-semibold mt-6">سياسات الدمج والشمول •</p>
<ul className="list-disc pr-4 space-y-2 rtl text-right">
  <li>
    <strong>دمج الطلاب:</strong> تسهيلات للطالبات والطلاب ذوي الإعاقة، وقبول الوافدين، ودعم الطلاب ذوي الدخل المنخفض.
  </li>
  <li>
    <strong>دمج الأكاديميين والموظفين:</strong> نسبة 5% لذوي الإعاقة، إجازات للأمهات، مرافق حضانة، وورش عمل للتوعية.
  </li>
  <li>
    <strong>دمج الأفراد من خارج الجامعة:</strong> مرافق وخدمات لذوي الإعاقة وكبار السن داخل الحرم الجامعي.
  </li>
</ul>

<p className="text-[#12939B] font-semibold mt-6">سياسات المساواة وعدم التمييز •</p>
<ul className="list-disc pr-4 space-y-2 rtl text-right">
  <li>
    <strong>بين الطلاب:</strong> الجامعة توفر بيئة عادلة وداعمة للطلاب كافة، خاصة الفئات الضعيفة، وتمنع التمييز بكل أشكاله.
  </li>
  <li>
    <strong>بين الأكاديميين والموظفين:</strong> ضمان العدالة وتكافؤ الفرص، معالجة الشكاوى المتعلقة بالتمييز، ودورات تدريبية سنوية.
  </li>
  <li>
    <strong>بين الأفراد من خارج الجامعة:</strong> تعامل متساوٍ مع جميع الزائرين والمستفيدين من خدمات الجامعة، ودعم مجتمعي فعّال للفئات الأولى بالرعاية.
  </li>
</ul>

            </div>

          </div>
        </div>
      )}
    
    </div>
  );
}
