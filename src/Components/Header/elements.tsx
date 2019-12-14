import styled from "@src/styles";

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
  a {
    color: ${({ theme: { palette } }) => palette.black};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.five};
    text-decoration: none;
  }
`;

export const HamburgerIconWrapper = styled.div`
  cursor: pointer;
`;
