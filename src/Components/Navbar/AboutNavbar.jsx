import React from 'react'
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';

export default function AboutNavbar() {
  const { t } = useTranslation();

  return (
    <>
      <div className='bg-[--main-color] w-screen mt-20 py-4'>
        <ul className='flex flex-row lg:gap-4 lg:mr-32 text-white'>
          <li>
            <NavLink
              to="vision"
              className={({ isActive }) =>
                `whitespace-nowrap ${isActive
                  ? 'bg-white text-[--main-color] px-3 py-1 rounded-md'
                  : 'hover:bg-white hover:text-[--main-color] px-3 py-1 rounded-md'
                }`}
            >
              {t("الرؤية")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="mission"
              className={({ isActive }) =>
                isActive
                  ? 'bg-white text-[--main-color] px-3 py-1 rounded-md'
                  : 'hover:bg-white hover:text-[--main-color] px-3 py-1 rounded-md'
              }
            >
              {t("الرسالة")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="goals"
              className={({ isActive }) =>
                isActive
                  ? 'bg-white text-[--main-color] px-3 py-1 rounded-md'
                  : 'hover:bg-white hover:text-[--main-color] px-3 py-1 rounded-md'
              }
            >
              {t("الأهداف")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="quality"
              className={({ isActive }) =>
                `whitespace-nowrap ${isActive
                  ? 'bg-white text-[--main-color] px-3 py-1 rounded-md'
                  : 'hover:bg-white hover:text-[--main-color] px-3 py-1 rounded-md'
                }`}
            >
              {t("سياسة الجودة")}
            </NavLink>
          </li>
          <li>
            <a
              href="https://tanta.edu.eg/files/Strategic-Plan2021-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap hover:bg-white hover:text-[--main-color] px-3 py-1 rounded-md"
            >
              {t("الخطة الاستراتيجية")}
            </a>

          </li>
        </ul>
      </div>
    </>
  );
}
