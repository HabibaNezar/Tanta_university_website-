import React from 'react';
import 'leaflet/dist/leaflet.css';

export default function Location() {
  return (
    <div className="w-full min-h-screen bg-white mt-28">
      <h2 className="text-2xl font-bold text-[--main-color] my-2 mb-2 mx-36">
        موقع جامعة طنطا
      </h2>
      <div className="w-full h-[80vh] px-4">
        <iframe
          title="موقع جامعة طنطا"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54834.30349973026!2d30.92558054863282!3d30.7985967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c96555618ee3%3A0x63741335d8f09c62!2sTanta%20University!5e0!3m2!1sen!2seg!4v1752703314482!5m2!1sen!2seg"
          className="w-full h-full border border-gray-300 rounded-xl shadow-md"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
