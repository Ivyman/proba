import React from "react";
import { CSSTransition } from "react-transition-group";

import { Wrapper } from "./elements";
import Logo from "@src/components/Logo";

export const Sidebar: React.FC<{ sidebarStatus: boolean }> = ({
  children,
  sidebarStatus,
}) => (
  <CSSTransition
    in={sidebarStatus}
    timeout={200}
    classNames="sidebar"
    unmountOnExit
  >
    <Wrapper>
      <Logo link="/" />
      {children}
    </Wrapper>
  </CSSTransition>
);
