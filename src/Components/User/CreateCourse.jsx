import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

export default function CreateCourse() {
  const navigate = useNavigate()
  let headers = {
  Authorization: `Bearer ${localStorage.getItem('userToken')}`
  }

  // ✅ Validation Schema
  const validationSchema = yup.object().shape({
    courseCode: yup.string().required('من فضلك أدخل كود المقرر'),
    courseName: yup.string().required('من فضلك أدخل اسم المقرر'),
    creditHours: yup
      .number()
      .required('من فضلك أدخل عدد الساعات')
      .positive('عدد الساعات يجب أن يكون رقم موجب')
      .integer('عدد الساعات يجب أن يكون رقمًا صحيحًا'),
    departmentID: yup
      .number()
      .required('من فضلك أدخل رقم القسم')
      .integer('رقم القسم يجب أن يكون رقمًا صحيحًا')
  })

  // ✅ Formik Setup
  const formik = useFormik({
    initialValues: {
      courseCode: '',
      courseName: '',
      creditHours: '',
      departmentID: ''
    },
    onSubmit: handleSubmit,
    validationSchema
  })

  // ✅ Handle Submit
  async function handleSubmit(values) {
    try {
      const { data } = await axios.post('https://tantaappdemo.runasp.net/api/courses', values , {headers:headers})
      console.log('تم إرسال المقرر:', data)
      toast.success('تم إرسال بيانات المقرر بنجاح')
    } catch (error) {
      console.error('حدث خطأ أثناء الإرسال:', error)
      toast.error('حدث خطأ أثناء إرسال البيانات')
    }
  }

  return (
    <form className="max-w-md mx-auto my-32" onSubmit={formik.handleSubmit}>
      <Toaster />
      <p className="text-xl text-[--main-color] font-semibold p-8">Create Course</p>

      {/* courseCode */}
      <label className="block mb-1 text-sm font-medium text-gray-700">كود المقرر</label>
      <input
        type="text"
        name="courseCode"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.courseCode}
        className="mb-3 w-full p-2 border rounded"
      />
      {formik.touched.courseCode && formik.errors.courseCode && (
        <p className="text-red-600 text-sm">{formik.errors.courseCode}</p>
      )}

      {/* courseName */}
      <label className="block mb-1 text-sm font-medium text-gray-700">اسم المقرر</label>
      <input
        type="text"
        name="courseName"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.courseName}
        className="mb-3 w-full p-2 border rounded"
      />
      {formik.touched.courseName && formik.errors.courseName && (
        <p className="text-red-600 text-sm">{formik.errors.courseName}</p>
      )}

      {/* creditHours */}
      <label className="block mb-1 text-sm font-medium text-gray-700">عدد الساعات</label>
      <input
        type="number"
        name="creditHours"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.creditHours}
        className="mb-3 w-full p-2 border rounded"
      />
      {formik.touched.creditHours && formik.errors.creditHours && (
        <p className="text-red-600 text-sm">{formik.errors.creditHours}</p>
      )}

      {/* departmentID */}
      <label className="block mb-1 text-sm font-medium text-gray-700">رقم القسم</label>
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

      {/* submit button */}
      <button
        type="submit"
        className="w-full bg-[--main-color] text-white py-2 mt-4 rounded hover:opacity-90"
      >
        إرسال بيانات المقرر
      </button>
    </form>
  )
}
