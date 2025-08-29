import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/locales/en-US.json";
import ru from "@/locales/ru-RU.json";

i18n.use(initReactI18next).init({
  resources: {
    ["en-US"]: { translation: en },
    ["ru-RU"]: { translation: ru },
  },
  lng: "ru-RU",
  fallbackLng: "ru-RU",
  interpolation: { escapeValue: false },
});

export default i18n;
