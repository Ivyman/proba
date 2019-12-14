import React from "react";
import { Maybe } from "true-myth";

import icons from ".";
import { IconTypes } from "@src/types/icons";

export const getIcon = (name: Maybe<IconTypes>) =>
  icons[name.map((value: IconTypes) => value).unwrapOr("Logo")];

export const Icon: React.FC<{ name: IconTypes }> = ({ name }) => {
  const IconComponent = getIcon(Maybe.just(name));

  return <IconComponent />;
};

export default Icon;
