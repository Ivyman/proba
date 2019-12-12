import styled, { css } from "@src/styles";

import { Link as RouterLink } from "react-router-dom";

const smallSize = css`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.six}};
  svg {
    height: 30px;
    margin-right: 4px;
  }
`;

const normalSize = css`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.five}};
`;

const WarapperStyles = css`
  text-decoration: none;
  font-weight: bold;
  color: ${({ theme: { palette } }) => palette.grayDark}};
  svg {
    vertical-align: middle;
    margin-right: 12px;
  }
`;

export const Wrapper = styled.span<{ small?: boolean }>`
  ${WarapperStyles}
  ${props => (props.small ? smallSize : normalSize)};
`;

export const WrapperLink = styled(RouterLink)<{ small?: boolean }>`
  ${WarapperStyles}
  ${props => (props.small ? smallSize : normalSize)};
`;
