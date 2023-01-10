import "./NameBadge.css";

const NameBadge = (props) => {
  return <h1 className="nameBadge">{props.children.toUpperCase()}</h1>;
};

export default NameBadge;
