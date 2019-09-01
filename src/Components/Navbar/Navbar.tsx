import React from "react";
import { Link } from "react-router-dom";
import styled from "@src/styles";

import { IPath } from "@src/types/path";

type INavbarComponent = React.FunctionComponent<{ items: IPath[] }>;

export const Navbar: INavbarComponent = ({ items }) => (
  <Nav>
    {items.map(({ path, label }) => (
      <Link key={path} to={path}>
        {label}
      </Link>
    ))}
  </Nav>
);

export const Nav = styled.nav`
  display: flex;
  a {
    margin-right: 20px;
  }
`;
