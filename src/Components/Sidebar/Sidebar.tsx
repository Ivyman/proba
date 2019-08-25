import React from "react";
import ReactDOM from "react-dom";
import styled from "@src/styles";

import Logo from "@src/Components/Logo";

type ISidebarComponent = React.FunctionComponent;

export const Sidebar: ISidebarComponent = ({ children }) => {
  const renderSidebar = () => (
    <Container>
      <Logo />
      {children}
    </Container>
  );
  const sidebarRoot = document.getElementById("sidebar-root") as HTMLElement;

  return ReactDOM.createPortal(renderSidebar(), sidebarRoot);
};

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.white};
  width: 30vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
`;
