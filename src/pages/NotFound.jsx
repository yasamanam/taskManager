import { Link } from "react-router-dom";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p>this route is not found</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;
