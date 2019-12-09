import React from "react";
import ReactDOM from "react-dom";

import { Wrapper } from "./elements";
import Logo from "@src/components/Logo";

export const Sidebar: React.FC = ({ children }) => {
  const renderSidebar = () => (
    <Wrapper>
      <Logo link="/" />
      {children}
    </Wrapper>
  );
  const sidebarRoot = document.getElementById("sidebar-root") as HTMLElement;

  return ReactDOM.createPortal(renderSidebar(), sidebarRoot);
};
