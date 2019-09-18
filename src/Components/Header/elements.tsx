import styled from "@src/styles";

import { HamburgerIcon, CloseIcon } from "@src/assets/icons";
import Layout from "@src/components/Layout";

const { Container } = Layout;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledHamburgerIcon = styled(HamburgerIcon)`
  cursor: pointer;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`;
