import React from "react";
import styled from "@src/styles";

import { ReactComponent as LogoIcon } from "@src/assets/icons/logo.svg";

type ILogoComponent = React.FunctionComponent;

export const Logo: ILogoComponent = () => (
  <Wrapper>
    <LogoIcon /> Logo
  </Wrapper>
);

export const Wrapper = styled.span`
  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
  }
`;
