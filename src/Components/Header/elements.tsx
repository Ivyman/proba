import styled from "@src/styles";

import { HamburgerIcon as Hamburger } from "@src/assets/icons";
import Layout from "@src/components/Layout";

export const Container = styled(Layout.Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HamburgerIcon = styled(Hamburger)`
  cursor: pointer;
`;
