import "./FlagButton.css";

const FlagButton = (props) => {
  return (
    <button onClick={props.onClick} className="flagButton">
      <img className="flag" src={props.flag} alt={props.alt} />
      <span className="flagLabel">{props.label}</span>
    </button>
  );
};

export default FlagButton;
