import React from "react";
import ReactDOM from "react-dom";

import Logo from "@src/components/Logo";
import { Wrapper } from "./elements";

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
