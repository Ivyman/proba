import React from "react";

import Paths from "@src/routing/Paths";
import { IPath } from "@src/types/path";

import {
  StyledContainer,
  NavWrapper,
  StyledHamburgerIcon,
  StyledCloseIcon,
} from "./elements";
import Navbar from "@src/components/Navbar";
import Sidebar from "@src/components/Sidebar";
import Logo from "@src/components/Logo";

type IHeaderComponent = React.FunctionComponent<{
  showSidebar: boolean;
  onSwitchSidebar: () => void;
}>;

const paths = [...Paths.app.paths];
const headerNav = [paths.shift() as IPath];
const sidebarNav = [...paths];

export const Header: IHeaderComponent = ({ showSidebar, onSwitchSidebar }) => {
  return (
    <header>
      <StyledContainer>
        <Logo link="/" />
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
