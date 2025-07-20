import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'


export default function User() {
  const navigate = useNavigate();

  // ✅ Validation Schema
  const validationSchema = yup.object().shape({
    category: yup
    .number()
    .oneOf([1, 2, 3, 4], 'من فضلك اختر فئة صحيحة')
    .required('من فضلك اختر فئة'),

    password: yup
    .string()
    .required('الرقم القومي مطلوب')
    .matches(/^\d+$/, 'الرقم القومي يجب أن يحتوي على أرقام فقط')


  });

  // ✅ Formik Setup
  const formik = useFormik({
    initialValues: {
      category: '',
      password: ''
    },
    onSubmit: handleRegister,
    validationSchema
  });

  // ✅ Handle Submit
  async function handleRegister(values) {
    try {
      const { data } = await axios.post(`http://tantaappdemo.runasp.net/api/auth/login`, values );
      console.log(data);
      if(data.message === 'Login successful'&& data.roleName === `Admin`){
        navigate(`/Admin`);
        localStorage.setItem('userToken', values.data.token)
      }
      else if (data.message === 'Login successful') {
        navigate(`/UserProfile`);
      }
    } catch (error) {
      console.error('حدث خطأ أثناء تسجيل الدخول', error);
    }
  }

  return (
    <form className="max-w-sm mx-auto my-36" onSubmit={formik.handleSubmit}>
      {/* select category */}
      <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">اختر الفئة</label>
      <select
        id="category"
        name="category"
        onChange={(e) => {formik.setFieldValue('category', Number(e.target.value));}}
        onBlur={formik.handleBlur}
        value={formik.values.category}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[--main-color] focus:border-[--main-color] block w-full p-2.5"
      >
        <option value="" disabled hidden>
          اختر من القائمة
        </option>
        <option  value="1">طالب بكالوريوس / ليسانس</option>
        <option value='2'>طالب دراسات عليا</option>
        <option value='3'>عضو هيئة تدريس</option>
        <option value='4'>تسجيل عامل</option>
      </select>
      {formik.touched.category && formik.errors.category && (
        <div className="text-red-600 text-sm mt-1">{formik.errors.category}</div>
      )}

      {/* password input */}
      <div className="mb-5 mt-8">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">الرقم القومي</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[--main-color] focus:border-[--main-color] block w-full p-2.5"
        />
        {formik.touched.password && formik.errors.password && (
          <div className="text-red-600 text-sm mt-1">{formik.errors.password}</div>
        )}
      </div>

      {/* submit button */}
      <button
        type="submit"
        className="w-full bg-[--main-color] text-white py-2 rounded-lg hover:opacity-90 transition"
      >
        تسجيل الدخول
      </button>
    </form>
  );
}
