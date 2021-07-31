import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <Link style={navStyle} to="/nationalities">
            Nationalities
          </Link>
        </li>
        <li>
          <Link style={navStyle} to="/genders">
            Gender
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
