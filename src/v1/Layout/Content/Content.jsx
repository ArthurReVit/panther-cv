import SideBar from "./SideBar/SideBar";
import SectionWrapper from "./SectionWrapper/SectionWrapper";

import "./Content.css";

const Content = (props) => {
  return (
    <div className="content">
      <SideBar />
      <SectionWrapper content={props.content} />
    </div>
  );
};

export default Content;
