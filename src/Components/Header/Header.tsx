import React from "react";

import { Wrapper, Nav, HamburgerIconWrapper } from "./elements";
import getIcon from "@src/icons";
import Navbar from "@src/components/Navbar";
import Logo from "@src/components/Logo";

const HamburgerIcon = getIcon("Hamburger");

export const Header: React.FC<{
  onSwitchSidebar: () => void;
}> = ({ onSwitchSidebar }) => {
  const navbarLinks = [{ path: "/about", label: "O nas" }];

  return (
    <Wrapper as="header">
      <Logo link="/catalog" />
      <Nav>
        <Navbar items={navbarLinks} />
        <HamburgerIconWrapper onClick={onSwitchSidebar}>
          <HamburgerIcon />
        </HamburgerIconWrapper>
      </Nav>
    </Wrapper>
  );
};
