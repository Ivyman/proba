import styled, { css } from "@src/styles";

import { Link as RouterLink } from "react-router-dom";

const smallSize = css`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.six}};
  svg {
    margin-right: 4px;
    height: 30px;
  }
`;

const normalSize = css`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.five}};
`;

export const Wrapper = styled.span<{ small?: boolean }>`
  text-decoration: none;
  font-weight: bold;
  color: ${({ theme: { palette } }) => palette.grayDark}};
  svg {
    vertical-align: middle;
    margin-right: 10px;
  }
  ${({ small }) => (small ? smallSize : normalSize)};
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: ${({ theme: { palette } }) => palette.grayDark}};
`;
