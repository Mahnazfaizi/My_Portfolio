import { useTranslation } from "react-i18next";

import "./languageSwitcher.css";
import { setCurrentLanguage } from "../../utill";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
  };

  return (
    <div className="container">
      <div className="btn-btn">
        <button
          className={` languageChanger ${
            currentLanguage === "en"
              ? "btn-primary selected "
              : "btn-primary selected "
          } `}
          onClick={() => changeLanguage("en")}
        >
          En
         
        </button>
        <span> &nbsp;&nbsp;&nbsp;</span>
        <button
          className={`languageChanger ${
            currentLanguage === "fr"
              ? "btn-primary selected "
              : "btn-primary selected"
          } `}
          onClick={() => changeLanguage("fr")}
        >
          Fr
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
