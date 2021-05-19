import Proptypes from "prop-types";
import React from "react";

const Button = ({ buttonLabel, classes, onClick }) => {
  return (
    <button onClick={() => onClick("test")} className={`btn ${classes}`}>
      {buttonLabel}
    </button>
  );
};

Button.propTypes = {
  buttonLabel: Proptypes.string,
  classes: Proptypes.string,
  onClick: Proptypes.func,
};

export default Button;
