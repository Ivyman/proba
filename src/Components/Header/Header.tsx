import React from "react";
import { Maybe } from "true-myth";

import { Wrapper, Nav, HamburgerIconWrapper } from "./elements";
import GenericIcon from "@src/icons/GenericIcon";
import Navbar from "@src/components/Navbar";
import Logo from "@src/components/Logo";

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
          <GenericIcon name="Hamburger" />
        </HamburgerIconWrapper>
      </Nav>
    </Wrapper>
  );
};
