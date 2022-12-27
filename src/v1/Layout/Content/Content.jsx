import SideBar from './SideBar/SideBar';
import SectionWrapper from './SectionWrapper/SectionWrapper';

const Content = (props) => {
  return (
    <div>
      <SideBar />
      <SectionWrapper content={props.content} />
    </div>
  );
};

export default Content;
