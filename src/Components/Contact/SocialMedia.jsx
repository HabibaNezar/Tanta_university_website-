import React from 'react'
import contactBg from '../../assets/s.jpg'


export default function SocialMedia() {
  return (
    <div className="mb-16 z-50 mt-48">
        {/* خلفية فيها الأيقونات الثلاثة + النص */}
        {/* <div
            className="h-[400px] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${contactBg})` }}
            >
            <h2 className="text-white text-4xl font-bold ">تواصل معنا</h2>
        </div> */}
        
        <div className="w-3/4 flex flex-row justify-center gap-3 p-2 bg-[--main-color] mt-4 rounded-lg mx-auto">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white text-[#00a6ad] p-2 rounded hover:scale-110 transition-all duration-200 text-center">
            <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white text-[#00a6ad] p-2 rounded hover:scale-110 transition-all duration-200 text-center">
            <i className="fab fa-x-twitter"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white text-[#00a6ad] p-2 rounded hover:scale-110 transition-all duration-200 text-center">
            <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white text-[#00a6ad] p-2 rounded hover:scale-110 transition-all duration-200 text-center">
            <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="bg-white text-[#00a6ad] p-2 rounded hover:scale-110 transition-all duration-200 text-center">
            <i className="fab fa-telegram-plane"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="bg-white text-[#00a6ad] p-2 rounded hover:scale-110 transition-all duration-200 text-center">
            <i className="fab fa-youtube"></i>
            </a>
        </div>
    </div>

  )
}
