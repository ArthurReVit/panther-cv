import { createContext, useState } from "react";
import translation from "../assets/translation/translation";

export const LanguageContext = createContext();

const LanguageContextProvider = (props) => {
  const { english, spanish } = translation;
  const [language, setLanguage] = useState(spanish);

  const setEnglish = () => {
    setLanguage(english);
  };

  const setSpanish = () => {
    setLanguage(spanish);
  };

  return (
    <LanguageContext.Provider value={{ language, setEnglish, setSpanish }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
