import React from 'react'

export default function Goals() {
  return (
    <>
      <div className='flex lg:mx-32'>
        <div className="w-full md:w-2/3 p-4 overflow-x-auto">
          <table className="table-auto w-full border border-gray-300 text-right">
            <thead>
              <tr className="bg-teal-100 text-teal-800">
                <th className="border border-gray-300 p-2 w-1/3">المسار</th>
                <th className="border border-gray-300 p-2">الأهداف الاستراتيجية</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr>
                <td className="border border-gray-300 p-3 font-semibold text-teal-800 align-top">
                  رفع كفاءة القدرة المؤسسية لتحسين الوضع التنافسي
                </td>
                <td className="border border-gray-300 p-3 space-y-2">
                  <p>١. دعم وتطوير الأداء المؤسسي للجامعة.</p>
                  <p>٢. استكمال وتطوير واستحداث مباني و منشآت الجامعة.</p>
                  <p>٣. تطوير منظومة تكنولوجيا المعلومات و الاتصالات.</p>
                  <p>٤. دعم وتنمية قدرات ومهارات أعضاء هيئة التدريس والهيئة المعاونة والقيادات الإدارية.</p>
                  <p>٥. دعم ورفع قدرات الجهاز الإداري والقيادات الإدارية.</p>
                  <p>٦. تنمية الموارد الذاتية و الامكانات المادية للجامعة.</p>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3 font-semibold text-teal-800 align-top">
                  الارتقاء بالمنظومة التعليمية ورفع جدارات التنافسية للطلاب والخريجين
                </td>
                <td className="border border-gray-300 p-3 space-y-2">
                  <p>٧. تطوير واستحداث البرامج التعليمية وفقا لاحتياجات سوق العمل والمستحدثات العلمية.</p>
                  <p>٨. رفع جودة أساليب التعليم والتعلم وتطوير نظم التقويم والامتحانات.</p>
                  <p>٩. دعم وتنمية القدرات التنافسية للطلاب والخريجين.</p>
                  <p>١٠. تحقيق الجودة والتميز والحصول على الاعتماد المؤسسي.</p>
                </td>
              </tr>

              {/* Row 3 */}
              <tr>
                <td className="border border-gray-300 p-3 font-semibold text-teal-800 align-top">
                  تطوير منظومة البحث العلمي وتحقيق التنافسية والتميز والابتكار
                </td>
                <td className="border border-gray-300 p-3 space-y-2">
                  <p>١١. ربط منظومة البحث العلمي بخطط التنمية الاقتصادية والاجتماعية.</p>
                  <p>١٢. تطوير البنية التحتية اللازمة للبحث العلمي ودعم المراكز البحثية.</p>
                  <p>١٣. تطوير قدرات أعضاء هيئة التدريس في البحث والنشر العلمي.</p>
                  <p>١٤. توثيق العلاقات مع المؤسسات العامة والخاصة بالمجتمع المدني.</p>
                  <p>١٥. دعم حقوق الملكية الفكرية وأخلاقيات البحث العلمي.</p>
                  <p>١٦. تحديث اللوائح المنظمة للبحث العلمي.</p>
                </td>
              </tr>

              {/* Row 4 */}
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3 font-semibold text-teal-800 align-top">
                  تعزيز محاور ومجالات الشراكة لقطاع خدمة المجتمع وتنمية البيئة لتحقيق التنمية المستدامة
                </td>
                <td className="border border-gray-300 p-3 space-y-2">
                  <p>١٧. تدريب وتأهيل الموارد البشرية لقطاع خدمة المجتمع وتنمية البيئة.</p>
                  <p>١٨. إنشاء واستخدام نظام معلومات إلكتروني لهذا القطاع.</p>
                  <p>١٩. تفعيل المحاور الاستراتيجية لقطاع خدمة المجتمع وتنمية البيئة.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


    </>
  )
}
