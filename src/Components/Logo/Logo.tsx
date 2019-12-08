import React from "react";

import { Wrapper, Link } from "./elements";
import { ReactComponent as LogoIcon } from "@src/assets/icons/logo.svg";
import { Brand } from "@src/config/Confing";

const { nameWithDomain: Name } = Brand;

export const Logo: React.FC<{ link?: string }> = ({ link }) => (
  <>
    {link ? (
      <Link to={link}>
        <Wrapper>
          <LogoIcon /> {Name}
        </Wrapper>
      </Link>
    ) : (
      <Wrapper>
        <LogoIcon /> {Name}
      </Wrapper>
    )}
  </>
);
