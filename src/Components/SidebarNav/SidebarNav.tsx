import React from "react";
import { Link } from "react-router-dom";

import { IPath } from "@src/types/path";
import { CatalogIcon } from "@src/assets/icons";

import { Wrapper } from "./elements";

export const SidebarNav: React.FC<{ items: IPath[] }> = ({ items }) => (
  <Wrapper>
    {items.map(({ path, label, icon }) => (
      <Link key={path} to={path}>
        {label}
      </Link>
    ))}
  </Wrapper>
);
