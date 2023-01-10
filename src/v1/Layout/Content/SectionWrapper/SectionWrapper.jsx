import AboutMe from "./AboutMe/AboutMe";
import Experience from "./Experience/Experience";
import Knowledge from "./Knowledge/Knowledge";

import "./SectionWrapper.css";

const SectionWrapper = (props) => {
  return (
    <div className="sectionWrapper">
      {props.content === "aboutMe" && <AboutMe />}
      {props.content === "experience" && <Experience />}
      {props.content === "knowledge" && <Knowledge />}
    </div>
  );
};

export default SectionWrapper;
