import { NavLink } from "react-router-dom";
import React from "react";

const MainHeader = () => {
  return (
    <div className="mainHeader">
      <NavLink to="/" exact activeClassName="mainHeader__active">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="mainHeader__active">
        About
      </NavLink>
    </div>
  );
};

export default MainHeader;
