import React from "react";
import { CSSTransition } from "react-transition-group";

import { Wrapper, CloseIcon } from "./elements";
import Logo from "@src/components/Logo";

export const Sidebar: React.FC<{
  sidebarStatus: boolean;
  onClose?: () => void;
}> = ({ children, sidebarStatus, onClose }) => (
  <CSSTransition
    in={sidebarStatus}
    timeout={200}
    classNames="sidebar"
    unmountOnExit
  >
    <Wrapper>
      <Logo link="/" />
      {onClose && <CloseIcon onClick={onClose} />}
      {children}
    </Wrapper>
  </CSSTransition>
);
