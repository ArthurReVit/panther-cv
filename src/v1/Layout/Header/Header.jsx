import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import NameBadge from "../../components/NameBadge/NameBadge";
import HeaderButton from "../../components/HeaderButton/HeaderButton";
import FlagButton from "../../components/FlagButton/FlagButton";
import mx from "../../assets/img/mx.png";
import us from "../../assets/img/us.png";
import "./Header.css";

const Header = (props) => {
  const { setEnglish, setSpanish } = useContext(LanguageContext);
  const t = props.language.Header;

  return (
    <header className="header">
      <NameBadge>{t.nameBadge}</NameBadge>

      <nav className="headerNavMenu">
        <HeaderButton onClick={props.onAboutMeClick}>
          {t.navButtons.About}
        </HeaderButton>
        <HeaderButton onClick={props.onExperienceClick}>
          {t.navButtons.Experience}
        </HeaderButton>
        <HeaderButton onClick={props.onKnowledgeClick}>
          {t.navButtons.Knowledge}
        </HeaderButton>
      </nav>

      <nav className="headerLangMenu">
        <FlagButton onClick={setEnglish} flag={us} label="English" />
        <FlagButton onClick={setSpanish} flag={mx} label="Español" />
      </nav>
    </header>
  );
};

export default Header;
