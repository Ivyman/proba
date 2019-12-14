import React from "react";
import { Link } from "react-router-dom";

import { IPathWithIcon } from "@src/types/path";
import { Wrapper } from "./elements";
import GenericIcon from "@src/icons/Icon";

export const SidebarNav: React.FC<{ items: IPathWithIcon[] }> = ({ items }) => (
  <Wrapper>
    {items.map(({ path, label, icon }) => (
      <Link key={path} to={path}>
        <GenericIcon name={icon} />
        {label}
      </Link>
    ))}
  </Wrapper>
);
