import React from "react";

import { Container, NavWrapper, HamburgerIcon } from "./elements";
import Navbar from "@src/components/Navbar";
import Logo from "@src/components/Logo";

export const Header: React.FC<{
  onSwitchSidebar: () => void;
}> = ({ onSwitchSidebar }) => {
  const navbarLinks = [{ path: "/about", label: "O nas" }];

  return (
    <header>
      <Container>
        <Logo link="/catalog" />
        <NavWrapper>
          <Navbar items={navbarLinks} />
          <HamburgerIcon onClick={onSwitchSidebar} />
        </NavWrapper>
      </Container>
    </header>
  );
};
