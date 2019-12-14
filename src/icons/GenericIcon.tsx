import React from "react";
import { Maybe } from "true-myth";

import paths from ".";
import { IconTypes } from "@src/types/icons";

export const getIconPaths = (name: Maybe<IconTypes>) =>
  paths[name.map((value: IconTypes) => value).unwrapOr("Logo")];

export const GenericIcon: React.FC<{
  name: IconTypes;
  width?: number;
  height?: number;
}> = ({ name }) => {
  const IconPaths = getIconPaths(Maybe.just(name));

  return <IconPaths />;
};

export default GenericIcon;
