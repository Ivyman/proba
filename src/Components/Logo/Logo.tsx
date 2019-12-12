import React from "react";

import { Wrapper, WrapperLink } from "./elements";
import { ReactComponent as LogoIcon } from "@src/assets/icons/logo.svg";
import { Brand } from "@src/config/Confing";

const { nameWithDomain: Name } = Brand;

export const Logo: React.FC<{ link?: string; small?: boolean }> = ({
  link,
  small,
}) => (
  <>
    {link ? (
      <WrapperLink to={link} small={small}>
        <LogoIcon /> {Name}
      </WrapperLink>
    ) : (
      <Wrapper small={small}>
        <LogoIcon /> {Name}
      </Wrapper>
    )}
  </>
);
