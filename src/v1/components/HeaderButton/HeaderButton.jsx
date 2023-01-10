// IMPORTANT NOTE:
// This component will be redesigned to become a Link provided
// by react-router-dom when the package gets installed.
// The current functionality of the component has been created with only
// demonstration purposes.

import "./HeaderButton.css";

const HeaderButton = (props) => {
  return (
    <button className="headerButton" onClick={props.onClick}>
      {props.children.toUpperCase()}
    </button>
  );
};

export default HeaderButton;
