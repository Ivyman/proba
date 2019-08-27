import React from "react";
import styled from "@src/styles";

import { paths } from "@src/Config/Paths";
import { Container } from "@src/Components/layout/Container";
import { HamburgerIcon } from "@src/assets/icons";
import Navbar from "@src/Components/Navbar";
import Sidebar from "@src/Components/Sidebar";
import Logo from "@src/Components/Logo";

type IHeaderComponent = React.FunctionComponent<{
  showSidebar: boolean;
  onSwitchSidebar: () => void;
}>;

export const Header: IHeaderComponent = ({ showSidebar, onSwitchSidebar }) => {
  return (
    <header>
      <StyledContainer>
        <Logo />
        <NavWrapper>
          <Navbar items={paths} />
          <StyledHamburgerIcon onClick={onSwitchSidebar} />
        </NavWrapper>
      </StyledContainer>
      {showSidebar && <Sidebar>Sidebar test</Sidebar>}
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
