import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not_found">
      <h2>404</h2>
      <p>page not found</p>
      <Link to={"/"}>
        <button>Go Home</button>
      </Link>
    </div>
  );
}

export default NotFound;
