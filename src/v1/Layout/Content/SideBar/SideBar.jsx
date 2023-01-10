import ContactData from "./ContactData/ContactData";
import Languages from "./Languages/Languages";
import NameCard from "./NameCard/NameCard";
import PersonalData from "./PersonalData/PersonalData";

import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sideBar">
      <ContactData />
      <Languages />
      <NameCard />
      <PersonalData />
    </div>
  );
};

export default SideBar;
