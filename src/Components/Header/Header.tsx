import React from "react";

import { Wrapper, Nav, MenuIconWrapper } from "./elements";
import GenericIcon from "@src/components/Icons/GenericIcon";
import Navbar from "@src/components/Navbar";
import Logo from "@src/components/Logo";

export const Header: React.FC<{
  onSwitchSidebar: () => void;
}> = ({ onSwitchSidebar }) => {
  const navbarLinks = [{ path: "/catalog", label: "Katalog" }];

  return (
    <Wrapper as="header">
      <Logo link="/catalog" />
      <Nav>
        <Navbar items={navbarLinks} />
        <MenuIconWrapper onClick={onSwitchSidebar}>
          <GenericIcon name="Menu" />
        </MenuIconWrapper>
      </Nav>
    </Wrapper>
  );
};
