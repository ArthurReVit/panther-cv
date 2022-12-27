import { useState } from 'react';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

const Layout = () => {
  const [content, setContent] = useState('aboutMe');

  return (
    <div>
      <Header
        onAboutMeClick={() => setContent('aboutMe')}
        onExperienceClick={() => setContent('experience')}
        onKnowledgeClick={() => setContent('knowledge')}
      />
      <Content content={content} />
      <Footer />
    </div>
  );
};

export default Layout;
