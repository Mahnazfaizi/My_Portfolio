import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en.json";
import frTranslation from "./locales/fr.json";
import { getCurrentLanguage } from "./utill";

const currentLanguage = getCurrentLanguage();

i18n.use(initReactI18next).init({
    resources: {
        en: {translation: enTranslation},
        fr: {translation: frTranslation}
    },
    lng: currentLanguage || "en",
    fallbackLng: 'en',
});

export default i18n;
