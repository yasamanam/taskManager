import { NavLink, useHistory } from "react-router-dom";
import React, { useContext } from "react";

import { ThemeContext } from "./../context/theme/ThemeContext";
import { isLoggedIn } from "./../utils/auth";

const MainHeader = () => {
  // const { isDark, setIsDark } = useContext(ThemeContext);
  const history = useHistory();

  const handleGoToLogin = () => {
    history.push("/login");
  };

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
      {isLoggedIn() && (
        <NavLink to="/expenses" activeClassName="mainHeader__active">
          My Expenses
        </NavLink>
      )}
      <NavLink to="/about" activeClassName="mainHeader__active">
        About
      </NavLink>

      <button onClick={handleGoToLogin}>Login</button>
    </div>
  );
};

export default MainHeader;
