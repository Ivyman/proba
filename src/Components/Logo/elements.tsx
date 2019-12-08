import styled from "@src/styles";

import { Link as RouterLink } from "react-router-dom";

export const Wrapper = styled.span`
  display: flex;
  align-items: center;
  svg {
    margin-right: 12px;
  }
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
  font-weight: bold;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.five}};
  color: ${({ theme: { palette } }) => palette.grayDark}};
`;
