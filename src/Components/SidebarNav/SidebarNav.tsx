import React from "react";
import { Maybe } from "true-myth";
import { Link } from "react-router-dom";

import { IPathWithIcon } from "@src/types/path";
import { Wrapper } from "./elements";
import getIcon from "@src/icons";

export const SidebarNav: React.FC<{ items: IPathWithIcon[] }> = ({ items }) => (
  <Wrapper>
    {items.map(({ path, label, icon }) => (
      <Link key={path} to={path}>
        {getIcon(Maybe.just(icon))}
        {label}
      </Link>
    ))}
  </Wrapper>
);
