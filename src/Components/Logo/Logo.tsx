import React from "react";

import { Wrapper, Link } from "./elements";
import { Brand } from "@src/config/Confing";
import GenericIcon from "@src/icons/GenericIcon";

const { nameWithDomain: Name } = Brand;

export const Logo: React.FC<{ link?: string; small?: boolean }> = ({
  link,
  small,
}) => (
  <>
    {link ? (
      <Wrapper small={small}>
        <Link to={link}>
          <GenericIcon name="Logo" /> {Name}
        </Link>
      </Wrapper>
    ) : (
      <Wrapper small={small}>
        <GenericIcon name="Logo" /> {Name}
      </Wrapper>
    )}
  </>
);
