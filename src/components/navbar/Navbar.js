import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2>Navbar</h2>
      <NavLink to={"/"} className="active">
        Home
      </NavLink>
      <NavLink to={"/products"} className="active">
        Products
      </NavLink>
    </div>
  );
}

export default Navbar;
