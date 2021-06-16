import { NavLink, useHistory } from "react-router-dom";
import React, { useContext } from "react";
import { isLoggedIn, logout } from "./../utils/auth";

import { ThemeContext } from "./../context/theme/ThemeContext";

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
      className="mainHeader header"
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

      {!isLoggedIn() ? (
        <button className="header__btn" onClick={handleGoToLogin}>
          Login
        </button>
      ) : (
        <button className="header__btn" onClick={logout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default MainHeader;
