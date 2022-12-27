import AboutMe from './AboutMe/AboutMe';
import Experience from './Experience/Experience';
import Knowledge from './Knowledge/Knowledge';

const SectionWrapper = (props) => {
  return (
    <div>
      {props.content === 'aboutMe' && <AboutMe />}
      {props.content === 'experience' && <Experience />}
      {props.content === 'knowledge' && <Knowledge />}
    </div>
  );
};

export default SectionWrapper;
