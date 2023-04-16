import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation col-md-3 col-sm-12">
      <ul>
        <NavLink
          to="/Knowledges"
          className={(nav) => (nav.isActive ? "nav-active links" : "links")}
        >
          <li>Compétences</li>
        </NavLink>
        <NavLink
          to="/Cv"
          className={(nav) => (nav.isActive ? "nav-active links" : "links")}
        >
          <li>CV</li>
        </NavLink>
        <NavLink
          to="/Portfolio"
          className={(nav) => (nav.isActive ? "nav-active links" : "links")}
        >
          <li>Portfolio</li>
        </NavLink>
        <NavLink
          to="/Contact"
          className={(nav) => (nav.isActive ? "nav-active links" : "links")}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
