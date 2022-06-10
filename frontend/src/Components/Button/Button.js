import React from "react";
import "./Button.css";

const STYLES = [
  "btn--primary--solid",
  "btn--warning--solid",
  "btn--danger--solid",
  "btn--success--solid",
  "btn--primary--outline",
  "btn--warning--outline",
  "btn--danger--outline",
  "btn--success--outline",
  "btn--transparent--solid",
  "btn--register--navbar",
  "btn--logIn--logIn",
  "btn--logIn--register",
];

const SIZES = ["medium--btn", "small--btn", "extra--large--btn"];
const BUTTONSTYPES = ["btn", "btn--t"];

export const Button = ({
  children,
  buttonType,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkButtonType = BUTTONSTYPES.includes(buttonType) ? buttonType : BUTTONSTYPES[0];
  return (
    <button
      className={`${checkButtonType} ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
