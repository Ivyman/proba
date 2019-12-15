import React from "react";
import { CSSTransition } from "react-transition-group";

import { Wrapper, Footer, Body } from "./elements";
import { IPathWithIcon } from "@src/types/path";
import Logo from "@src/components/Logo";
import SidebarNav from "@src/components/SidebarNav";

const sidebarLinks: IPathWithIcon[] = [
  { path: "/catalog", label: "Katalog", icon: "Catalog" },
  { path: "/contact", label: "Kontakt", icon: "Contact" },
];

export const Sidebar: React.FC<{
  sidebarStatus: boolean;
}> = ({ sidebarStatus }) => (
  <CSSTransition
    in={sidebarStatus}
    timeout={200}
    classNames="sidebar"
    unmountOnExit
  >
    <Wrapper>
      <Body>
        <SidebarNav items={sidebarLinks} />
      </Body>
      <Footer>
        <Logo small />
      </Footer>
    </Wrapper>
  </CSSTransition>
);
