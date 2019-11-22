import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLink = styled.div`
  color: white;

  a {
    color: white;
    text-decoration-color: #ff0033;
  }
`;

export default function NavItem(props) {
  return (
    <NavLink>
      <Link to={props.link}>{props.name}</Link>
    </NavLink>
  );
}
