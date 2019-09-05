import React from "react";
import styled from "@src/styles";
import { Link } from "react-router-dom";

import { ReactComponent as LogoIcon } from "@src/assets/icons/logo.svg";

type ILogoComponent = React.FunctionComponent<{ link?: string }>;

export const Logo: ILogoComponent = ({ link }) => (
  <>
    {link ? (
      <Link to={link}>
        <Wrapper>
          <LogoIcon /> Logo
        </Wrapper>
      </Link>
    ) : (
      <Wrapper>
        <LogoIcon /> Logo
      </Wrapper>
    )}
  </>
);

export const Wrapper = styled.span`
  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
  }
`;
