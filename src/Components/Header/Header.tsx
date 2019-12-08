import React from "react";

import { Wrapper, Nav, HamburgerIcon } from "./elements";
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
        <HamburgerIcon onClick={onSwitchSidebar} />
      </Nav>
    </Wrapper>
  );
};
