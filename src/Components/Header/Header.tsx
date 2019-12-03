import React from "react";

import {
  StyledContainer,
  NavWrapper,
  StyledHamburgerIcon,
  StyledCloseIcon,
} from "./elements";
import Navbar from "@src/components/Navbar";
import Sidebar from "@src/components/Sidebar";
import Logo from "@src/components/Logo";

export const Header: React.FC<{
  showSidebar: boolean;
  onSwitchSidebar: () => void;
}> = ({ showSidebar, onSwitchSidebar }) => {
  const navbarLinks = [{ path: "/about", label: "O nas" }];
  const sidebarLinks = [
    { path: "/catalog", label: "Katalog" },
    { path: "/contact", label: "Kontakt" },
  ];

  return (
    <header>
      <StyledContainer>
        <Logo link="/" />
        <NavWrapper>
          <Navbar items={navbarLinks} />
          <StyledHamburgerIcon onClick={onSwitchSidebar} />
        </NavWrapper>
      </StyledContainer>
      {showSidebar && (
        <Sidebar>
          <StyledCloseIcon onClick={onSwitchSidebar} />
          <Navbar items={sidebarLinks} />
        </Sidebar>
      )}
    </header>
  );
};
