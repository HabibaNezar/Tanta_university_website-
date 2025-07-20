import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

export default function CreateFaculty() {
  const navigate = useNavigate()
  let headers = {
  Authorization: `Bearer ${localStorage.getItem('userToken')}`
  }


  // ✅ Validation Schema
  const validationSchema = yup.object().shape({
    facultyID: yup.string().required('من فضلك أدخل معرف الكلية'),
    facultyName: yup.string().required('من فضلك أدخل اسم الكلية')
  })

  // ✅ Formik Setup
  const formik = useFormik({
    initialValues: {
      facultyID: '',
      facultyName: ''
    },
    onSubmit: handleSubmit,
    validationSchema
  })

  // ✅ Handle Submit
  async function handleSubmit(values) {
  try {
    console.log("القيم المرسلة:", values)
    console.log("الهيدر:", headers)

    const { data } = await axios.post(
      'https://tantaappdemo.runasp.net/api/faculties',
      values,
      { headers }
    )

    console.log('تم الإرسال:', data)
    toast.success('تم إرسال بيانات الكلية بنجاح')
  } catch (error) {
    if (error.response) {
      const message = error.response.data.message;

      // 🔴 معرف الكلية مكرر
      if (message === "Faculty ID already exists") {
        toast.error("⚠️ معرف الكلية مستخدم بالفعل. برجاء اختيار معرف آخر.");
      }

      // 🔴 اسم الكلية مكرر
      else if (message === "Faculty name already exists") {
        toast.error("⚠️ اسم الكلية موجود بالفعل. برجاء اختيار اسم آخر.");
      }

      // 🔴 خطأ آخر من السيرفر برسالة عامة
      else {
        toast.error(`حدث خطأ: ${message}`);
      }

      console.error("رد السيرفر:", error.response.data);
    } else {
      toast.error('❌ حدث خطأ في الاتصال بالسيرفر');
      console.error("خطأ:", error.message);
    }
  }
}



  return (
    <form className="max-w-md mx-auto my-32" onSubmit={formik.handleSubmit}>
      <Toaster />
      <p className="text-xl text-[--main-color] font-semibold p-8">إضافة كلية</p>

      {/* facultyID */}
      <label className="block mb-1 text-sm font-medium text-gray-700">معرف الكلية</label>
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

      {/* facultyName */}
      <label className="block mb-1 text-sm font-medium text-gray-700">اسم الكلية</label>
      <input
        type="text"
        name="facultyName"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.facultyName}
        className="mb-3 w-full p-2 border rounded"
      />
      {formik.touched.facultyName && formik.errors.facultyName && (
        <p className="text-red-600 text-sm">{formik.errors.facultyName}</p>
      )}

      {/* submit button */}
      <button
        type="submit"
        className="w-full bg-[--main-color] text-white py-2 mt-4 rounded hover:opacity-90"
      >
        إرسال بيانات الكلية
      </button>
    </form>
  )
}
