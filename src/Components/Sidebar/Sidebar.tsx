import React from "react";
import ReactDOM from "react-dom";

import Logo from "@src/components/Logo";

import { SidebarContainer } from "./elements";

export const Sidebar: React.FC = ({ children }) => {
  const renderSidebar = () => (
    <SidebarContainer>
      <Logo link="/" />
      {children}
    </SidebarContainer>
  );
  const sidebarRoot = document.getElementById("sidebar-root") as HTMLElement;

  return ReactDOM.createPortal(renderSidebar(), sidebarRoot);
};
