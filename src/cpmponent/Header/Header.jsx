import React from "react";
import { Link, NavLink } from "react-router";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <h1>i am header</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mobiles">mobiles</NavLink>
        <NavLink to="/laptops">laptops</NavLink>
        <NavLink to='/Users'>Users </NavLink>
      </nav>
    </div>
  );
};

export default Header;
