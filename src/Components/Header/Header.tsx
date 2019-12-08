import React from "react";

import { StyledContainer, NavWrapper, StyledHamburgerIcon } from "./elements";
import Navbar from "@src/components/Navbar";
import Logo from "@src/components/Logo";

export const Header: React.FC<{
  onSwitchSidebar: () => void;
}> = ({ onSwitchSidebar }) => {
  const navbarLinks = [{ path: "/about", label: "O nas" }];

  return (
    <header>
      <StyledContainer>
        <Logo link="/catalog" />
        <NavWrapper>
          <Navbar items={navbarLinks} />
          <StyledHamburgerIcon onClick={onSwitchSidebar} />
        </NavWrapper>
      </StyledContainer>
    </header>
  );
};
