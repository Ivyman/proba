import React from "react";
import styled from "@src/styles";

import { paths } from "@src/Config/Paths";
import { Container } from "@src/Components/layout/Container";
import Navbar from "@src/Components/Navbar";
import Logo from "@src/Components/Logo";

type IHeaderComponent = React.FunctionComponent;

export const Header: IHeaderComponent = () => {
  return (
    <header>
      <StyledContainer>
        <Logo />
        <Navbar items={paths} />
      </StyledContainer>
    </header>
  );
};

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;
