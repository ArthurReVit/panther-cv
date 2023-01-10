import { useState, useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import "./Layout.css";

const Layout = () => {
  const [content, setContent] = useState("aboutMe");
  const { language } = useContext(LanguageContext);

  return (
    <div className="layout">
      <Header
        onAboutMeClick={() => setContent("aboutMe")}
        onExperienceClick={() => setContent("experience")}
        onKnowledgeClick={() => setContent("knowledge")}
        language={language}
      />
      <Content content={content} />
      <Footer />
    </div>
  );
};

export default Layout;
