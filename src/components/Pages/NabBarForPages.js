import React from "react";
import { NavLink } from "react-router-dom";

function NabBarForPages() {
  return (
    <nav className="primary-nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/details">Details</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/submit">Submit</NavLink>
    </nav>
  );
}

export default NabBarForPages;
