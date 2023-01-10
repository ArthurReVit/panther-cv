// IMPORTANT NOTE:
// We need to improve the translation handling
// since it's gonna cause problems when the user clicks
// in any language twice.

import { useState } from "react";
import translation from "../assets/translation/translation";

import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

import "./Layout.css";

const Layout = () => {
  const { english, spanish } = translation;
  const [content, setContent] = useState("aboutMe");
  const [language, setLanguage] = useState(spanish);

  const handleLanguage = () => {
    if (language === spanish) {
      setLanguage(english);
    }

    if (language === english) {
      setLanguage(spanish);
    }
  };

  return (
    <div className="layout">
      <Header
        onAboutMeClick={() => setContent("aboutMe")}
        onExperienceClick={() => setContent("experience")}
        onKnowledgeClick={() => setContent("knowledge")}
        onToogleLanguage={handleLanguage}
        language={language}
      />
      <Content content={content} />
      <Footer />
    </div>
  );
};

export default Layout;
