// IMPORTANT NOTE:
// We need to create translations for this component.

import NameBadge from "../../components/NameBadge/NameBadge";
import HeaderButton from "../../components/HeaderButton/HeaderButton";

import "./Header.css";

const Header = (props) => {
  return (
    <header className="header">
      <NameBadge>Arturo A. Reyes Vital</NameBadge>

      <nav className="headerNavMenu">
        <HeaderButton onClick={props.onAboutMeClick}>About Me</HeaderButton>
        <HeaderButton onClick={props.onExperienceClick}>
          Experience
        </HeaderButton>
        <HeaderButton onClick={props.onKnowledgeClick}>Knowledge</HeaderButton>
      </nav>

      <nav className="headerLangMenu">
        <button onClick={props.onToogleLanguage} className="languageButton">
          EN
        </button>
        <button onClick={props.onToogleLanguage} className="languageButton">
          ES
        </button>
      </nav>
    </header>
  );
};

export default Header;
