import React from "react";
import ReactDOM from "react-dom";

import { Wrapper, StyledCloseIcon } from "./elements";
import Logo from "@src/components/Logo";

export const Sidebar: React.FC<{ onClose?: () => void }> = ({
  children,
  onClose,
}) => {
  const renderSidebar = () => (
    <Wrapper>
      {onClose && <StyledCloseIcon onClick={onClose} />}
      <Logo link="/" />
      {children}
    </Wrapper>
  );
  const sidebarRoot = document.getElementById("sidebar-root") as HTMLElement;

  return ReactDOM.createPortal(renderSidebar(), sidebarRoot);
};
