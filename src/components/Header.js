import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Statement of Work (SOW) Application</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      PDF Gen Main
    </NavLink>
    {"   "}
    <NavLink
      to="/ProfessionalServices"
      activeClassName="is-active"
      exact={true}
    >
      Professional Services
    </NavLink>
  </header>
);

export default Header;
