import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast , {Toaster} from 'react-hot-toast'


export default function StudySchedule() {
  const navigate = useNavigate()
  
  
  // ✅ Validation Schema
  const validationSchema = yup.object().shape({
    scheduleName: yup.string().required('من فضلك أدخل اسم الجدول'),
    scheduleLink: yup.string().required('من فضلك أدخل رابط الجدول'),
    levelID: yup.string().required('من فضلك اختر المستوى'),
    departmentID: yup.string().required('من فضلك اختر القسم'),
    facultyID: yup.string().required('من فضلك اختر الكلية'),
    academicYear: yup.string().required('من فضلك أدخل السنة الدراسية'),
    semester: yup.string().required('من فضلك اختر الفصل الدراسي')
  })

  // ✅ Formik Setup
  const formik = useFormik({
    initialValues: {
      scheduleName: '',
      scheduleLink: '',
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
    const token = localStorage.getItem('userToken')
    console.log("التوكن المستخدم:", token)

    const headers = {
      Authorization: `Bearer ${token}`
    }

    const { data } = await axios.post('https://tantaappdemo.runasp.net/api/studyschedule', values, { headers:headers })
    console.log('تم الإرسال:', data)
    toast.success(`تم الارسال `)
  } catch (error) {
    console.error('حدث خطأ أثناء إرسال الجدول:', error)
    toast.error("فشل في الإرسال: " + error.response?.data?.message || "حدث خطأ")
  }
}


  return (
    <form className="max-w-md mx-auto my-32" onSubmit={formik.handleSubmit}>
      <p className='text-xl text-[--main-color] font-semibold p-8'>
            StudySchedule</p>
      {/* scheduleName */}
      <label className="block mb-1 text-sm font-medium text-gray-700">اسم الجدول</label>
      <input
        type="text"
        name="scheduleName"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.scheduleName}
        className="mb-3 w-full p-2 border rounded"
      />
      {formik.touched.scheduleName && formik.errors.scheduleName && (
        <p className="text-red-600 text-sm">{formik.errors.scheduleName}</p>
      )}

      {/* scheduleLink */}
      <label className="block mb-1 text-sm font-medium text-gray-700">رابط الجدول</label>
      <input
        type="text"
        name="scheduleLink"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.scheduleLink}
        className="mb-3 w-full p-2 border rounded"
      />
      {formik.touched.scheduleLink && formik.errors.scheduleLink && (
        <p className="text-red-600 text-sm">{formik.errors.scheduleLink}</p>
      )}

      {/* levelID */}
      <label className="block mb-1 text-sm font-medium text-gray-700">المستوى</label>
      <input
        type="text"
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
        type="text"
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
      <button type="submit" className="w-full bg-[--main-color] text-white py-2 mt-4 rounded hover:opacity-90">
        إرسال الجدول
      </button>
    </form>
  )
}
