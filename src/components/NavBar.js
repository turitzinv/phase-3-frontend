import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "150px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "green",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink to="/" style={linkStyles}>
        Home
      </NavLink>
      <NavLink to="/librarylist" style={linkStyles}>
        Library List
      </NavLink>
      <NavLink to="/createnewbook" style={linkStyles}>
        Create New Book
      </NavLink>
    </div>
  );
}

export default NavBar;