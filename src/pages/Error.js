import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="err-container">
      <h1>Error 404</h1>
      <h3>Page wasn't Found</h3>
      <Link className="btn" to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
