import React from "react";
import { Link } from "react-router-dom";

import { Wrapper } from "./elements";
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
