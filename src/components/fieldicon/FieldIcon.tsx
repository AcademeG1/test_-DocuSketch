import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FieldIcon.css";

const FieldIcon = ({ icon }: { icon: IconDefinition }) => {
  return (
    <div className={"field-icon "}>
      <FontAwesomeIcon icon={icon} size={"6x"} />
    </div>
  );
};

export default FieldIcon;
