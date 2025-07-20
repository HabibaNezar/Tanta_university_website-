import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default function NewsArchieve() {
  function getData() {
    return axios.get(`https://api-login.tanta.edu.eg/api/UniversityNews/`);
  }

  const { data } = useQuery({
    queryKey: ['recentProduct'],
    queryFn: getData,
  });

  return (
    <div className="px-4 sm:px-6 lg:px-16 py-10 max-w-screen-xl mx-auto">
      {data?.data?.map((newsItem) => (
        <div
          key={newsItem.id}
          className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6 items-center border-b pb-10"
          dir="rtl"
        >
          {/* صورة الخبر */}
          <div>
            <img
              src={newsItem.mainImageUrl}
              alt={newsItem.nameAr}
              className="w-full h-auto rounded shadow-md"
            />
          </div>

          {/* تفاصيل الخبر */}
          <div className="text-right">
            <h2 className="text-2xl font-bold text-[--main-color] mb-4 leading-relaxed">
              {newsItem.nameAr}
            </h2>
            <p className="text-gray-700 leading-loose mb-4">
              {newsItem.breifAr}
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:items-center text-sm text-gray-500">
              {/* التاريخ */}
              <span>
                {/* {newsItem.lastUpdateDate} */}
              </span>

              {/* زر اقرأ المزيد */}
              <NavLink
                to={`/NewsDetails/${newsItem.id}`}
                className="bg-[--main-color] text-white px-4 py-2 rounded hover:bg-[#075985] transition-all duration-300 text-center w-fit"
              >
                اقرأ المزيد
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
