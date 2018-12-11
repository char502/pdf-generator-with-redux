import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1 className="SOW_h1">Statement of Work (SOW) Application</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      PDF Gen Main
    </NavLink>
    {`   `}
    <NavLink to="/RetrievePrevious" activeClassName="is-active">
      RetrievePrevious
    </NavLink>
    {`   `}
    <NavLink to="/ProfessionalServices" activeClassName="is-active">
      Professional Services
    </NavLink>
  </header>
);

export default Header;
