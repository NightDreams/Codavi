import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h1>Not Found 404</h1>
      <button type="default">
        {" "}
        <Link to="/">Back Home</Link>
      </button>
    </div>
  );
};
