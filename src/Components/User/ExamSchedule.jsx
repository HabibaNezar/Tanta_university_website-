import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

export default function ExamSchedule() {
  const navigate = useNavigate()
  let headers = {
    Authorization: `Bearer ${localStorage.getItem('userToken')}`
  }

  // ✅ Validation Schema
  const validationSchema = yup.object().shape({
    examScheduleName: yup.string().required('من فضلك أدخل اسم جدول الامتحانات'),
    examScheduleLink: yup.string().required('من فضلك أدخل رابط جدول الامتحانات'),
    levelID: yup.number().required('من فضلك أدخل المستوى'),
    departmentID: yup.number().required('من فضلك أدخل القسم'),
    facultyID: yup.string().required('من فضلك أدخل الكلية'),
    academicYear: yup.string().required('من فضلك أدخل السنة الدراسية'),
    semester: yup.string().required('من فضلك أدخل الفصل الدراسي')
  })

  // ✅ Formik Setup
  const formik = useFormik({
    initialValues: {
      examScheduleName: '',
      examScheduleLink: '',
      levelID: '',
      departmentID: '',
      facultyID: '',
      academicYear: '',
      semester: ''
    },
    onSubmit: handleSubmit,
    validationSchema
  })

  // ✅ Handle Submit
  async function handleSubmit(values) {
  try {
    console.log("القيم المرسلة:", values);
    console.log("الهيدر:", headers);

    const { data } = await axios.post(
      'https://tantaappdemo.runasp.net/api/examschedule',
      values,
      { headers }
    );

    console.log('تم الإرسال:', data);
    toast.success('✅ تم إرسال جدول الامتحانات بنجاح');
  } catch (error) {
    if (error.response) {
      console.error('رد السيرفر:', error.response.data);

      const message = error.response.data.message;

      if (message) {
        toast.error(`⚠️ ${message}`);
      } else {
        toast.error('⚠️ حدث خطأ في البيانات المرسلة.');
      }
    } else {
      console.error('خطأ عام:', error.message);
      toast.error('❌ حدث خطأ في الاتصال بالسيرفر');
    }
  }
}


  return (
    <form className="max-w-md mx-auto my-32" onSubmit={formik.handleSubmit}>
      <Toaster />
      <p className="text-xl text-[--main-color] font-semibold p-8">ExamSchedule</p>

      {/* examScheduleName */}
      <label className="block mb-1 text-sm font-medium text-gray-700">اسم جدول الامتحانات</label>
      <input
        type="text"
        name="examScheduleName"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.examScheduleName}
        className="mb-3 w-full p-2 border rounded"
      />
      {formik.touched.examScheduleName && formik.errors.examScheduleName && (
        <p className="text-red-600 text-sm">{formik.errors.examScheduleName}</p>
      )}

      {/* examScheduleLink */}
      <label className="block mb-1 text-sm font-medium text-gray-700">رابط جدول الامتحانات</label>
      <input
        type="text"
        name="examScheduleLink"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.examScheduleLink}
        className="mb-3 w-full p-2 border rounded"
      />
      {formik.touched.examScheduleLink && formik.errors.examScheduleLink && (
        <p className="text-red-600 text-sm">{formik.errors.examScheduleLink}</p>
      )}

      {/* levelID */}
      <label className="block mb-1 text-sm font-medium text-gray-700">المستوى</label>
      <input
        type="number"
        name="levelID"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.levelID}
        className="mb-3 w-full p-2 border rounded"
      />
      {formik.touched.levelID && formik.errors.levelID && (
        <p className="text-red-600 text-sm">{formik.errors.levelID}</p>
      )}

      {/* departmentID */}
      <label className="block mb-1 text-sm font-medium text-gray-700">القسم</label>
      <input
        type="number"
        name="departmentID"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.departmentID}
        className="mb-3 w-full p-2 border rounded"
      />
      {formik.touched.departmentID && formik.errors.departmentID && (
        <p className="text-red-600 text-sm">{formik.errors.departmentID}</p>
      )}

      {/* facultyID */}
      <label className="block mb-1 text-sm font-medium text-gray-700">الكلية</label>
      <input
        type="text"
        name="facultyID"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.facultyID}
        className="mb-3 w-full p-2 border rounded"
      />
      {formik.touched.facultyID && formik.errors.facultyID && (
        <p className="text-red-600 text-sm">{formik.errors.facultyID}</p>
      )}

      {/* academicYear */}
      <label className="block mb-1 text-sm font-medium text-gray-700">السنة الدراسية</label>
      <input
        type="text"
        name="academicYear"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.academicYear}
        className="mb-3 w-full p-2 border rounded"
      />
      {formik.touched.academicYear && formik.errors.academicYear && (
        <p className="text-red-600 text-sm">{formik.errors.academicYear}</p>
      )}

      {/* semester */}
      <label className="block mb-1 text-sm font-medium text-gray-700">الفصل الدراسي</label>
      <input
        type="text"
        name="semester"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.semester}
        className="mb-3 w-full p-2 border rounded"
      />
      {formik.touched.semester && formik.errors.semester && (
        <p className="text-red-600 text-sm">{formik.errors.semester}</p>
      )}

      {/* submit button */}
      <button
        type="submit"
        className="w-full bg-[--main-color] text-white py-2 mt-4 rounded hover:opacity-90"
      >
        إرسال جدول الامتحانات
      </button>
    </form>
  )
}
