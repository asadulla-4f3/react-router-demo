import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "./Auth";

function Navbar() {
  const auth = useAuth();

  return (
    <nav className="primary-nav">
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link> */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      {!auth.user && <NavLink to="/login">Login</NavLink>}
    </nav>
  );
}

export default Navbar;
