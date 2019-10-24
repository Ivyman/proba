import React from "react";
import { Link } from "react-router-dom";

import { IPath } from "@src/types/path";

import { Nav } from "./elements";

export const Navbar: React.FC<{ items: IPath[] }> = ({ items }) => (
  <Nav>
    {items.map(({ path, label }) => (
      <Link key={path} to={path}>
        {label}
      </Link>
    ))}
  </Nav>
);
