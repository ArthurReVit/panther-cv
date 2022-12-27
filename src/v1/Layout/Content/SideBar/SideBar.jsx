import ContactData from './ContactData/ContactData';
import Languages from './Languages/Languages';
import NameCard from './NameCard/NameCard';
import PersonalData from './PersonalData/PersonalData';

const SideBar = () => {
  return (
    <div>
      <ContactData />
      <Languages />
      <NameCard />
      <PersonalData />
    </div>
  );
};

export default SideBar;
