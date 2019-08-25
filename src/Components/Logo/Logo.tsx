import React from "react";
import styled from "@src/styles";

import { LogoIcon } from "@src/assets/icons";

type ILogoComponent = React.FunctionComponent;

export const Logo: ILogoComponent = () => (
  <Wrapper>
    <LogoIcon />
  </Wrapper>
);

export const Wrapper = styled.span``;
