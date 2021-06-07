import { Link, useHistory, useLocation } from "react-router-dom";

import React from "react";

const NotFound = () => {
  let history = useHistory();
  let location = useLocation();

  return (
    <div className="page-container">
      <h1>Not Found</h1>
      <p>
        <strong>{location.pathname}</strong>&nbsp; is not found &spades;
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Go to Tasks Page
      </button>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;
