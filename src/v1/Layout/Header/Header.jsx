import React from 'react';

const Header = (props) => {
  return (
    <div>
      <nav>
        <button onClick={props.onAboutMeClick}>AboutMe</button>
        <button onClick={props.onExperienceClick}>Experience</button>
        <button onClick={props.onKnowledgeClick}>Knowledge</button>
      </nav>
    </div>
  );
};

export default Header;
