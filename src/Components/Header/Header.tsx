import React from "react";
import styled from "@src/styles";

import { paths } from "@src/Config/Paths";
import { Container } from "@src/Components/layout/Container";
import { HamburgerIcon, CloseIcon } from "@src/assets/icons";
import Navbar from "@src/Components/Navbar";
import Sidebar from "@src/Components/Sidebar";
import Logo from "@src/Components/Logo";
import { IPath } from "@src/types/paths";

type IHeaderComponent = React.FunctionComponent<{
  showSidebar: boolean;
  onSwitchSidebar: () => void;
}>;

const headerNav = [paths.shift() as IPath];
const sidebarNav = [...paths];

export const Header: IHeaderComponent = ({ showSidebar, onSwitchSidebar }) => {
  return (
    <header>
      <StyledContainer>
        <Logo />
        <NavWrapper>
          <Navbar items={headerNav} />
          <StyledHamburgerIcon onClick={onSwitchSidebar} />
        </NavWrapper>
      </StyledContainer>
      {showSidebar && (
        <Sidebar>
          <StyledCloseIcon onClick={onSwitchSidebar} />
          <Navbar items={sidebarNav} />
        </Sidebar>
      )}
    </header>
  );
};

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledHamburgerIcon = styled(HamburgerIcon)`
  cursor: pointer;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`;
