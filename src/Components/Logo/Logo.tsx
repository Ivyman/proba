import React from "react";

import { Wrapper, WrapperLink } from "./elements";
import Icon from "@src/assets/icons";
import { Brand } from "@src/config/Confing";

const LogoIcon = Icon("Logo");
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
