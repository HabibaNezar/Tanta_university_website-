import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to our website!",
      about: "About Us",
    },
  },
  ar: {
    translation: {
      welcome: "مرحبًا بك في موقعنا!",
      about: "معلومات عنا",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ar", // اللغة الافتراضية
  fallbackLng: "en", // استخدام الإنجليزية في حال عدم توفر الترجمة
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
