import React from "react";

import { Wrapper, WrapperLink } from "./elements";
import { Brand } from "@src/config/Confing";
import GenericIcon from "@src/icons/GenericIcon";

const { nameWithDomain: Name } = Brand;

export const Logo: React.FC<{ link?: string; small?: boolean }> = ({
  link,
  small,
}) => (
  <>
    {link ? (
      <WrapperLink to={link} small={small}>
        <GenericIcon name="Logo" /> {Name}
      </WrapperLink>
    ) : (
      <Wrapper small={small}>
        <GenericIcon name="Logo" /> {Name}
      </Wrapper>
    )}
  </>
);
