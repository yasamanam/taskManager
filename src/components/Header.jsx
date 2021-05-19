import Button from "./Button";
import Proptypes from "prop-types";
import React from "react";

/**
 *Header component is for displaying main title
 */

const Header = ({ headerTitle, num, onAdd, showAddtask }) => {
  const handleClick = (a) => {
    console.log("Click", a);
    onAdd();
  };

  return (
    <header className="header">
      <h1>{headerTitle}</h1>
      <Button
        buttonLabel={showAddtask ? "CLOSE" : "ADD"}
        classes={showAddtask ? "btn--red" : "btn--green"}
        onClick={handleClick}
      />
    </header>
  );
};

Header.defaultProps = {
  headerTitle: "Default Header",
  num: 0,
};

Header.propTypes = {
  headerTitle: Proptypes.string,
  num: Proptypes.number,
};

export default Header;
