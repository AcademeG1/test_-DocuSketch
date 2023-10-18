import React from "react";
import "./button.css";

const Button = ({
  changeIcon,
}: {
  changeIcon: (event: React.MouseEvent<HTMLButtonElement>) => void;
}): JSX.Element => {
  return (
    <button className="button__icon_switch" onClick={changeIcon}>
      click to change
    </button>
  );
};

export default Button;
