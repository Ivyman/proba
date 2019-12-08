import styled from "@src/styles";

import { HamburgerIcon as Hamburger } from "@src/assets/icons";
import Layout from "@src/components/Layout";

export const Wrapper = styled(Layout.Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HamburgerIcon = styled(Hamburger)`
  cursor: pointer;
`;
