import React from 'react'
import video from "../../assets/video.mp4"
import { TypeAnimation } from 'react-type-animation';
import Services from '../Services/Services';
import News from '../News/News';
import Excellence from '../Excellence/Excellence';
import Scientists from '../Scientists/Scientists';

export default function Home() {

    

      return (
        <>
          <div className=" relative w-screen">
            {/* فيديو الخلفية */}
            <video className="w-full h-screen object-cover " src={video} autoPlay muted loop playsInline />
      
            {/* نص متحرك */}
            <div className="absolute top-1/2 right-[8%] translate-y-[-50%] text-white text-2xl p-4 font-medium">
              <TypeAnimation
                sequence={[
                  "نقدم تجربة تعليمية رائدة تحقق ريادة التعليم فى عصر الابتكار والتحول الرقمى للانطلاق نحو جامعات الجيل الرابع الذكية", 2000,
                  "نسعى بخطوات جادة لتلبية احتياجات المجتمع ونساهم فى تنمية المجتمع ورفع مستوى الحياة تحقيقا لرؤية مصر 2030", 2000,
                  "نحرص على تخريج أجيال متميزة التى تتمتع بالمهارات اللازمة لمواجهة تحديات سوق العمل بثقة وكفاءة", 2000,
                  "جامعة طنطا تحصل على جائزه التميز لمدة عامين على التوالى", 2000
                ]}
                style={{ fontSize: "1.5em", lineHeight: "1.5" }}
                repeat={Infinity}
              />
            </div>
          </div>
          <Services/>
          <News/>
          <Excellence/>
          <Scientists/>
        </>
        
      );
}
