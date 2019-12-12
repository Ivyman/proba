import React from "react";
import { CSSTransition } from "react-transition-group";

import { Wrapper, CloseIcon, Footer, Header, Body } from "./elements";
import Logo from "@src/components/Logo";
import SidebarNav from "@src/components/SidebarNav";

const sidebarLinks = [
  { path: "/catalog", label: "Katalog", icon: "Catalog" },
  { path: "/contact", label: "Kontakt", icon: "Contact" },
];

export const Sidebar: React.FC<{
  sidebarStatus: boolean;
  onClose?: () => void;
}> = ({ sidebarStatus, onClose }) => (
  <CSSTransition
    in={sidebarStatus}
    timeout={200}
    classNames="sidebar"
    unmountOnExit
  >
    <Wrapper>
      <Header>{onClose && <CloseIcon onClick={onClose} />}</Header>
      <Body>
        <SidebarNav items={sidebarLinks} />
      </Body>
      <Footer>
        <Logo small />
      </Footer>
    </Wrapper>
  </CSSTransition>
);
