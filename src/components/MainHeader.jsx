import React, { useContext } from "react";

import { NavLink } from "react-router-dom";
import { ThemeContext } from "./../context/theme/ThemeContext";

const MainHeader = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <div
      // style={{
      //   backgroundColor: !isDark ? "yellow" : "black",
      // }}
      className="mainHeader"
    >
      <NavLink to="/" exact activeClassName="mainHeader__active">
        Home
      </NavLink>
      <NavLink to="/expenses" activeClassName="mainHeader__active">
        My Expenses
      </NavLink>
      <NavLink to="/about" activeClassName="mainHeader__active">
        About
      </NavLink>
    </div>
  );
};

export default MainHeader;
