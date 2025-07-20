import React from 'react'
import img1 from '../../assets/111.png'
import img2 from '../../assets/222.png'
import img3 from '../../assets/333.png'
import img4 from '../../assets/444.png'
import { NavLink } from 'react-router-dom'

export default function Admin() {
  
  const features = [
    { name: 'StudySchedule', image: img1 },
    { name: 'ExamSchedule', image: img2 },
    { name: 'CreateFaculty', image: img3 },
    { name: 'CreateCourse', image: img4 },
  ];
  
    return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-8">
        <p className='text-xl text-[--main-color] font-semibold p-8'>
            يمكنك اضافة الخدمة من هنا
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 cursor-pointer">
            {features.map((feature, index) => (
            <NavLink to={`/${feature.name}`} key={index}><div
                
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 ease-in-out flex flex-col items-center gap-4"
            >
                <img
                src={feature.image}
                alt={feature.name}
                className="w-16 h-16 object-contain text-main-color"
                />
                <h2 className="text-[--main-color] text-base font-semibold">{feature.name}</h2>
            </div></NavLink>
            ))}
        </div>
    </div>


  )
}
