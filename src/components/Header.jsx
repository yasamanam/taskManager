import React, { useEffect } from "react";

import Button from "./Button";
import Proptypes from "prop-types";

/**
 *Header component is for displaying main title
 */

const Header = ({ headerTitle, num, onAdd, showAddtask }) => {
  const handleClick = (a) => {
    onAdd();
  };

  useEffect(() => {
    /*
     * For the First time
     */
    console.log("Header component mounted");
    document.addEventListener("click", () => console.log("event"));

    return () => {
      document.removeEventListener("click", () => console.log("event"));
    };
  }, []);

  useEffect(() => {
    console.log(countStars());
  }, [headerTitle]);

  const countStars = () => {
    return headerTitle.split("*").length - 1;
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
